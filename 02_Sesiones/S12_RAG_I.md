# S12 · RAG I: ingesta, fragmentación, embeddings y recuperación — la KB de planes con versión
**Semana 6 · Mié 11 nov · 16:00–18:00 · Módulo 8 · Capa: Knowledge Bases · Agente relacionado: Isabel, RAG de Servicio**

## Objetivo verificable
Cada participante monta un pipeline RAG sobre ≥ 20 documentos (KB aprobada o FAQ sintética + documentos de su área), con fragmentación justificada, metadatos de `area`, `version`, `vigencia`, `sensibilidad`, y 5 consultas con fragmentos visibles y citación.

## Preparación
- KB aprobada en formato con metadatos (o FAQ sintética, que ya los trae, incluida la Q7 obsoleta a propósito).
- Notebook/plantilla `rag_base` (técnico) y Project con KB estructurada (operador).
- Ejemplo de tabla de coberturas mal fragmentada (cortada por caracteres) para mostrar el daño.

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | Matriz de permisos consolidada: versión final |
| 10–25 | El problema | Contexto limitado, KB que cambia cada trimestre, obligación de citar fuente (normativa: información veraz al usuario). Antes de RAG: ¿bastaba contexto largo + caché? Se responde con números para la KB de SALUDSA |
| 25–40 | Arquitectura y fragmentación | Ingesta → fragmentación → vectorización → índice → recuperación → generación. Demo del daño: la tabla de carencias cortada por caracteres responde carencia de maternidad con la fila de odontología |
| 40–50 | Metadatos y recuperación híbrida | Sin `version` y `vigencia` el sistema mezcla la política de reembolso de 2025 con la de 2026 (Q7 vs Q5). Léxico + semántico: "Plan Senior 60+" y códigos de prestación se recuperan mejor por coincidencia exacta |
| 50–100 | Lab guiado | Ingesta de la FAQ con metadatos. 5 consultas. Se observa qué fragmentos vuelven. Se hace la pregunta de reembolso y se ve si vuelve Q5 o Q7 |
| 100–110 | Pausa | |
| 110–165 | Lab 12 | Pipeline propio con 20+ documentos. Fragmentación justificada por escrito. 5 consultas con fragmentos y cita |
| 165–180 | Cierre | 2 pipelines. Bitácora: "KB de planes con metadatos v1; Q7 obsoleta aún se cuela en X de 12 pipelines". Encargo: etiquetar 20 preguntas con su fragmento correcto para S13, incluidas 3 sin respuesta en la base |

## Vínculo con el proyecto
La KB con metadatos de versión y vigencia es la que **Isabel debe consultar en producción**. El hallazgo "Q7 se cuela" es exactamente el defecto que hay que impedir antes de que un prospecto reciba una política obsoleta.

## Criterio (Lab 12)
20+ docs · fragmentación justificada · metadatos mínimos · 5 consultas con fragmentos · citación.
