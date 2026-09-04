# Programa SALUDSA
## Automatización y Agentes de IA con Claude — Cohorte Corporativa SALUDSA
**Código:** VBM-AAC-48-SAL · **Cliente:** SALUDSA (CLI-001) · **Emisor:** Vibramente / ORION AI Strategy
**Versión:** 1.0 · 4 de septiembre de 2026 · Uso interno ORION + Dirección Comercial SALUDSA

---

## 1. Qué es este programa y qué no es

Es la fusión de dos cosas que ya existen y funcionan:

| Origen | Qué aporta |
|---|---|
| **Pensum VBM-AAC-48** (48 h, 14 sesiones, certificación con suficiencia) | Profundidad técnica, rigor de evaluación, credencial defendible |
| **AI Operator Cohort** (Talent Scout, 8 sesiones, 85 % construcción) | Stack de 6 capas, vault Obsidian, RCTFX, Show & Tell con número antes/después, consola de estado |

Sobre esa base se agrega lo que ningún curso genérico tiene: **el sistema de agentes que ORION está construyendo para SALUDSA** como objeto de estudio, supervisión y ampliación. Isabel (P01), Pep & Zizu (P02) y los tres subagentes de HubSpot no son ejemplos: son el entorno de trabajo real de los participantes desde la semana 1.

**No es** un curso de "IA para todos". Es formación del equipo que va a operar, supervisar y extender esos agentes.

---

## 2. Confirmación de adaptabilidad a seguros de medicina prepagada

**Sí, se adapta.** Con tres condiciones que no son opcionales.

### 2.1 Por qué se adapta bien

1. **El proceso comercial de medicina prepagada es un caso ideal de agente conversacional con escalamiento.** Alto volumen de consultas repetitivas (cobertura, precio, red, carencia), una frontera clara donde el agente debe detenerse (preexistencia, consejo clínico, precio final) y un humano disponible (el RN). El pensum entrena exactamente esa frontera.
2. **La normativa obliga a hacer lo que el pensum ya exige.** Datos de salud son datos sensibles bajo la LOPDP; el pensum exige clasificación de datos, mínimo acceso, humano en el bucle y trazabilidad desde S02. No hay que "agregar" cumplimiento: está en la estructura.
3. **Cada módulo tiene un destino directo en el proyecto SALUDSA** (ver §5). Nada de lo que se enseña queda como ejercicio académico.

### 2.2 Las tres condiciones

| Condición | Qué implica | Responsable |
|---|---|---|
| **KB aprobada antes de S06** | El catálogo de planes, coberturas, carencias y red que usarán los labs debe estar validado por Comercial y Legal, con versión y vigencia. Sin KB aprobada, los agentes aprenden de datos inventados | Nicolás González (Comercial) + Legal SALUDSA |
| **Autorización de datos antes de S03** | Los datasets reales que sustituyan a los sintéticos deben estar anonimizados y autorizados por el responsable de protección de datos | PM SALUDSA (Sonia Checa) + DPO/Legal |
| **Fronteras clínicas escritas** | Lista explícita, firmada por Auditoría Médica, de lo que ningún agente puede responder (diagnóstico, evaluación de preexistencia, pertinencia médica). Se convierte en eval obligatorio de todos los capstones | Auditoría Médica SALUDSA |

Sin las tres condiciones, el programa se puede dictar con datos sintéticos, pero **no puede certificar suficiencia sobre los agentes reales** y lo diremos así por escrito.

---

## 3. Matriz regulatoria y de riesgo

Esta matriz se valida con Legal de SALUDSA en la reunión de arranque. Las referencias normativas deben confirmarse contra la versión vigente; el curso no sustituye asesoría legal.

| Marco | Qué exige al proyecto | Dónde lo cubre el curso | Control operativo |
|---|---|---|---|
| Ley que regula a las compañías de medicina prepagada y seguros de asistencia médica (Ecuador) y supervisión de la Superintendencia de Compañías, Valores y Seguros | Información veraz al usuario sobre coberturas, exclusiones y carencias; trato de preexistencias conforme a norma | S02, S06, S12–S13 (KB aprobada, RAG con versión y vigencia) | El agente solo responde desde KB versionada; toda cifra sin fuente es fallo grave en el eval |
| LOPDP (2021) — datos de salud como datos sensibles | Consentimiento explícito, finalidad declarada, mínimo acceso, seguridad, registro de tratamiento | S02, S07, S10, S11 (matriz de permisos MCP, filtrado por `contiene_dato_salud`) | El agente no recoge diagnósticos por chat; los tickets con dato de salud van a cola humana |
| Defensa del consumidor / publicidad | No prometer lo que el contrato no cubre; publicidad no engañosa | S04–S05 (eval de Pep & Zizu: claims verificables), S14 | Eval de marca con criterio "afirmación verificable en KB" |
| Ética y seguridad (política de uso de Anthropic) | Sin consejo médico, sin manipulación, sin retención coercitiva | S02, S09 (supervisor de Isabel) | Fronteras clínicas como casos de regresión en cada capstone |
| Contrato SA-CT-0336-2026 | Obligaciones de confidencialidad, propiedad de entregables, SLA | S02, S14 | Los capstones son propiedad de SALUDSA; los datasets no salen del entorno acordado |

---

## 4. Participantes y cohortes

Se recomiendan **dos cohortes secuenciales** de 12 personas, no una de 24. La segunda arranca con los capstones de la primera ya en producción.

| Cohorte | Perfil | Foco de capstone | Agente que supervisan |
|---|---|---|---|
| **SAL-C1 — Comercial y Marketing** | 6 RN (asesores comerciales), 3 de Marketing, 1 líder comercial, 1 PM (Sonia Checa), 1 TI | Conversión, calificación de leads, contenido de campaña | Isabel (P01), Pep & Zizu (P02), subagentes HubSpot |
| **SAL-C2 — Servicio, Operaciones y Control** | 5 de Servicio al Afiliado, 2 de Reembolsos/Autorizaciones, 2 de Calidad, 1 Auditoría Médica, 1 Legal/DPO, 1 TI | Clasificación y ruteo de tickets, base de conocimiento de servicio, control de cumplimiento | Supervisor de conversaciones, RAG de servicio |

**Carriles:** todos los participantes pasan por las 14 sesiones. El carril técnico (TI, 1–2 personas) construye en código; el carril operador construye en configuración. Misma rúbrica.

---

## 5. Mapa: cada sesión → qué aporta al proyecto SALUDSA

Esta es la tabla que justifica el programa ante Nicolás González. Cada sesión deja un entregable que el proyecto usa.

| Sesión | Tema | Capa del stack | Entregable que absorbe el proyecto SALUDSA |
|---|---|---|---|
| S01 | Fundamentos de LLM y agentes | — | Ficha de los 3 procesos por participante → backlog de automatizaciones fase 2 |
| S02 | Seguridad Anthropic + LOPDP + medicina prepagada | Governance | **Matriz de riesgo y fronteras clínicas** firmada → eval obligatorio de Isabel |
| S03 | Capacidades reales | — | **Matriz de fallos** sobre leads y tickets reales → casos de regresión de Isabel y del clasificador |
| S04 | Prompting I (RCTFX) | Agents | Prompt de un subproceso comercial en RCTFX → insumo para hiperpersonalización |
| S05 | Prompting II (evals) | Agents | **Set de 20 casos de Isabel** con criterio binario → suite de regresión del proyecto |
| S06 | Claude.ai: Projects, Artifacts, Design | Workspaces | Workspace "SALUDSA-Comercial" con KB aprobada → espacio de trabajo de los RN |
| S07 | Cowork | Automations | Flujo "brief semanal de campaña" y "resumen de conversaciones" con punto de control |
| S08 | Claude Code I | Automations | Repositorio de supervisión con contexto del proyecto |
| S09 | Claude Code II (skills, subagentes, hooks) | Agents | **Skill "revisión de conversación Isabel"** + **subagente QA** → supervisión semanal del agente real |
| S10 | API + tool use | MCP Connectors | Clasificador de tickets con herramienta de ruteo → piloto de Servicio |
| S11 | MCP | MCP Connectors | **Matriz de permisos HubSpot/Drive/Slack** por rol → gobierno de conectores del proyecto |
| S12 | RAG I | Knowledge Bases | Pipeline sobre FAQ aprobada con metadatos de versión → base de Isabel y de Servicio |
| S13 | RAG II (evaluación) | Knowledge Bases | Métricas de recuperación antes/después; 3 preguntas "no está en la base" → política anti-invención |
| S14 | Multi-agente y proceso | HTML Artifacts + Governance | Arquitectura del capstone + **consola de estado** de agentes → tablero de la Dirección Comercial |
| T1–T3 | Tutoría capstone | — | Capstone en producción con línea base |
| S&T | Show & Tell | — | 12 demos de 3 minutos con número antes/después, frente a Dirección de SALUDSA |

---

## 6. Stack de 6 capas, versión SALUDSA

| Capa | En el cohort Talent Scout | En SALUDSA |
|---|---|---|
| 1. Workspaces | DEMO-Research / Content / Operations | SALUDSA-Comercial, SALUDSA-Servicio, SALUDSA-Conocimiento |
| 2. Agents (RCTFX) | Brand Voice, Weekly Digest, Meeting-to-Actions… | Supervisor de Isabel, QA de conversaciones, Calificador de leads, Redactor de campaña con claims verificables, Clasificador de tickets, Auditor LOPDP |
| 3. Automations | Cowork y flujos multipaso | Brief semanal de campaña, resumen diario de escalamientos, informe de tasa de escalamiento |
| 4. Knowledge Bases | KB del participante | KB aprobada de planes (versionada), KB de red médica, KB de servicio |
| 5. MCP Connectors | Drive, Slack, Notion, Gmail | HubSpot (pipeline de agentes), Drive, Slack; matriz de permisos por rol |
| 6. HTML Artifacts | Show & Tell | Consola de estado de agentes SALUDSA, comparador de planes interno, tablero de escalamientos |

Vault Obsidian: los 7 folders del cohort + `/Agentes-SALUDSA` (briefs, fronteras, evals y bitácora de supervisión de Isabel y Pep & Zizu). Estructura en `03_Recursos/Obsidian_Vault/`.

---

## 7. Calendario propuesto — SAL-C1

| Parámetro | Valor |
|---|---|
| Inicio | Miércoles 14 de octubre de 2026 |
| Cierre sincrónico | Viernes 27 de noviembre de 2026 |
| Días | Miércoles y viernes |
| Horario | 08:00 – 11:00 (hora Ecuador) |
| Sesiones | 14 (S01–S14) |
| Tutorías | T1 (13–14 nov), T2 (20–21 nov), T3 (25–26 nov) |
| Examen de suficiencia | Miércoles 2 de diciembre, 08:00–09:30 |
| Defensas de capstone | 3–4 de diciembre |
| Show & Tell | Viernes 11 de diciembre, 10:00–12:00, con Dirección Comercial |
| Emisión de certificados | 18 de diciembre |

Sin cruce con los feriados de 2 y 3 de noviembre. Validar contra el calendario comercial de SALUDSA (cierres de mes) antes de confirmar. Los miércoles/viernes se eligieron para no coincidir con la cohorte Talent Scout (martes/jueves).

---

## 8. Roles

| Rol | Persona | Responsabilidad |
|---|---|---|
| Director del programa y facilitador principal | Felipe Salgado | Dicta S01–S14, tribunal de capstone, firma certificados |
| Asistente técnico | ORION (por definir) | Sala paralela, instalación, soporte de labs 08–13 |
| Patrocinador SALUDSA | Nicolás González | Aprueba KB, designa RN participantes, preside Show & Tell |
| PM SALUDSA | Sonia Checa | Coordinación de agenda, accesos, datos autorizados, Legal/TI |
| Validador clínico | Auditoría Médica SALUDSA | Firma fronteras clínicas (S02), revisa capstones con dato de salud |
| Validador legal | Legal / DPO SALUDSA | Valida matriz regulatoria y anonimización |
| Infraestructura | TI SALUDSA + Autoploy | Accesos a HubSpot sandbox, cuentas, conectores |

---

## 9. Indicadores del programa (se reportan a Dirección Comercial)

| Indicador | Meta SAL-C1 |
|---|---|
| Finalización | ≥ 10 de 12 |
| Suficiencia | 7 – 10 de 12 |
| Capstones en producción a 30 días | ≥ 6 |
| Set de regresión de Isabel entregado al proyecto | 20 casos × 12 participantes, depurados a 100 casos únicos |
| Fronteras clínicas convertidas en evals | 100 % |
| Incidentes LOPDP en entregables | 0 |
| Tasa de escalamiento de Isabel medida por el equipo (no por ORION) | Reporte semanal desde S09 |

---

## 10. Condiciones de arranque (go / no-go, 30 de septiembre)

- [ ] 12 participantes confirmados con perfil y carril
- [ ] KB de planes en proceso de aprobación, fecha comprometida antes de S06
- [ ] Autorización de datos anonimizados o decisión de correr con sintéticos
- [ ] Sandbox de HubSpot o pipeline de pruebas separado del productivo
- [ ] Cuentas claude.ai y presupuesto de API por participante aprobado (ver `06_Operacion/presupuesto.md`)
- [ ] Reunión de fronteras clínicas agendada con Auditoría Médica antes de S02
- [ ] Fecha de Show & Tell bloqueada en la agenda de Nicolás González

Con 5 de 7, se arranca con datos sintéticos. Con menos, se posterga dos semanas.
