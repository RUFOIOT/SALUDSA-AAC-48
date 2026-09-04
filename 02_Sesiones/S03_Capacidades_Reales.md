# S03 · Capacidades y limitaciones de Claude en escenarios reales de SALUDSA
**Semana 2 · Lun 12 oct · 16:00–18:00 · Módulo 3 · Agente relacionado: Isabel, Clasificador de tickets**

## Objetivo verificable
Cada participante corre 10 casos reales (o sintéticos autorizados) sobre una tarea de su área y reporta el porcentaje de acierto con al menos 2 casos límite y 1 fallo analizado.

## Preparación
- `leads_sinteticos.csv`, `tickets_afiliados_sinteticos.csv` (o sus versiones reales anonimizadas si ya llegó la autorización).
- Pizarra compartida con tabla de resultados por participante.
- Prompt base de clasificación de tickets, deliberadamente mediocre, para que el grupo lo rompa.

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | Resultados del Quiz 1. 2 matrices de riesgo en pantalla |
| 10–30 | Dónde rinde alto / dónde falla | Tabla de 2 columnas construida con ejemplos SALUDSA: reescribir un mensaje de RN (alto), extraer edad y ciudad de un chat (alto), calcular prima exacta (falla), conocer el estado de un reembolso de hoy (falla, no tiene acceso), decidir si una preexistencia aplica (no debe) |
| 30–50 | Fallo silencioso en vivo | Se clasifican 5 tickets con el prompt mediocre. Uno de "reclamo" sale como "red_medica" con total seguridad. "Esto es lo que ve un supervisor si no mide" |
| 50–100 | Lab guiado | Diseño de prueba mínima: 10 casos, salida esperada declarada **antes** de correr, criterio binario. Se corren 10 tickets del CSV. Se tabula acierto. El grupo diseña 2 casos límite (ticket con dato de salud + texto ambiguo) |
| 100–110 | Pausa | |
| 110–165 | Lab 03 | Cada quien sobre su tarea: RN → 10 mensajes de prospectos y la respuesta esperada de Isabel; Marketing → 10 claims de campaña y si son verificables en KB; Servicio → 10 tickets y su ruteo. Tabla: caso, esperado, obtenido, veredicto, tipo de fallo |
| 165–180 | Cierre | Porcentajes en la pizarra. Bitácora: "Isabel acierta X % en calificación; los fallos se concentran en ___". Encargo: completar el análisis de un fallo |

## Vínculo con el proyecto
Los casos límite que rompen el sistema van al **set de regresión**. Un participante que reporta 10/10 sin casos límite no aprobó: diseñó una prueba complaciente.

## Criterio (Lab 03)
10 casos reales/autorizados · 2 casos límite · % de acierto · 1 fallo con causa probable.

## Riesgos
Que usen los datos sintéticos sin criterio. Pedir que al menos 3 casos vengan de su experiencia real, reescritos sin datos personales.
