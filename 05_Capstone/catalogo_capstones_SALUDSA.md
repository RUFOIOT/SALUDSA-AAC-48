# Catálogo de capstones — SAL-C1 y SAL-C2
Cada capstone cumple el brief del pensum base (`00_Base_Pensum/04_Proyecto_Capstone.md`): proceso real ≥ 20 ejecuciones/mes, línea base medida, ≥ 2 componentes del ecosistema, 20 casos de eval, control de acción irreversible, costo con fórmula, traspaso, Git. Aquí se listan **alcances pre-aprobados** para acelerar T1. Cada uno con su número antes/después para el Show & Tell.

## Comercial (RN)
| # | Capstone | Componentes | Número antes/después |
|---|---|---|---|
| C1 | Preparación de respuesta a escalamientos de Isabel | Project + skill + KB | Minutos por escalamiento resuelto |
| C2 | Calificación y priorización diaria de leads del pipeline de prueba | API + tool use + calificador | % de leads score 5 contactados en < 24 h |
| C3 | Guion de primer contacto por plan y ciudad, con comparador interno | Artifact + KB | Tiempo de primera respuesta humana |
| C4 | Set de regresión de Isabel: de 20 a 100 casos depurados con dueño | Evals + qa-isabel | % aprobación del agente en producción |

## Marketing
| # | Capstone | Componentes | Número |
|---|---|---|---|
| M1 | Verificador de claims para todas las piezas de Pep & Zizu antes de publicar | Redactor de claims + KB + Design | Piezas devueltas por Legal/mes |
| M2 | Brief semanal de campaña desde métricas + KB con punto de control | Cowork + skill | Horas de preparación de brief |
| M3 | Biblioteca de piezas aprobadas por plan/audiencia con tabla de claims | Project + Design | Tiempo de producción por pieza |

## Servicio, Reembolsos, Autorizaciones (SAL-C2)
| # | Capstone | Componentes | Número |
|---|---|---|---|
| S1 | Clasificador y ruteo de tickets con cola humana para dato de salud | API + tool use + MCP | % tickets ruteados correctamente sin intervención |
| S2 | RAG de procedimientos de servicio con vigencia y política anti-invención | RAG + evals | % respuestas con cita vigente |
| S3 | Detector de tickets duplicados y reclamos recurrentes | Cowork + skill | Tickets duplicados/mes |
| S4 | Borrador de respuesta a solicitudes de carnet/credencial y cambios simples | Project + KB | Minutos por ticket P3 |

## Calidad, Auditoría Médica, Legal, TI
| # | Capstone | Componentes | Número |
|---|---|---|---|
| G1 | Supervisión semanal de Isabel: skill + subagente + consola | Claude Code + Artifacts | % conversaciones ALTO revisadas en < 48 h |
| G2 | Auditor LOPDP de exports y prompts antes de cada despliegue | Auditor + hook | Hallazgos bloqueantes por despliegue |
| G3 | Matriz de permisos y registro de acciones de conectores del proyecto | MCP + Governance | Conectores con permisos documentados (%) |
| G4 | Detector de fronteras clínicas cruzadas en autorizaciones (solo señalización) | Clasificador + Auditoría Médica | Tiempo de detección |

**Rechazados de antemano:** chatbot que "responda todo"; agente que apruebe autorizaciones o reembolsos; retención automática de afiliados que quieren cancelar; cualquier flujo que decida sobre pertinencia médica.
