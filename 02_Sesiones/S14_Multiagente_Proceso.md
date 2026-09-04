# S14 · Arquitecturas multi-agente y automatización del proceso — consola de estado SALUDSA
**Semana 7 · Mié 18 nov · 16:00–18:00 · Módulo 9 · Capas: HTML Artifacts + Governance · BLOQUEANTE · Agente relacionado: los tres subagentes HubSpot, Isabel, Pep & Zizu**

## Objetivo verificable
Cada participante entrega el diagrama de arquitectura de su capstone con modos de fallo, límites numéricos y aprobador con cargo; el grupo publica la **consola de estado de agentes SALUDSA v1** como artifact.

## Preparación
- Diagrama real (simplificado y autorizado) de la arquitectura del proyecto SALUDSA: Isabel, Pep & Zizu, subagentes HubSpot (conversión, inteligencia de leads, hiperpersonalización), pipeline separado, 4 propiedades de Contacto.
- Plantilla de consola de estado (`06_Operacion/consola_estado_agentes.html`).
- Datos de la semana: tasa de escalamiento, casos de regresión aprobados, respuestas con cita vigente, costo acumulado.

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | Métricas RAG del grupo. Estado de los capstones tras T2 |
| 10–25 | Cuándo basta un agente | La mayoría de las veces basta. Patrones: cadena, enrutador, orquestador + especialistas, evaluador–ejecutor. Se ubica el proyecto SALUDSA: **enrutador (Isabel) + especialistas (3 subagentes) + evaluador (QA)** y se explica por qué no un solo prompt gigante |
| 25–40 | Composición y estado | Skills = procedimiento, subagentes = especialistas, MCP = acceso, RAG = memoria de la organización. Qué se pasa entre agentes: resumen, nunca la conversación completa con datos personales |
| 40–50 | Modos de fallo y controles | Bucle infinito, costo descontrolado, error propagado, pérdida de trazabilidad. Controles en números: máximo 6 iteraciones, USD 0,40 por conversación, registro de cada llamada a herramienta, aprobación humana antes de cambiar etapa a "Cerrado" o enviar oferta |
| 50–100 | Lab guiado | Se construye la **consola de estado** en vivo: 4 tarjetas (escalamiento, regresión, cita vigente, costo), tabla de conversaciones de riesgo ALTO pendientes de revisión humana, semáforo por agente. Se conecta a los datos de la semana |
| 100–110 | Pausa | |
| 110–165 | Lab 14 | Diagrama del capstone propio: componentes, flujo de datos, puntos de decisión, justificación de un agente o varios, tabla de modos de fallo, límites numéricos, aprobador con cargo. Plan de adopción: quién lo usa el lunes |
| 165–180 | Cierre | Consola publicada. Bitácora final de la fase sincrónica. Calendario de T3, examen, defensas y Show & Tell. "La automatización que nadie usa vale cero: su plan de adopción es la última página de su capstone" |

## Vínculo con el proyecto
La consola de estado v1 es el **tablero que Nicolás González ve cada lunes**. Contiene lo que el equipo de SALUDSA mide sobre sus propios agentes, con su propio set de regresión, su propia skill de revisión y su propia política anti-invención.

## Criterio (Lab 14) — bloqueante
Diagrama con flujo y decisiones · justificación de arquitectura · modos de fallo con detección y respuesta · límites en números · aprobador con cargo · plan de adopción.
