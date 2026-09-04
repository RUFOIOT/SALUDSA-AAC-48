# S13 · RAG II: evaluación de recuperación y RAG agéntico — "no está en la base"
**Semana 7 · Mié 25 nov · Módulo 8 · Capa: Knowledge Bases**

## Objetivo verificable
Cada participante reporta métricas de recuperación antes y después de una corrección, distingue fallo de recuperación de fallo de generación, y demuestra que sus 3 preguntas sin respuesta en la base devuelven "no está en la base".

## Preparación
- Set etiquetado de ejemplo (20 preguntas sobre la FAQ, 3 sin respuesta: "¿cubren cirugía estética?", "¿cuál es el precio exacto del Familiar Plus para 42 años?", "¿tienen convenio con la clínica X en Esmeraldas?").
- Hoja de métricas: acierto top-3, posición del fragmento correcto, fidelidad, cobertura, cita correcta.

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | Cuántos pipelines siguen devolviendo Q7 |
| 10–25 | Dos fallos distintos | Recuperó mal vs. recuperó bien y generó mal. Demo con la pregunta de maternidad: fragmento correcto en top-3, respuesta que omite la carencia → fallo de generación |
| 25–40 | Métricas | Sobre 20 preguntas etiquetadas: acierto top-k, posición, fidelidad al fragmento, cobertura, cita. Se calculan en vivo para el pipeline de referencia |
| 40–50 | Corrección y RAG agéntico | Filtro por `vigencia` elimina Q7. Reordenamiento. Reescritura de consulta. RAG agéntico: el agente decide buscar, reformula, busca dos veces. Y la regla dura: si no está, decir que no está. Se muestra un prompt que fuerza la respuesta "no está en la base aprobada; un asesor confirma" |
| 50–100 | Lab guiado | Todos corren su set de 20 sobre su pipeline. Métricas antes. Aplican filtro por vigencia. Métricas después |
| 100–110 | Pausa | |
| 110–165 | Lab 13 | Informe: métricas antes/después, diagnóstico por tipo de fallo, corrección, las 3 preguntas sin respuesta devuelven "no está en la base" |
| 165–180 | Cierre | Tabla de métricas del grupo. Bitácora: "Política anti-invención v1: toda respuesta sin fragmento con vigencia válida → 'no está en la base', escalar a RN". Encargo: diagrama del capstone para S14 (T2 ya revisó arquitectura) |

## Vínculo con el proyecto
La **política anti-invención** se incorpora al prompt de Isabel y a los evals. La métrica "respuestas con fragmento citado y vigente" se reporta en la consola de estado de S14.

## Criterio (Lab 13)
20 preguntas etiquetadas con 3 sin respuesta · métricas antes/después · diagnóstico recuperación vs. generación · una corrección medida · "no está en la base" en las 3.
