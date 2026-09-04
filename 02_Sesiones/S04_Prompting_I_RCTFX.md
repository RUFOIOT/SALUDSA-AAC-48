# S04 · Prompt engineering I: RCTFX aplicado al proceso comercial
**Semana 2 · Mié 14 oct · 16:00–18:00 · Módulo 4 · Capa: Agents · Agente relacionado: subagente de hiperpersonalización, Pep & Zizu**

## Objetivo verificable
Cada participante entrega un prompt de producción v1 en RCTFX para un subproceso propio, con datos en etiquetas y formato verificable por máquina.

## Preparación
- Biblioteca RCTFX SALUDSA (`03_Recursos/RCTFX/`) abierta.
- Prompt "malo" de 4 líneas y su versión RCTFX del mismo caso (calificador de leads).
- 5 corridas de cada uno ya ejecutadas, para comparar en 2 minutos.

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | 2 matrices de fallo. Dónde se concentraron los fallos del grupo |
| 10–25 | RCTFX | Rol, Contexto, Tarea, Formato, eXamples. Cada componente con su función. Se muestra el prompt del **Calificador de leads SALUDSA** de la biblioteca y se señala cada parte |
| 25–35 | Separar instrucción de datos | Etiquetas alrededor del mensaje del prospecto. Conexión con S02: es la defensa contra inyección |
| 35–45 | Ejemplos y salida estructurada | 2 ejemplos, uno difícil (reclamo disfrazado de consulta). Salida JSON con `intencion`, `score`, `siguiente_accion`, `escalar`. "Si HubSpot no puede leerlo, no sirve" |
| 45–50 | Antipatrones | Prompt de 3 páginas vs. 25 líneas estructuradas. Cortesía no es especificación |
| 50–100 | Lab guiado | Reescribir el prompt mediocre de clasificación de tickets en RCTFX, en vivo, todos a la vez. Se corren 5 tickets. Se compara con S03 |
| 100–110 | Pausa | |
| 110–165 | Lab 04 | Prompt de producción v1 del subproceso propio. RN: respuesta de primer contacto por plan. Marketing: redactor de copy con claims verificables. Servicio: clasificador. Versionado con fecha y autor |
| 165–180 | Cierre | 2 prompts en pantalla, revisión con la rúbrica R2. Bitácora: "Salida de Isabel hacia HubSpot debe ser JSON estricto". Encargo: 20 casos para S05 |

## Vínculo con el proyecto
Los prompts de primer contacto por plan escritos por los RN se contrastan con el comportamiento actual de Isabel. Lo que los RN escriben mejor que el agente **entra al prompt del proyecto**; lo que escriben peor, se discute en S05 con datos.

## Criterio (Lab 04)
5 componentes delimitados · datos en etiquetas · formato verificable · ≥ 2 ejemplos, uno difícil · versionado.
