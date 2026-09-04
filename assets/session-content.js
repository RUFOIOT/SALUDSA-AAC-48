/* ============================================================
   SALUDSA-AAC-48 — Student Hub — teoría y práctica por sesión
   Fuente: 00_Base_Pensum/01_Syllabus_Sesiones.md (contenidos, objetivo
   base, demo, lectura) y 00_Base_Pensum/02_Laboratorios.md (consigna,
   criterio de aceptación, error común, tiempo). Complementa SESSIONS
   (guion SALUDSA) de sessions-data.js. Sin datos inventados.
   ============================================================ */

const THEORY = {
S01:{ objetivoBase:"Que el participante explique con sus palabras cómo un LLM produce texto, qué limita su desempeño y en qué se diferencia un asistente de un agente.",
  contenidos:[
    "Del autocompletado al modelo de instrucciones: tokens, predicción, temperatura.",
    "Ventana de contexto: qué cabe, qué se pierde, por qué una conversación larga se degrada.",
    "Por qué alucina un modelo: no hay base de datos, hay generación probabilística.",
    "Entrenamiento vs. inferencia. Qué significa \"fecha de corte de conocimiento\".",
    "Asistente, flujo con herramientas y agente autónomo: tres niveles de delegación y tres niveles de riesgo.",
    "Familia de modelos disponible al inicio de la cohorte: capacidad, latencia, costo."
  ],
  demo:"Misma pregunta, tres formulaciones, tres calidades de respuesta. Se registra en pizarra qué cambió.",
  lectura:"Documentación de introducción a la API (docs.claude.com/en/api/overview), solo la sección conceptual."
},
S02:{ objetivoBase:"Clasificar casos de uso reales según riesgo y definir controles antes de construir nada.",
  contenidos:[
    "Por qué existe un marco de seguridad: sistemas capaces desplegados sobre procesos con consecuencias.",
    "Entrenamiento por principios: cómo se induce comportamiento deseado sin enumerar todas las reglas posibles.",
    "Política de uso: qué está fuera de límites y por qué el modelo rechaza.",
    "Niveles de riesgo y despliegue responsable: escalar salvaguardas junto con la capacidad.",
    "Datos: qué envía la organización por chat, por API y por conector — diferencias contractuales.",
    "Riesgos operativos: inyección de prompt vía documentos, filtración por conectores, sobreautonomía con permisos de escritura.",
    "Controles obligatorios del curso: humano en el bucle, límite de gasto, registro de acciones."
  ],
  demo:"Semáforo de casos: cada participante trae 3 casos de su organización y los clasifica en apto / apto con controles / no apto, con justificación escrita."
},
S03:{ objetivoBase:"Sustituir la opinión sobre qué \"puede hacer la IA\" por evidencia medida.",
  contenidos:[
    "Tareas donde el modelo rinde alto: reescritura, clasificación, extracción estructurada, síntesis, generación de código acotado.",
    "Tareas donde falla o requiere andamiaje: aritmética larga, conteo exacto, datos posteriores al corte, cadenas causales muy largas.",
    "Cómo se ve un fallo silencioso: respuesta fluida, formato correcto, contenido inventado.",
    "Diseño de una prueba mínima: 10 casos, criterio binario de aprobación, registro de resultados.",
    "Cuándo la respuesta correcta es no automatizar."
  ],
  demo:"Cada participante construye 10 casos de prueba de una tarea de su trabajo y los corre; se tabula el % de acierto en la pizarra compartida."
},
S04:{ objetivoBase:"Escribir prompts de producción, no consultas de chat.",
  contenidos:[
    "Estructura RCTFX: Rol, Contexto, Tarea, Formato, eXamples — cada elemento con función específica.",
    "Delimitadores y etiquetas XML para separar instrucción de datos: la defensa más barata contra inyección de prompt.",
    "Few-shot: cuántos ejemplos, qué ejemplos, por qué los ejemplos negativos importan.",
    "Razonamiento paso a paso: cuándo ayuda, cuándo solo consume tokens.",
    "Salida estructurada: pedir JSON estricto y validarlo del lado del consumidor.",
    "Prefill y control del formato de inicio de respuesta.",
    "Antipatrones: prompts kilométricos, instrucciones contradictorias, cortesía como sustituto de especificación."
  ],
  demo:"Un prompt de 4 líneas vs. el mismo caso en RCTFX. Se comparan 5 corridas de cada uno."
},
S05:{ objetivoBase:"Medir prompts en lugar de discutirlos.",
  contenidos:[
    "Qué es un eval: conjunto de casos + criterio de éxito + resultado registrado.",
    "Tres tipos de criterio: exacto, por reglas, por juez modelo — ventajas y sesgos de cada uno.",
    "Construcción de un set de 20 casos con casos límite deliberados.",
    "Regresión: cuando cambia el prompt o el modelo, se vuelve a correr todo el set.",
    "Registro de versiones del prompt: un prompt de producción es código y se versiona como código.",
    "Costo y latencia como métricas de primera clase, no como notas al pie.",
    "Caché de prompt y reutilización de contexto para bajar costo en flujos repetitivos."
  ]
},
S06:{ objetivoBase:"Convertir el uso de chat en un entorno de trabajo reutilizable.",
  contenidos:[
    "Chat vs. Project: cuándo el contexto persistente cambia el resultado.",
    "Instrucciones de proyecto: un prompt de sistema para un equipo.",
    "Carga de conocimiento en un proyecto y sus límites.",
    "Artifacts: documentos, código y aplicaciones que sobreviven a la conversación.",
    "Claude Design: producción de piezas visuales y prototipos iterables por chat.",
    "Memoria y referencia a conversaciones previas: qué guarda, cómo se controla, cuándo desactivarla.",
    "Higiene de datos personales y de clientes en superficies de chat."
  ]
},
S07:{ objetivoBase:"Delegar una tarea completa, no una respuesta.",
  contenidos:[
    "Diferencia entre pedir una respuesta y encargar un trabajo con archivos de entrada y salida.",
    "Flujos multipaso sobre documentos: leer, extraer, comparar, producir entregable.",
    "Integración con superficies de ofimática y con el navegador.",
    "Puntos de control humano: dónde se revisa antes de que el resultado salga de la organización.",
    "Criterio de decisión: chat, Cowork, Claude Code o API — tabla de decisión que el participante se lleva."
  ]
},
S08:{ objetivoBase:"Dejar a cada participante con Claude Code operando sobre un repositorio propio.",
  contenidos:[
    "Instalación y verificación (Node.js LTS, terminal, permisos).",
    "Modelo mental: un agente con acceso a archivos y a la terminal, dentro de un directorio.",
    "Archivo de contexto del proyecto: qué escribir ahí y qué no.",
    "Permisos y modo de aprobación: qué se autoriza una vez y qué se autoriza siempre.",
    "Primer flujo útil no relacionado con código: ordenar, renombrar y documentar una carpeta de archivos reales.",
    "Control de versiones como red de seguridad: nada de agentes en directorios sin Git."
  ],
  lectura:"docs.claude.com/en/docs/claude-code/overview"
},
S09:{ objetivoBase:"Convertir una capacidad ad hoc en una capacidad reutilizable por el equipo.",
  contenidos:[
    "Skills: procedimiento empaquetado que el agente carga cuando corresponde. Estructura, descripción que dispara la carga, recursos asociados.",
    "Por qué una descripción mal escrita hace que la skill nunca se active.",
    "Subagentes: instancias especializadas con su propio prompt y su propio conjunto de herramientas.",
    "Comandos personalizados para tareas repetidas.",
    "Hooks: verificaciones deterministas en momentos del ciclo de vida, para lo que el modelo puede olvidar.",
    "Skills vs. MCP vs. subagentes: MCP da acceso, la skill da procedimiento, el subagente da aislamiento."
  ]
},
S10:{ objetivoBase:"Llamar al modelo desde código propio y controlar lo que cuesta.",
  contenidos:[
    "Anatomía de una llamada: mensajes, rol, sistema, tokens máximos.",
    "Clave de API: creación, rotación, almacenamiento fuera del repositorio, límite de gasto.",
    "Tool use: definición de herramienta, ciclo de llamada y devolución de resultado, manejo del caso sin llamada.",
    "Salida estructurada y validación.",
    "Streaming y su efecto en la experiencia percibida.",
    "Procesamiento por lotes para trabajo asincrónico de gran volumen.",
    "Cálculo de costo: tokens de entrada, de salida y ahorro por caché.",
    "Manejo de errores: límites de tasa, reintentos con espera, degradación controlada."
  ],
  lectura:"docs.claude.com/en/api/overview"
},
S11:{ objetivoBase:"Conectar el modelo a los sistemas donde vive el trabajo real.",
  contenidos:[
    "Qué resuelve MCP: un protocolo en lugar de una integración a medida por cada herramienta.",
    "Componentes: servidor, herramientas, recursos, cliente.",
    "Conectores gestionados: alta, alcance de permisos, revisión de qué datos quedan expuestos.",
    "Construcción de un servidor MCP mínimo con dos herramientas, una de lectura y una de escritura.",
    "Diseño de herramientas para que un modelo las use bien: nombres explícitos, descripciones que dicen cuándo usarlas.",
    "Riesgo de la herramienta de escritura: confirmación explícita, registro, reversibilidad."
  ]
},
S12:{ objetivoBase:"Que el modelo responda con los documentos de la organización, no con su memoria.",
  contenidos:[
    "El problema: contexto limitado, conocimiento desactualizado, necesidad de citar la fuente.",
    "Arquitectura mínima: ingesta → fragmentación → vectorización → índice → recuperación → generación con contexto.",
    "Fragmentación: tamaño, solapamiento, respeto de la estructura del documento.",
    "Metadatos: fecha, área, versión, nivel de confidencialidad. Sin metadatos no hay filtrado ni control de acceso.",
    "Recuperación híbrida: semántica + léxica.",
    "Reordenamiento de resultados.",
    "Alternativas más baratas antes de montar RAG: contexto largo, caché, base de conocimiento del proyecto."
  ]
},
S13:{ objetivoBase:"Demostrar con números que el RAG funciona, y corregir el eslabón que falla.",
  contenidos:[
    "Separar dos fallos distintos: recuperó mal, o recuperó bien y generó mal.",
    "Métricas de recuperación sobre un set etiquetado de 20 preguntas: acierto en el top-k, posición del fragmento correcto.",
    "Métricas de generación: fidelidad al fragmento, cobertura de la pregunta, citación correcta.",
    "Diagnóstico y corrección: cambiar fragmentación, agregar filtros por metadato, reordenamiento, reescribir la consulta.",
    "RAG agéntico: el agente decide si busca, reformula la consulta y busca varias veces.",
    "Cuándo la respuesta correcta es \"no está en la base\" y cómo forzar esa respuesta."
  ]
},
S14:{ objetivoBase:"Diseñar el sistema completo que se entregará como capstone.",
  contenidos:[
    "Cuándo un solo agente basta. La mayoría de las veces basta.",
    "Patrones: cadena secuencial, enrutador, orquestador con especialistas, evaluador–ejecutor en bucle.",
    "Composición real: skills como procedimiento, subagentes como especialistas, MCP como acceso, RAG como memoria organizacional.",
    "Manejo de estado y de contexto entre agentes: qué se pasa, qué se resume, qué se descarta.",
    "Modos de fallo del sistema multi-agente: bucles infinitos, costo descontrolado, error propagado, pérdida de trazabilidad.",
    "Controles obligatorios: límite de iteraciones, presupuesto por ejecución, registro de decisiones, aprobación humana.",
    "Del proceso al sistema: mapa del proceso actual, tiempos, puntos de decisión humana, línea base.",
    "Adopción: la automatización que nadie usa vale cero. Plan de traspaso al equipo."
  ]
}
};

/* Laboratorios base (00_Base_Pensum/02_Laboratorios.md) — consigna, criterio, error común */
const LABS = {
S01:{ nombre:"Lab 01 — Ficha de proceso candidato", tiempo:"55 min en aula + 30 min asincrónico",
  consigna:"Identificar tres procesos de su organización y describirlos como candidatos a automatización: quién lo ejecuta, con qué frecuencia, cuántos minutos toma hoy, qué entra, qué sale, qué decisión humana contiene, qué pasa si sale mal.",
  criterios:["Tres procesos, con tiempos actuales medidos o estimados con método explícito.","Al menos uno con volumen ≥ 20 ejecuciones al mes.","Ninguno descrito con verbos vagos (\"mejorar la comunicación\" no es un proceso)."],
  nota:"Elegir el proceso más impresionante en lugar del más repetitivo. El capstone se gana con volumen, no con espectáculo."
},
S02:{ nombre:"Lab 02 — Matriz de riesgo y controles", tiempo:"55 min",
  consigna:"Clasificar los tres procesos del Lab 01 según el marco de seguridad y definir controles: datos involucrados, clasificación (apto / apto con controles / no apto), controles requeridos, quién aprueba antes de que el resultado salga de la organización.",
  criterios:["Clasificación justificada con referencia explícita a la política de uso, no a la intuición.","Todo proceso con datos personales lleva al menos dos controles.","Toda acción irreversible identificada lleva aprobación humana nombrada, con cargo."]
},
S03:{ nombre:"Lab 03 — Matriz de capacidad y fallo", tiempo:"55 min + 60 min asincrónico",
  consigna:"Tomar una tarea del Lab 01, construir 10 casos de prueba reales, ejecutarlos y documentar los fallos. Entregable: tabla con caso, salida esperada, salida obtenida, veredicto, tipo de fallo.",
  criterios:["10 casos con datos reales de la organización (anonimizados si corresponde).","Al menos 2 casos límite diseñados para romper el sistema.","% de acierto calculado y al menos un fallo analizado con su causa probable."],
  nota:"Un participante que reporta 10/10 sin casos límite no aprobó el laboratorio: diseñó una prueba complaciente."
},
S04:{ nombre:"Lab 04 — Prompt de producción v1", tiempo:"55 min",
  consigna:"Escribir el prompt de la tarea del Lab 03 en estructura RCTFX.",
  criterios:["Los cinco componentes presentes y separados con delimitadores.","Datos variables en etiquetas, separados de la instrucción.","Formato de salida especificado de forma verificable por máquina.","Mínimo 2 ejemplos, uno de ellos difícil.","Prompt versionado con fecha y autor."]
},
S05:{ nombre:"Lab 05 — Set de evaluación y comparación v1/v2", tiempo:"55 min + 60 min asincrónico",
  consigna:"Ampliar a 20 casos, definir el criterio de éxito, correr v1, corregir el prompt, correr v2.",
  criterios:["20 casos con salida esperada declarada antes de ejecutar.","Criterio de éxito explícito y aplicable por un tercero sin consultar al autor.","Tabla comparativa v1 vs v2 con % de acierto, costo por caso y latencia media.","Una hipótesis escrita sobre por qué v2 mejoró o no."],
  nota:"Si v2 empeora, el laboratorio se aprueba igual siempre que la hipótesis sea sólida. Se evalúa el método, no la suerte."
},
S06:{ nombre:"Lab 06 — Espacio de trabajo reutilizable", tiempo:"55 min",
  consigna:"Montar un Project con instrucciones, base de conocimiento y producir un artifact funcional.",
  criterios:["Instrucciones del proyecto en RCTFX, no un párrafo suelto.","Mínimo 5 documentos de conocimiento cargados, con criterio declarado de por qué esos.","Un artifact que un compañero pueda abrir y usar sin explicación adicional.","Prueba con 3 consultas distintas documentadas."]
},
S07:{ nombre:"Lab 07 — Flujo de trabajo delegado", tiempo:"55 min",
  consigna:"Delegar una tarea multipaso completa sobre archivos reales.",
  criterios:["Archivo(s) de entrada, entregable de salida y registro del proceso.","Al menos 3 pasos encadenados.","Un punto de control humano explícito, con criterio de qué se revisa.","Comparación de tiempo: minutos manuales vs. con el flujo, incluyendo tiempo de revisión."]
},
S08:{ nombre:"Lab 08 — Primer flujo en Claude Code", tiempo:"55 min",
  consigna:"Instalar, inicializar un repositorio, escribir el archivo de contexto del proyecto y completar una tarea real con el agente.",
  criterios:["Repositorio con Git inicializado y al menos 2 commits.","Archivo de contexto: qué es el proyecto, convenciones, qué no debe tocar el agente.","Una tarea completada, con el diff revisado y comentado.","Evidencia de al menos una corrección al agente."],
  nota:"Carril operador: carpeta de documentos en lugar de código. Mismo criterio."
},
S09:{ nombre:"Lab 09 — Skill propia y subagente", tiempo:"55 min + 60 min asincrónico",
  consigna:"Empaquetar un procedimiento repetido como skill y crear un subagente especializado.",
  criterios:["Skill con descripción que declara \"cuándo\" activarse, probada con 3 disparos y 1 caso donde correctamente no se activa.","Procedimiento con pasos numerados y criterio de salida.","Subagente con prompt propio y alcance de herramientas limitado, con justificación escrita.","Todo versionado en el repositorio."],
  nota:"Error común: descripción genérica tipo \"ayuda con documentos\". Nunca se activa cuando toca."
},
S10:{ nombre:"Lab 10 — Llamada a la API con tool use", tiempo:"55 min + 60 min asincrónico",
  consigna:"Script funcional que llame a la API, defina una herramienta, procese la llamada y devuelva el resultado.",
  criterios:["Clave de API fuera del código, en variable de entorno, con .gitignore correcto.","Límite de gasto configurado y captura de pantalla como evidencia (sin esto no se recibe el lab).","Herramienta definida con esquema válido, invocada correctamente.","Manejo del caso en que el modelo no llama la herramienta.","Manejo de error de límite de tasa con reintento.","Estimación de costo mensual con la fórmula visible."]
},
S11:{ nombre:"Lab 11 — MCP en producción mínima", tiempo:"55 min + 60 min asincrónico",
  consigna:"Opción A (técnica): servidor MCP con dos herramientas (lectura + escritura) conectado. Opción B (operador): dos conectores gestionados a un flujo real, con documentación de exposición de datos.",
  criterios:["Descripciones de herramienta que indican cuándo usarlas y qué devuelven.","Mensajes de error accionables.","La herramienta de escritura exige confirmación explícita antes de ejecutar.","Matriz de permisos: qué dato queda accesible, para quién, y cómo se revoca."]
},
S12:{ nombre:"Lab 12 — Pipeline RAG con datos propios", tiempo:"55 min + 90 min asincrónico",
  consigna:"Ingerir 20 o más documentos propios y montar recuperación funcional.",
  criterios:["20+ documentos reales de la organización o del set provisto.","Estrategia de fragmentación justificada por escrito.","Metadatos: mínimo fecha, área y versión.","5 consultas de prueba con los fragmentos recuperados visibles.","Respuestas que citan el documento fuente."]
},
S13:{ nombre:"Lab 13 — Evaluación y corrección del RAG", tiempo:"55 min + 90 min asincrónico",
  consigna:"Etiquetar 20 preguntas con su fragmento correcto, medir, diagnosticar, corregir, volver a medir.",
  criterios:["Set etiquetado de 20 preguntas, incluyendo 3 cuya respuesta no está en la base.","Métricas de recuperación reportadas antes y después.","Diagnóstico que distingue fallo de recuperación de fallo de generación.","Una corrección implementada y su efecto medido.","Las 3 preguntas sin respuesta devuelven \"no está en la base\", no una invención."]
},
S14:{ nombre:"Lab 14 — Arquitectura y control de riesgos", tiempo:"55 min",
  consigna:"Diagramar el sistema del capstone y su plan de control.",
  criterios:["Diagrama con componentes, flujo de datos y puntos de decisión.","Justificación de por qué multi-agente o por qué un solo agente basta.","Tabla de modos de fallo: qué puede salir mal, cómo se detecta, qué se hace.","Límite de iteraciones y presupuesto por ejecución declarados en números.","Punto de aprobación humana identificado con cargo responsable."]
}
};
