# S09 · Claude Code II: skills, subagentes, hooks y comandos — el supervisor de Isabel
**Semana 5 · Mié 4 nov · 16:00–18:00 · EXCEPCIÓN feriados 2-3 nov · Módulo 6 · Capa: Agents · Agente relacionado: Isabel (P01)**

## Objetivo verificable
Cada participante entrega una skill propia (con descripción que dispara correctamente en 3 casos y no dispara en 1) y un subagente con alcance limitado, versionados en su repositorio.

## Preparación
- Skill de referencia `revision-conversacion-isabel/SKILL.md` (en `03_Recursos/RCTFX/`).
- Subagente de referencia `qa-isabel` con prompt y herramientas solo de lectura.
- Hook de ejemplo: bloquea cualquier escritura en `/datos-reales/`.

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | 2 repositorios en pantalla |
| 10–25 | Skills | Procedimiento empaquetado que se carga cuando corresponde. Anatomía: descripción (cuándo usarla), pasos, criterio de salida, recursos. Se muestra la skill de referencia y se ejecuta sobre 3 conversaciones |
| 25–40 | La descripción es todo | Ejercicio: 4 descripciones de la misma skill, de "ayuda con conversaciones" a "usar cuando se revise una conversación de Isabel contra fronteras clínicas y set de regresión". Se prueba cuál dispara. Regla: si la descripción no dice cuándo, nunca se activa cuando toca |
| 40–50 | Subagentes, hooks, comandos | Subagente = aislamiento + herramientas limitadas. El `qa-isabel` solo lee, nunca escribe en HubSpot. Hook = verificación determinista que el modelo puede olvidar (bloqueo de `/datos-reales/`). Comando = tarea repetida con un nombre. Tabla: MCP da acceso, skill da procedimiento, subagente da aislamiento |
| 50–100 | Lab guiado | Todos instalan la skill de referencia, la corren sobre 5 conversaciones sintéticas, leen el informe. Luego crean el subagente `qa-isabel` y comparan: ¿qué cambió al aislar el contexto? |
| 100–110 | Pausa | |
| 110–165 | Lab 09 | Skill propia: RN → "preparar respuesta a consulta que Isabel escaló"; Marketing → "verificar claims contra KB"; Servicio → "triaje de ticket con dato de salud". Subagente propio con justificación del aislamiento. 3 disparos + 1 no-disparo documentados |
| 165–180 | Cierre | Se muestra una descripción que no disparaba y su corrección. Bitácora: "Skill de revisión de Isabel v1 instalada en el repo de supervisión". Encargo: crear clave de API y **configurar límite de gasto** (captura obligatoria) |

## Vínculo con el proyecto
Desde esta semana, **el equipo de SALUDSA corre la revisión semanal de Isabel con su propia skill**, no ORION. El informe semanal se guarda en `Agentes-SALUDSA/supervision/AAAA-SS.md`. ORION recibe el informe, no lo produce.

## Criterio (Lab 09)
Descripción con "cuándo" · 3 disparos + 1 no-disparo · pasos numerados y criterio de salida · subagente con alcance limitado justificado · todo en Git.
