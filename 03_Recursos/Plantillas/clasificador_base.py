"""
Clasificador de tickets SALUDSA — script base para S10 (Lab 10).
Requiere: pip install anthropic ; variable de entorno ANTHROPIC_API_KEY ; límite de gasto configurado en la consola.
Uso: python clasificador_base.py ../Datasets/tickets_afiliados_sinteticos.csv
NUNCA apuntar a HubSpot productivo: escribe en hubspot_simulado.json.
"""
import csv, json, os, sys, time
import anthropic

MODEL = os.environ.get("CLAUDE_MODEL", "claude-sonnet-5")  # revalidar nombre de modelo vigente en docs.claude.com
SYSTEM = open(os.path.join(os.path.dirname(__file__), "..", "RCTFX", "AG_Clasificador_Tickets.md"), encoding="utf-8").read()

TOOL = {
    "name": "rutear_ticket",
    "description": "Asigna categoría, prioridad y área a un ticket de afiliado. Úsala una vez por ticket. Si contiene_dato_salud es true, el sistema lo encola para revisión humana y NO lo rutea automáticamente.",
    "input_schema": {"type": "object", "properties": {
        "ticket_id": {"type": "string"},
        "categoria": {"type": "string", "enum": ["reembolso","autorizacion","carnet_credencial","cambio_plan","reclamo","red_medica","otro"]},
        "prioridad": {"type": "string", "enum": ["P1","P2","P3"]},
        "area_destino": {"type": "string", "enum": ["Reembolsos","Auditoría Médica","Servicio al Afiliado","Comercial","Calidad"]},
        "contiene_dato_salud": {"type": "boolean"},
        "nota": {"type": "string"}},
        "required": ["ticket_id","categoria","prioridad","area_destino","contiene_dato_salud"]}}

def rutear_ticket(args, simulado):
    """Ejecuta la herramienta. Regla dura: dato de salud -> cola humana, no ruteo."""
    if args["contiene_dato_salud"]:
        simulado["cola_humana"].append(args); return {"ok": True, "accion": "encolado_humano"}
    simulado["ruteados"].append(args); return {"ok": True, "accion": "ruteado"}

def clasificar(client, ticket_id, texto, simulado, intentos=3):
    msgs = [{"role": "user", "content": f"<ticket id='{ticket_id}'>{texto}</ticket>"}]
    for i in range(intentos):
        try:
            r = client.messages.create(model=MODEL, max_tokens=300, system=SYSTEM, tools=[TOOL], messages=msgs)
            break
        except anthropic.RateLimitError:
            time.sleep(2 ** i); continue  # reintento con espera
    else:
        return {"ticket_id": ticket_id, "error": "rate_limit"}
    llamadas = [b for b in r.content if b.type == "tool_use"]
    if not llamadas:  # caso: el modelo no llamó la herramienta
        return {"ticket_id": ticket_id, "sin_llamada": True, "texto": "".join(getattr(b, "text", "") for b in r.content)}
    args = llamadas[0].input
    res = rutear_ticket(args, simulado)
    return {**args, **res, "tokens_in": r.usage.input_tokens, "tokens_out": r.usage.output_tokens}

if __name__ == "__main__":
    client = anthropic.Anthropic()
    simulado = {"ruteados": [], "cola_humana": []}
    salidas, tin, tout = [], 0, 0
    with open(sys.argv[1], encoding="utf-8") as f:
        for row in csv.DictReader(f):
            s = clasificar(client, row["ticket_id"], row["texto"], simulado)
            s["esperado"] = row["categoria_esperada"]; salidas.append(s)
            tin += s.get("tokens_in", 0); tout += s.get("tokens_out", 0)
    json.dump(simulado, open("hubspot_simulado.json", "w"), ensure_ascii=False, indent=2)
    json.dump(salidas, open("resultados.json", "w"), ensure_ascii=False, indent=2)
    ok = sum(1 for s in salidas if s.get("categoria") == s["esperado"])
    print(f"acierto: {ok}/{len(salidas)} | tokens in/out: {tin}/{tout} | cola humana: {len(simulado['cola_humana'])}")
    print("Costo mensual = (tickets/mes) x (tokens_in+tokens_out por ticket) x precio vigente por token. Ver docs.claude.com/en/api/overview")
