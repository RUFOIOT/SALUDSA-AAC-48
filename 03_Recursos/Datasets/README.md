# Datasets sintéticos — SALUDSA

**Todos los datos son ficticios.** Nombres, planes ("Esencial Individual", "Familiar Plus", "Corporativo PYME", "Senior 60+"), precios y casos fueron generados para práctica. No representan productos, afiliados ni tarifas reales de SALUDSA. Antes de la cohorte, SALUDSA sustituye estos archivos por versiones con su catálogo real y datos **anonimizados** bajo autorización de su Delegado de Protección de Datos.

| Archivo | Filas | Uso en sesión |
|---|---|---|
| `leads_sinteticos.csv` | 60 | S03 (matriz de fallos), S05 (eval), S10 (tool use con HubSpot simulado), S14 |
| `conversaciones_whatsapp_sinteticas.csv` | 40 | S02 (riesgo), S04–S05 (prompting), S09 (supervisor de Isabel) |
| `tickets_afiliados_sinteticos.csv` | 50 | S03, S05, S10 (clasificación y ruteo), Capstone Servicio |
| `eval_isabel_20_casos.csv` | 20 | S05, S13, S14 — set de regresión del agente de ventas |
| `faq_planes_sinteticas.md` | 30 preguntas | S06 (Project), S12–S13 (RAG) |
| `glosario_medicina_prepagada.md` | 40 términos | Todas las sesiones |

Columna `contiene_dato_salud`: marca qué registros serían **datos sensibles** bajo la LOPDP si fueran reales. Se usa en S02 y S11 para practicar filtrado y mínimo acceso.
