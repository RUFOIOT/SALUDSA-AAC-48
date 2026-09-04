# S10 · API de Claude: mensajes, tool use, streaming y costo — clasificador con ruteo
**Semana 5 · Vie 13 nov · Módulo 7 · Capa: MCP Connectors · BLOQUEANTE · Agente relacionado: subagentes HubSpot**

## Objetivo verificable
Cada participante ejecuta un script (técnico) o flujo configurado (operador) que llama a la API, define una herramienta `rutear_ticket`, maneja el caso sin llamada y el error de límite de tasa, y estima el costo mensual con fórmula.

## Preparación
- **Verificación de límite de gasto en cada cuenta antes de empezar.** Sin captura, no hay laboratorio.
- Script base en `03_Recursos/Plantillas/clasificador_base.py` con la herramienta `rutear_ticket(categoria, prioridad, area_destino, contiene_dato_salud)`.
- Simulador de HubSpot (JSON local) para no tocar el productivo.
- Referencia revalidada: https://docs.claude.com/en/api/overview

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | Capturas de límite de gasto en pantalla, una por una. Quien no la tiene, la configura ahora |
| 10–25 | Anatomía de una llamada | Sistema, mensajes, tokens máximos. Clave fuera del código, `.gitignore`. Demo: clasificar 1 ticket |
| 25–45 | Tool use | Definir `rutear_ticket` con esquema. Ciclo: el modelo pide la herramienta → el código la ejecuta (escribe en el simulador) → devuelve resultado. Caso: el modelo no llama nada y responde texto: qué hace el sistema. Caso: `contiene_dato_salud = true` → la herramienta **no rutea automáticamente**, encola para humano |
| 45–50 | Streaming, lotes, errores, costo | Streaming para experiencia; lotes para 2 000 tickets históricos de noche; reintento con espera ante límite de tasa. Fórmula de costo en pizarra con volumen real de tickets de SALUDSA (dato de Servicio) |
| 50–100 | Lab guiado | Técnico: correr el script sobre 50 tickets sintéticos, ver el JSON del simulador, forzar un error de tasa. Operador: mismo flujo configurado en un artifact/automatización con la misma herramienta y el mismo criterio de dato de salud |
| 100–110 | Pausa | |
| 110–165 | Lab 10 | Herramienta propia (una por carril/área), manejo de los dos casos, estimación de costo mensual: volumen × tokens × precio, con caché sobre la KB |
| 165–180 | Cierre | 3 estimaciones de costo en pizarra; se comparan con las proyecciones del proyecto SALUDSA (ORION las presenta). Bitácora: "Clasificador de tickets piloto v1; costo estimado USD X/mes". Encargo: listar los sistemas que toca su proceso (HubSpot, Drive, Slack, app de afiliados…) |

## Vínculo con el proyecto
El clasificador con regla de dato de salud es el **piloto de Servicio** de la segunda cohorte, y su lógica de "no rutear automáticamente lo sensible" se traslada al agente de conversión en HubSpot.

## Criterio (Lab 10) — bloqueante
Clave en entorno + `.gitignore` · **captura de límite de gasto** · herramienta con esquema válido · caso sin llamada · reintento por tasa · costo con fórmula visible.
