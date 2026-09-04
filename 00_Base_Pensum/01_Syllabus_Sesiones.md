# Syllabus de sesiones
## Automatización y Agentes de IA con Claude — VBM-AAC-48

Estructura fija de cada sesión de 180 minutos:

| Bloque | Minutos | Propósito |
|---|---|---|
| Apertura | 10 | Revisión del entregable anterior, 2 casos comentados en voz alta |
| Concepto | 40 | Exposición con demostración en vivo |
| Laboratorio guiado | 50 | El instructor construye, el grupo replica |
| Pausa | 10 | — |
| Laboratorio autónomo | 55 | El participante trabaja sobre su propio caso |
| Cierre | 15 | Entregable subido, dudas, encargo asincrónico |

Regla de aula: **nada se explica sin ejecutarse en pantalla**. Si el instructor no puede demostrarlo en vivo, no entra en el temario.

---

# MÓDULO 1 — Fundamentos

## S01 · Fundamentos de LLM y sistemas agénticos

**Objetivo:** que el participante explique con sus palabras cómo un LLM produce texto, qué limita su desempeño y en qué se diferencia un asistente de un agente.

**Contenidos**
- Del autocompletado al modelo de instrucciones: tokens, predicción, temperatura.
- Ventana de contexto: qué cabe, qué se pierde, por qué una conversación larga se degrada.
- Por qué alucina un modelo: no hay base de datos, hay generación probabilística.
- Entrenamiento vs. inferencia. Qué significa "fecha de corte de conocimiento".
- Asistente, flujo con herramientas y agente autónomo: tres niveles de delegación y tres niveles de riesgo.
- Familia de modelos disponible al inicio de la cohorte y criterio de selección: capacidad, latencia, costo. El instructor actualiza la tabla de modelos antes de cada cohorte.

**Demostración en vivo:** misma pregunta, tres formulaciones, tres calidades de respuesta. Se registra en pizarra qué cambió.

**Entregable:** Lab 01 — Ficha de proceso candidato.

**Lectura asignada:** documentación de introducción a la API (https://docs.claude.com/en/api/overview), solo la sección conceptual.

---

# MÓDULO 2 — Seguridad

## S02 · Framework de seguridad de Anthropic y política de uso

**Objetivo:** clasificar casos de uso reales según riesgo y definir controles antes de construir nada.

**Contenidos**
- Por qué existe un marco de seguridad: sistemas capaces desplegados sobre procesos con consecuencias.
- Entrenamiento por principios: cómo se induce comportamiento deseado sin enumerar todas las reglas posibles.
- Política de uso: qué está fuera de límites y por qué el modelo rechaza.
- Niveles de riesgo y despliegue responsable: la lógica de escalar salvaguardas junto con la capacidad.
- Datos: qué envía la organización cuando usa chat, cuando usa API y cuando usa un conector. Diferencias contractuales.
- Riesgos operativos concretos: inyección de prompt vía documentos, filtración de datos por conectores, sobreautonomía de agentes con permisos de escritura.
- Controles obligatorios de este curso: humano en el bucle para toda acción irreversible, límite de gasto, registro de acciones del agente.

**Actividad:** semáforo de casos. Cada participante trae 3 casos de su organización y los clasifica en apto / apto con controles / no apto, con justificación escrita.

**Entregable:** Lab 02 — Matriz de riesgo y controles.

---

# MÓDULO 3 — Capacidades reales

## S03 · Capacidades y limitaciones en escenarios reales

**Objetivo:** sustituir la opinión sobre qué "puede hacer la IA" por evidencia medida.

**Contenidos**
- Tareas donde el modelo rinde alto: reescritura, clasificación, extracción estructurada, síntesis, generación de código acotado.
- Tareas donde falla o requiere andamiaje: aritmética larga, conteo exacto, datos posteriores al corte, cadenas causales muy largas, juicio sobre información ausente.
- Cómo se ve un fallo silencioso: respuesta fluida, formato correcto, contenido inventado.
- Diseño de una prueba mínima: 10 casos, criterio binario de aprobación, registro de resultados.
- Cuándo la respuesta correcta es no automatizar.

**Actividad central:** cada participante construye 10 casos de prueba de una tarea de su trabajo y los corre. Se tabula el porcentaje de acierto en la pizarra compartida de la cohorte.

**Entregable:** Lab 03 — Matriz de capacidad y fallo, con evidencia.

---

# MÓDULO 4 — Prompt engineering avanzado

## S04 · Prompt engineering I: estructura y control

**Objetivo:** escribir prompts de producción, no consultas de chat.

**Contenidos**
- Estructura RCTFX: Rol, Contexto, Tarea, Formato, eXamples. Cada elemento con función específica.
- Delimitadores y etiquetas XML para separar instrucción de datos: la defensa más barata contra inyección de prompt.
- Few-shot: cuántos ejemplos, qué ejemplos, por qué los ejemplos negativos importan.
- Razonamiento paso a paso: cuándo ayuda, cuándo solo consume tokens.
- Salida estructurada: pedir JSON estricto y validarlo del lado del consumidor.
- Prefill y control del formato de inicio de respuesta.
- Antipatrones: prompts kilométricos, instrucciones contradictorias, cortesía como sustituto de especificación.

**Demostración:** un prompt de 4 líneas vs. el mismo caso en RCTFX. Se comparan 5 corridas de cada uno.

**Entregable:** Lab 04 — Prompt de producción v1.

---

## S05 · Prompt engineering II: evaluación y regresión

**Objetivo:** medir prompts en lugar de discutirlos.

**Contenidos**
- Qué es un eval: conjunto de casos + criterio de éxito + resultado registrado.
- Tres tipos de criterio: exacto, por reglas, por juez modelo. Ventajas y sesgos de cada uno.
- Construcción de un set de 20 casos con casos límite deliberados.
- Regresión: cuando cambia el prompt o el modelo, se vuelve a correr todo el set.
- Registro de versiones del prompt: un prompt de producción es código y se versiona como código.
- Costo y latencia como métricas de primera clase, no como notas al pie.
- Caché de prompt y reutilización de contexto para bajar costo en flujos repetitivos.

**Entregable:** Lab 05 — Set de evaluación de 20 casos, con resultados v1 vs. v2.

---

# MÓDULO 5 — Superficies de trabajo

## S06 · Claude.ai: Projects, Artifacts, memoria y Design

**Objetivo:** convertir el uso de chat en un entorno de trabajo reutilizable.

**Contenidos**
- Chat vs. Project: cuándo el contexto persistente cambia el resultado.
- Instrucciones de proyecto: un prompt de sistema para un equipo.
- Carga de conocimiento en un proyecto y sus límites.
- Artifacts: documentos, código y aplicaciones que sobreviven a la conversación.
- Claude Design: producción de piezas visuales y prototipos iterables por chat.
- Memoria y referencia a conversaciones previas: qué guarda, cómo se controla, cuándo conviene desactivarla.
- Higiene de datos personales y de clientes en superficies de chat.

**Entregable:** Lab 06 — Espacio de trabajo con instrucciones, base de conocimiento y un artifact funcional.

---

## S07 · Claude Cowork: delegación de trabajo de conocimiento

**Objetivo:** delegar una tarea completa, no una respuesta.

**Contenidos**
- Diferencia entre pedir una respuesta y encargar un trabajo con archivos de entrada y salida.
- Flujos multipaso sobre documentos: leer, extraer, comparar, producir entregable.
- Integración con superficies de ofimática y con el navegador.
- Puntos de control humano: dónde se revisa antes de que el resultado salga de la organización.
- Criterio de decisión: chat, Cowork, Claude Code o API. Tabla de decisión que el participante se lleva.

**Entregable:** Lab 07 — Flujo de trabajo delegado, con archivo de entrada, salida y punto de control.

---

# MÓDULO 6 — Claude Code

## S08 · Claude Code I: instalación, contexto y primer flujo

**Objetivo:** dejar a cada participante con Claude Code operando sobre un repositorio propio.

**Contenidos**
- Instalación y verificación (Node.js LTS, terminal, permisos). Referencia oficial: https://docs.claude.com/en/docs/claude-code/overview
- Modelo mental: un agente con acceso a archivos y a la terminal, dentro de un directorio.
- Archivo de contexto del proyecto: qué escribir ahí y qué no.
- Permisos y modo de aprobación: qué se autoriza una vez y qué se autoriza siempre.
- Primer flujo útil no relacionado con código: ordenar, renombrar y documentar una carpeta de archivos reales.
- Control de versiones como red de seguridad. Nada de agentes en directorios sin Git.

**Carril operador:** quien no programa trabaja sobre una carpeta de documentos, no sobre un repositorio de software. Misma herramienta, mismo criterio de evaluación.

**Entregable:** Lab 08 — Repositorio con archivo de contexto y una tarea completada por el agente.

---

## S09 · Claude Code II: skills, subagentes, hooks y comandos

**Objetivo:** convertir una capacidad ad hoc en una capacidad reutilizable por el equipo.

**Contenidos**
- Skills: procedimiento empaquetado que el agente carga cuando corresponde. Estructura de archivo, descripción que dispara la carga, recursos asociados.
- Por qué una descripción mal escrita hace que la skill nunca se active. Ejercicio de reescritura de descripciones.
- Subagentes: instancias especializadas con su propio prompt y su propio conjunto de herramientas. Cuándo aíslan contexto y cuándo agregan latencia sin beneficio.
- Comandos personalizados para tareas repetidas.
- Hooks: verificaciones deterministas en momentos del ciclo de vida, para lo que el modelo puede olvidar.
- Skills vs. MCP vs. subagentes: MCP da acceso, la skill da procedimiento, el subagente da aislamiento.

**Entregable:** Lab 09 — Una skill propia + un subagente, versionados y probados.

---

# MÓDULO 7 — API y MCP

## S10 · API de Claude: mensajes, tool use, streaming y costo

**Objetivo:** llamar al modelo desde código propio y controlar lo que cuesta.

**Contenidos**
- Anatomía de una llamada: mensajes, rol, sistema, tokens máximos.
- Clave de API: creación, rotación, almacenamiento fuera del repositorio, límite de gasto.
- Tool use: definición de herramienta, ciclo de llamada y devolución de resultado, manejo del caso en que el modelo no llama nada.
- Salida estructurada y validación.
- Streaming y su efecto en la experiencia percibida.
- Procesamiento por lotes para trabajo asincrónico de gran volumen.
- Cálculo de costo: tokens de entrada, de salida y ahorro por caché. Cada participante estima el costo mensual de su caso.
- Manejo de errores: límites de tasa, reintentos con espera, degradación controlada.

Referencia oficial: https://docs.claude.com/en/api/overview

**Entregable:** Lab 10 — Script funcional con una herramienta y estimación de costo mensual.

---

## S11 · MCP: conectores y servidor propio

**Objetivo:** conectar el modelo a los sistemas donde vive el trabajo real.

**Contenidos**
- Qué resuelve MCP: un protocolo en lugar de una integración a medida por cada herramienta.
- Componentes: servidor, herramientas, recursos, cliente.
- Conectores gestionados: alta, alcance de permisos, revisión de qué datos quedan expuestos.
- Construcción de un servidor MCP mínimo con dos herramientas, una de lectura y una de escritura.
- Diseño de herramientas para que un modelo las use bien: nombres explícitos, descripciones que dicen cuándo usarlas, errores que explican cómo corregir.
- Riesgo de la herramienta de escritura: confirmación explícita, registro, reversibilidad.

**Entregable:** Lab 11 — Servidor MCP propio, o integración documentada de un conector con matriz de permisos.

---

# MÓDULO 8 — RAG

## S12 · RAG I: ingesta, fragmentación, embeddings y recuperación

**Objetivo:** que el modelo responda con los documentos de la organización, no con su memoria.

**Contenidos**
- El problema: contexto limitado, conocimiento desactualizado, necesidad de citar la fuente.
- Arquitectura mínima: ingesta → fragmentación → vectorización → índice → recuperación → generación con contexto.
- Fragmentación: tamaño, solapamiento, respeto de la estructura del documento. Por qué cortar por caracteres arruina tablas y contratos.
- Metadatos: fecha, área, versión, nivel de confidencialidad. Sin metadatos no hay filtrado ni control de acceso.
- Recuperación híbrida: semántica + léxica. Por qué la búsqueda por palabra clave sigue ganando en códigos, SKU y nombres propios.
- Reordenamiento de resultados.
- Alternativas más baratas antes de montar RAG: contexto largo, caché, base de conocimiento del proyecto. RAG no siempre es la respuesta.

**Entregable:** Lab 12 — Pipeline RAG cargado con 20+ documentos propios.

---

## S13 · RAG II: evaluación de recuperación y RAG agéntico

**Objetivo:** demostrar con números que el RAG funciona, y corregir el eslabón que falla.

**Contenidos**
- Separar dos fallos distintos: recuperó mal, o recuperó bien y generó mal.
- Métricas de recuperación sobre un set etiquetado de 20 preguntas: acierto en el top-k, posición del fragmento correcto.
- Métricas de generación: fidelidad al fragmento, cobertura de la pregunta, citación correcta.
- Diagnóstico y corrección: cambiar fragmentación, agregar filtros por metadato, agregar reordenamiento, reescribir la consulta.
- RAG agéntico: el agente decide si busca, reformula la consulta y busca varias veces.
- Cuándo la respuesta correcta es "no está en la base" y cómo forzar esa respuesta en lugar de una invención.

**Entregable:** Lab 13 — Informe de evaluación con métricas antes y después de una corrección.

---

# MÓDULO 9 — Multi-agente y organización

## S14 · Arquitecturas multi-agente y automatización de procesos

**Objetivo:** diseñar el sistema completo que se entregará como capstone.

**Contenidos**
- Cuándo un solo agente basta. La mayoría de las veces basta.
- Patrones: cadena secuencial, enrutador, orquestador con especialistas, evaluador–ejecutor en bucle.
- Composición real: skills como procedimiento, subagentes como especialistas, MCP como acceso, RAG como memoria organizacional.
- Manejo de estado y de contexto entre agentes: qué se pasa, qué se resume, qué se descarta.
- Modos de fallo del sistema multi-agente: bucles infinitos, costo descontrolado, error propagado sin detección, pérdida de trazabilidad.
- Controles obligatorios: límite de iteraciones, presupuesto por ejecución, registro de decisiones, aprobación humana antes de toda acción irreversible.
- Del proceso al sistema: mapa del proceso actual, tiempos actuales, puntos de decisión humana, línea base contra la que se medirá la mejora.
- Adopción: la automatización que nadie usa vale cero. Plan de traspaso al equipo.

**Entregable:** Lab 14 — Diagrama de arquitectura y plan de control de riesgos del capstone.

---

## Bloques tutorados (6 h asincrónicas)

| Bloque | Momento | Foco | Salida |
|---|---|---|---|
| T1 (2 h) | Fin de semana 5 | Validación de alcance y línea base del proceso | Alcance firmado |
| T2 (2 h) | Fin de semana 6 | Revisión de arquitectura y costo | Arquitectura aprobada |
| T3 (2 h) | Semana 7 | Ensayo de defensa y cierre de documentación | Defensa lista |

Sin T1 aprobado no se avanza al capstone. La causa número uno de reprobación es un alcance demasiado grande definido tarde.
