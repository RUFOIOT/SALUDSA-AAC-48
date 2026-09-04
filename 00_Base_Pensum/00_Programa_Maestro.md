# Programa Maestro
## Especialización: Automatización y Agentes de IA con Claude
**Vibramente / ORION AI Strategy — Eight Labs**

---

## 1. Ficha técnica

| Campo | Valor |
|---|---|
| Nombre del programa | Automatización y Agentes de IA con Claude |
| Código interno | VBM-AAC-48 |
| Nivel | Especialización profesional (no conducente a título académico) |
| Duración | 48 horas académicas |
| Calendario | 7 semanas |
| Distribución | 14 sesiones sincrónicas de 3 h (42 h) + 6 h de trabajo tutorado del proyecto final |
| Frecuencia | 2 sesiones por semana |
| Modalidad | Online sincrónica con laboratorio práctico obligatorio |
| Cupo por cohorte | 8 a 16 participantes |
| Ratio | 1 instructor cada 16 participantes; 1 asistente técnico desde 12 participantes |
| Idioma | Español (documentación técnica en inglés) |
| Credencial | Certificado de Suficiencia en Automatización y Agentes de IA con Claude |
| Nota mínima de suficiencia | 80/100 |
| Asistencia mínima | 80 % de sesiones sincrónicas (mínimo 12 de 14) |

---

## 2. Ingeniería inversa del estándar

El programa se reconstruyó a partir del texto descriptivo de un certificado de referencia de 48 horas académicas emitido en Lima (julio–agosto 2026). Cada afirmación de ese texto se convirtió en un componente curricular verificable. Ese es el contrato: **si el certificado lo declara, el programa debe poder evaluarlo.**

| Afirmación del certificado de referencia | Componente del programa | Horas | Evidencia que lo prueba |
|---|---|---|---|
| "fundamentos de la IA" | M1 — Fundamentos de LLM y sistemas agénticos | 3 | Quiz 1 + Lab 01 |
| "el framework de seguridad de Anthropic" | M2 — Seguridad, política de uso y diseño responsable | 3 | Quiz 2 + Lab 02 |
| "capacidades y limitaciones de Claude en escenarios reales" | M3 — Evaluación empírica de capacidades | 3 | Lab 03 (matriz de fallos) |
| "prompt engineering avanzado" | M4 — Prompt engineering avanzado y evals | 6 | Labs 04 y 05 |
| "ecosistema Claude (Claude.ai, Claude Design, Claude Cowork)" | M5 — Superficies de trabajo | 6 | Labs 06 y 07 |
| "ecosistema Claude (Claude Code)" | M6 — Claude Code y automatización de repositorio | 6 | Labs 08 y 09 |
| "ecosistema Claude (MCP y API)" | M7 — API, tool use y MCP | 6 | Labs 10 y 11 |
| "estrategias de RAG" | M8 — RAG y bases de conocimiento evaluables | 6 | Labs 12 y 13 |
| "arquitecturas multi-agente con skills y subagentes" | M9 — Orquestación multi-agente | 3 | Lab 14 |
| "aplicándolas a la automatización de procesos en entornos organizacionales" | M10 — Proyecto capstone tutorado | 6 | Capstone + defensa |
| **Total** | | **48** | |

**Advertencia de propiedad intelectual:** este programa es una construcción original derivada de una descripción pública de resultados de aprendizaje. No reutiliza materiales, marca, plantillas ni códigos de verificación de terceros. Los certificados que se emitan deben llevar exclusivamente la identidad de Vibramente / ORION.

---

## 3. Perfil de ingreso

**Obligatorio**
- Uso de computador con permisos de instalación de software.
- Manejo de terminal a nivel básico (`cd`, `ls`, ejecutar un comando).
- Lectura funcional de inglés técnico.
- Cuenta activa en claude.ai con plan que habilite Projects y ejecución de código.

**Deseable, no excluyente**
- Nociones de Git.
- Experiencia previa documentando procesos de negocio.

**No se exige** saber programar. Los módulos 6 y 7 están diseñados con dos carriles: técnico (código) y operador (configuración). Ambos carriles se evalúan con la misma rúbrica de resultado.

---

## 4. Perfil de egreso — 9 competencias verificables

Al aprobar, la persona es capaz de:

1. Explicar en términos operativos qué es un LLM, qué es una ventana de contexto y por qué un modelo alucina, sin recurrir a metáforas mágicas.
2. Aplicar el marco de seguridad y la política de uso de Anthropic para clasificar un caso de uso como apto, apto con controles, o no apto.
3. Diseñar y ejecutar una prueba empírica que documente dónde falla Claude en una tarea específica de su organización.
4. Escribir prompts de producción con estructura explícita (rol, contexto, tarea, formato, ejemplos), y medirlos con un set de evaluación propio.
5. Operar las superficies del ecosistema Claude y elegir la correcta según la tarea: chat, Projects, Artifacts, Design, Cowork, Claude Code, API.
6. Automatizar tareas reales con Claude Code, incluyendo subagentes y skills en un repositorio versionado.
7. Consumir la API de Claude con tool use, y conectar o construir un servidor MCP.
8. Diseñar una arquitectura RAG, cargarla con datos propios y evaluarla con métricas de recuperación, no con impresiones.
9. Entregar una automatización multi-agente funcionando sobre un proceso organizacional real, con documentación, controles de riesgo y estimación de costo mensual.

---

## 5. Malla curricular

### Semana 1 — Fundamentos y seguridad
| Sesión | Módulo | Tema | Horas |
|---|---|---|---|
| S01 | M1 | Fundamentos de LLM y sistemas agénticos | 3 |
| S02 | M2 | Framework de seguridad de Anthropic y política de uso | 3 |

### Semana 2 — Realidad y prompting
| Sesión | Módulo | Tema | Horas |
|---|---|---|---|
| S03 | M3 | Capacidades y limitaciones en escenarios reales | 3 |
| S04 | M4 | Prompt engineering avanzado I: estructura y control | 3 |

### Semana 3 — Prompting medido y superficies
| Sesión | Módulo | Tema | Horas |
|---|---|---|---|
| S05 | M4 | Prompt engineering avanzado II: evals y regresión | 3 |
| S06 | M5 | Claude.ai: Projects, Artifacts, memoria y Design | 3 |

### Semana 4 — Trabajo agéntico
| Sesión | Módulo | Tema | Horas |
|---|---|---|---|
| S07 | M5 | Claude Cowork: delegación de trabajo de conocimiento | 3 |
| S08 | M6 | Claude Code I: instalación, contexto y primer flujo | 3 |

### Semana 5 — Código y API
| Sesión | Módulo | Tema | Horas |
|---|---|---|---|
| S09 | M6 | Claude Code II: skills, subagentes, hooks, comandos | 3 |
| S10 | M7 | API de Claude: mensajes, tool use, streaming, costo | 3 |

### Semana 6 — MCP y RAG
| Sesión | Módulo | Tema | Horas |
|---|---|---|---|
| S11 | M7 | MCP: conectores y construcción de un servidor propio | 3 |
| S12 | M8 | RAG I: ingesta, chunking, embeddings, recuperación | 3 |

### Semana 7 — Evaluación, orquestación y cierre
| Sesión | Módulo | Tema | Horas |
|---|---|---|---|
| S13 | M8 | RAG II: evaluación de recuperación y RAG agéntico | 3 |
| S14 | M9 | Arquitecturas multi-agente y automatización organizacional | 3 |
| — | M10 | Trabajo tutorado del capstone (asincrónico, 3 bloques de 2 h) | 6 |

**Total: 48 horas académicas.**

Examen de suficiencia: sesión adicional de 90 minutos, no computa en las 48 h. Defensa del capstone: 20 minutos por participante, agendada dentro de los 10 días posteriores a S14.

---

## 6. Requisitos técnicos por sesión

| Desde | Requiere |
|---|---|
| S01 | Cuenta claude.ai activa |
| S06 | Plan con Projects y creación de archivos habilitados |
| S08 | Node.js LTS instalado, terminal funcional, Git configurado |
| S10 | Clave de API con límite de gasto configurado (ver §7) |
| S11 | Al menos un conector disponible o entorno local para servidor MCP |
| S12 | Repositorio del participante con 20+ documentos propios o del set provisto |

Verificación oficial de instalación y capacidades:
- Claude Code: https://docs.claude.com/en/docs/claude-code/overview
- API de Claude: https://docs.claude.com/en/api/overview
- Claude.ai (planes y límites): https://support.claude.com

El instructor debe revalidar estas páginas **antes de cada cohorte**. Las versiones de modelo, los límites y los nombres de producto cambian con más frecuencia que el material del curso.

---

## 7. Presupuesto de laboratorio por participante

| Concepto | Estimado por cohorte (7 semanas) |
|---|---|
| Plan claude.ai individual | costo del plan × 2 meses |
| Créditos de API para labs 10, 11, 13, 14 | USD 15 – 25 |
| Almacenamiento / vector store del lab RAG | USD 0 (nivel gratuito suficiente) |

Regla dura: **todo participante configura un límite de gasto en su clave de API antes de S10.** Sin ese límite configurado, no se habilita el laboratorio.

---

## 8. Política de acreditación (resumen)

Se emite el Certificado de Suficiencia cuando se cumplen las cuatro condiciones:

1. Nota final ≥ 80/100.
2. Asistencia ≥ 80 % de sesiones sincrónicas.
3. Capstone entregado, defendido y aprobado con ≥ 24/30 puntos.
4. Declaración de autoría firmada, incluyendo el uso de IA en la elaboración del capstone.

Quien cumpla 1, 2 y 4 pero no apruebe el capstone recibe **Constancia de Participación** (48 horas), sin la palabra "suficiencia". La distinción es deliberada: la constancia acredita horas, el certificado acredita competencia.

Detalle completo en `03_Evaluacion_y_Rubricas.md` y `05_Kit_Instructor_y_Certificacion.md`.

---

## 9. Índice del paquete

| Archivo | Contenido |
|---|---|
| `00_Programa_Maestro.md` | Este documento |
| `01_Syllabus_Sesiones.md` | Guion de las 14 sesiones, minuto a minuto |
| `02_Laboratorios.md` | 14 laboratorios con enunciado y criterio de aceptación |
| `03_Evaluacion_y_Rubricas.md` | Sistema de notas, rúbricas y examen de suficiencia con clave |
| `04_Proyecto_Capstone.md` | Brief, hitos, rúbrica y guion de defensa |
| `05_Kit_Instructor_y_Certificacion.md` | Guía docente, contingencias y emisión de credenciales |
