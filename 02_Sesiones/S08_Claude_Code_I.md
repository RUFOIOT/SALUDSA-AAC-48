# S08 · Claude Code I: instalación, contexto del proyecto y primer flujo
**Semana 4 · Mié 28 oct · 16:00–18:00 · Módulo 6 · Capa: Automations · BLOQUEANTE**

## Objetivo verificable
Todos salen con Claude Code operando sobre un repositorio propio con Git, archivo de contexto y una tarea completada y corregida.

## Preparación
- Sesión de soporte de instalación realizada el jueves. Lista de quién ya tiene entorno.
- Repositorio plantilla `saludsa-supervision-template` con estructura y archivo de contexto de ejemplo.
- Asistente técnico en sala paralela durante toda la sesión.
- Referencia oficial revalidada: https://docs.claude.com/en/docs/claude-code/overview
- Carril operador: carpeta `supervision-docs/` con 30 archivos de conversaciones sintéticas en `.md` para ordenar y documentar.

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | Check de entorno: quién corre `claude` en terminal. Los que no, a sala paralela desde ya |
| 10–25 | Modelo mental | Un agente con acceso a archivos y terminal dentro de un directorio. Permisos: qué se aprueba una vez, qué siempre. "Nunca en una carpeta sin Git" |
| 25–40 | Archivo de contexto | Se escribe en vivo para `saludsa-supervision`: qué es, convenciones, **qué no debe tocar** (nada en `/datos-reales/`, nunca borrar exports). Conexión con RCTFX |
| 40–50 | Primer flujo no-código | En la carpeta de 30 conversaciones: "clasifica por intención, renombra con prefijo, genera índice". Se revisa el diff. Se le corrige algo a propósito |
| 50–100 | Lab guiado | Todos: clonar plantilla, `git init`, archivo de contexto propio, ejecutar la misma tarea, revisar diff, commit. Carril técnico: además un script que cuente conversaciones por intención |
| 100–110 | Pausa | |
| 110–165 | Lab 08 | Tarea propia sobre su carpeta/repositorio. Obligatorio: una corrección al agente documentada |
| 165–180 | Cierre | 2 diffs comentados. Bitácora: "Repositorio de supervisión v1 en Git". Encargo: identificar el procedimiento que más repiten para empaquetarlo en S09 |

## Vínculo con el proyecto
El repositorio `saludsa-supervision` es donde vivirán la skill de revisión, el subagente QA y los evals. Es propiedad de SALUDSA desde el día uno.

## Criterio (Lab 08) — bloqueante
Git con ≥ 2 commits · archivo de contexto con "qué no tocar" · tarea completada con diff comentado · evidencia de una corrección al agente.

## Contingencia
Quien no tenga entorno al cierre: 48 h con el asistente; si no, carril operador con entorno provisto por ORION. No se avanza a S09 sin Lab 08.
