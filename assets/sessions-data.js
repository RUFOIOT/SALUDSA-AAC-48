/* ============================================================
   SALUDSA-AAC-48 — Student Hub — datos de contenido
   Extraído fielmente de 02_Sesiones/*.md, 01_Programa/01_Programa_SALUDSA.md,
   05_Capstone/*.md, 06_Operacion/*.md, 03_Recursos/*, 04_Evaluacion/*.md
   Sin datos inventados: toda cifra, fecha y cita proviene del repositorio.
   ============================================================ */

const PROGRAM = {
  codigo: "VBM-AAC-48-SAL",
  cliente: "SALUDSA (CLI-001)",
  emisor: "Vibramente / ORION AI Strategy",
  version: "1.0 · 4 de septiembre de 2026",
  cohorte: "SAL-C1 — Comercial y Marketing",
  inicio: "Miércoles 14 de octubre de 2026",
  cierre: "Viernes 27 de noviembre de 2026",
  horario: "Miércoles y viernes · 08:00–11:00 (Ecuador)",
  sesiones: 14,
  horas: 48,
  semanas: 7,
  agentes: ["Isabel (P01)", "Pep & Zizu (P02)", "3 subagentes HubSpot"],
  tagline: "Automatización y Agentes de IA con Claude — Cohorte Corporativa SALUDSA",
  resumen: "Fusión del pensum VBM-AAC-48 (48 h, 14 sesiones, certificación con suficiencia) con el AI Operator Cohort (6 capas, Obsidian, RCTFX, Show & Tell). Isabel, Pep & Zizu y los tres subagentes de HubSpot no son ejemplos: son el entorno de trabajo real de los participantes desde la semana 1.",
  noEs: "No es un curso de \"IA para todos\". Es formación del equipo que va a operar, supervisar y extender esos agentes.",

  porQueAdapta: [
    "El proceso comercial de medicina prepagada es un caso ideal de agente conversacional con escalamiento: alto volumen de consultas repetitivas (cobertura, precio, red, carencia), una frontera clara donde el agente debe detenerse (preexistencia, consejo clínico, precio final) y un humano disponible (el RN).",
    "La normativa obliga a hacer lo que el pensum ya exige: datos de salud son datos sensibles bajo la LOPDP; el pensum exige clasificación de datos, mínimo acceso, humano en el bucle y trazabilidad desde S02.",
    "Cada módulo tiene un destino directo en el proyecto SALUDSA. Nada de lo que se enseña queda como ejercicio académico."
  ],

  condiciones: [
    { titulo: "KB aprobada antes de S06", detalle: "El catálogo de planes, coberturas, carencias y red que usarán los labs debe estar validado por Comercial y Legal, con versión y vigencia. Sin KB aprobada, los agentes aprenden de datos inventados.", responsable: "Nicolás González (Comercial) + Legal SALUDSA" },
    { titulo: "Autorización de datos antes de S03", detalle: "Los datasets reales que sustituyan a los sintéticos deben estar anonimizados y autorizados por el responsable de protección de datos.", responsable: "PM SALUDSA (Sonia Checa) + DPO/Legal" },
    { titulo: "Fronteras clínicas escritas", detalle: "Lista explícita, firmada por Auditoría Médica, de lo que ningún agente puede responder (diagnóstico, evaluación de preexistencia, pertinencia médica). Se convierte en eval obligatorio de todos los capstones.", responsable: "Auditoría Médica SALUDSA" }
  ],

  matrizRegulatoria: [
    { marco: "Ley de compañías de medicina prepagada (Ecuador) y Superintendencia de Compañías, Valores y Seguros", exige: "Información veraz al usuario sobre coberturas, exclusiones y carencias; trato de preexistencias conforme a norma", donde: "S02, S06, S12–S13", control: "El agente solo responde desde KB versionada; toda cifra sin fuente es fallo grave en el eval" },
    { marco: "LOPDP (2021) — datos de salud como datos sensibles", exige: "Consentimiento explícito, finalidad declarada, mínimo acceso, seguridad, registro de tratamiento", donde: "S02, S07, S10, S11", control: "El agente no recoge diagnósticos por chat; tickets con dato de salud van a cola humana" },
    { marco: "Defensa del consumidor / publicidad", exige: "No prometer lo que el contrato no cubre; publicidad no engañosa", donde: "S04–S05, S14", control: "Eval de marca con criterio \"afirmación verificable en KB\"" },
    { marco: "Ética y seguridad (política de uso de Anthropic)", exige: "Sin consejo médico, sin manipulación, sin retención coercitiva", donde: "S02, S09", control: "Fronteras clínicas como casos de regresión en cada capstone" },
    { marco: "Contrato SA-CT-0336-2026", exige: "Confidencialidad, propiedad de entregables, SLA", donde: "S02, S14", control: "Los capstones son propiedad de SALUDSA; los datasets no salen del entorno acordado" }
  ],

  cohortes: [
    { id: "SAL-C1", perfil: "6 RN (asesores comerciales), 3 de Marketing, 1 líder comercial, 1 PM (Sonia Checa), 1 TI", foco: "Conversión, calificación de leads, contenido de campaña", agente: "Isabel (P01), Pep & Zizu (P02), subagentes HubSpot", activa: true },
    { id: "SAL-C2", perfil: "5 de Servicio al Afiliado, 2 de Reembolsos/Autorizaciones, 2 de Calidad, 1 Auditoría Médica, 1 Legal/DPO, 1 TI", foco: "Clasificación y ruteo de tickets, KB de servicio, control de cumplimiento", agente: "Supervisor de conversaciones, RAG de servicio", activa: false }
  ],

  stack6capas: [
    { capa: "1. Workspaces", saludsa: "SALUDSA-Comercial, SALUDSA-Servicio, SALUDSA-Conocimiento" },
    { capa: "2. Agents (RCTFX)", saludsa: "Supervisor de Isabel, QA de conversaciones, Calificador de leads, Redactor de campaña, Clasificador de tickets, Auditor LOPDP" },
    { capa: "3. Automations", saludsa: "Brief semanal de campaña, resumen diario de escalamientos, informe de tasa de escalamiento" },
    { capa: "4. Knowledge Bases", saludsa: "KB aprobada de planes (versionada), KB de red médica, KB de servicio" },
    { capa: "5. MCP Connectors", saludsa: "HubSpot (pipeline de agentes), Drive, Slack; matriz de permisos por rol" },
    { capa: "6. HTML Artifacts", saludsa: "Consola de estado de agentes SALUDSA, comparador de planes interno, tablero de escalamientos" }
  ],

  roles: [
    { rol: "Director del programa y facilitador principal", persona: "Felipe Salgado", detalle: "Dicta S01–S14, tribunal de capstone, firma certificados" },
    { rol: "Asistente técnico", persona: "ORION (por definir)", detalle: "Sala paralela, instalación, soporte de labs 08–13" },
    { rol: "Patrocinador SALUDSA", persona: "Nicolás González", detalle: "Aprueba KB, designa RN participantes, preside Show & Tell" },
    { rol: "PM SALUDSA", persona: "Sonia Checa", detalle: "Coordinación de agenda, accesos, datos autorizados, Legal/TI" },
    { rol: "Validador clínico", persona: "Auditoría Médica SALUDSA", detalle: "Firma fronteras clínicas (S02), revisa capstones con dato de salud" },
    { rol: "Validador legal", persona: "Legal / DPO SALUDSA", detalle: "Valida matriz regulatoria y anonimización" },
    { rol: "Infraestructura", persona: "TI SALUDSA + Autoploy", detalle: "Accesos a HubSpot sandbox, cuentas, conectores" }
  ],

  indicadores: [
    { indicador: "Finalización", meta: "≥ 10 de 12" },
    { indicador: "Suficiencia", meta: "7 – 10 de 12" },
    { indicador: "Capstones en producción a 30 días", meta: "≥ 6" },
    { indicador: "Set de regresión de Isabel entregado al proyecto", meta: "20 casos × 12 participantes, depurados a 100 casos únicos" },
    { indicador: "Fronteras clínicas convertidas en evals", meta: "100 %" },
    { indicador: "Incidentes LOPDP en entregables", meta: "0" },
    { indicador: "Tasa de escalamiento de Isabel medida por el equipo", meta: "Reporte semanal desde S09" }
  ],

  goNoGo: [
    "12 participantes confirmados con perfil y carril",
    "KB de planes en proceso de aprobación, fecha comprometida antes de S06",
    "Autorización de datos anonimizados o decisión de correr con sintéticos",
    "Sandbox de HubSpot o pipeline de pruebas separado del productivo",
    "Cuentas claude.ai y presupuesto de API por participante aprobado",
    "Reunión de fronteras clínicas agendada con Auditoría Médica antes de S02",
    "Fecha de Show & Tell bloqueada en la agenda de Nicolás González"
  ]
};

/* Formato estándar de bloque de sesión (00_Formato_de_Sesion.md) */
const FORMATO_SESION = [
  { bloque: "Apertura", min: "0–10", regla: "Revisar 2 entregables de la sesión anterior en pantalla. Nombrar lo que estuvo bien y lo que faltó." },
  { bloque: "Concepto + demo", min: "10–50", regla: "Máximo 40 min. Todo concepto se ejecuta en vivo sobre datos SALUDSA." },
  { bloque: "Lab guiado", min: "50–100", regla: "El facilitador construye; el grupo replica. Ritmo del tercero más lento." },
  { bloque: "Pausa", min: "100–110", regla: "—" },
  { bloque: "Lab autónomo", min: "110–165", regla: "Cada quien sobre su proceso. Asistente en sala paralela." },
  { bloque: "Cierre", min: "165–180", regla: "Entregable subido al repositorio + nota en Obsidian /Weekly-Log. Encargo asincrónico." }
];

/* ============================================================
   Las 14 sesiones + guion minuto a minuto (fiel a 02_Sesiones/*.md)
   ============================================================ */
const SESSIONS = [
{
  code:"S01", title:"Fundamentos de LLM y sistemas agénticos", semana:1, fecha:"Mié 14 oct", modulo:"Módulo 1", capa:"—", agente:"Los tres agentes", bloqueante:false,
  objetivo:"Al cerrar, cada participante explica en 90 segundos, con sus palabras, por qué Isabel puede inventar un precio si nadie se lo impide, y entrega la ficha de 3 procesos de su área.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"\"Este programa no es sobre IA. Es sobre Isabel, Pep & Zizu y ustedes.\" Presentación de 30s por persona: nombre, área, proceso que más repite al mes."},
    {min:"10–25",bloque:"Cómo genera texto un LLM",detalle:"Demo: misma pregunta de precio del Familiar Plus, tres veces con temperatura distinta — inventa un número distinto cada vez. \"No consulta, predice.\""},
    {min:"25–40",bloque:"Ventana de contexto y degradación",detalle:"Demo: conversación de 40 turnos donde la instrucción \"nunca des precio\" del turno 1 se pierde en el turno 38."},
    {min:"40–50",bloque:"Asistente → flujo → agente",detalle:"Tabla de 3 niveles con Isabel: responde (asistente), consulta la KB (flujo), cambia etapa en HubSpot (agente = riesgo)."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Cada uno abre SALUDSA-Conocimiento, hace 5 preguntas de la FAQ y 2 que NO están. Registra cuándo el modelo dice \"no sé\" y cuándo inventa."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab autónomo — Lab 01",detalle:"Ficha de 3 procesos propios: quién, frecuencia/mes, minutos por ejecución, entrada, salida, decisión humana, qué pasa si sale mal."},
    {min:"165–180",bloque:"Cierre",detalle:"3 fichas leídas en voz alta. Fila 1 de la bitácora: \"Isabel predice; toda cifra debe venir de KB\"."}
  ],
  vinculo:"Las 36 fichas (12 × 3) forman el backlog de automatizaciones fase 2. Se depuran en T1 y se entregan a Nicolás como anexo del Show & Tell.",
  criterio:"3 procesos · minutos medidos o método explícito · al menos uno con ≥ 20 ejecuciones/mes · sin verbos vagos.",
  riesgos:"Los RN quieren hablar de ventas, no de tokens. Anclar cada concepto a una conversación real de WhatsApp."
},
{
  code:"S02", title:"Framework de seguridad de Anthropic, LOPDP y fronteras clínicas", semana:1, fecha:"Vie 16 oct", modulo:"Módulo 2", capa:"Governance", agente:"Isabel (P01)", bloqueante:false,
  objetivo:"Cada participante clasifica sus 3 procesos (apto / apto con controles / no apto) con referencia a la política de uso y a la LOPDP, y el grupo entrega la lista de fronteras clínicas que Auditoría Médica firma esa misma semana.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"2 fichas del Lab 01 en pantalla. ¿Cuál de estos procesos toca datos de salud?"},
    {min:"10–25",bloque:"Por qué existe un marco de seguridad",detalle:"\"Un sistema capaz sobre un proceso con consecuencias.\" Se muestra a Isabel rechazando dar consejo médico y se explica de dónde sale ese comportamiento."},
    {min:"25–55",bloque:"Fronteras clínicas (con Auditoría Médica)",detalle:"Se construye en vivo la lista: diagnóstico, evaluación de preexistencia, pertinencia médica, interpretación de resultados, promesa de cobertura. Cada frontera se escribe como caso de eval."},
    {min:"55–70",bloque:"LOPDP aplicada",detalle:"Dato personal vs. dato sensible. Qué recoge Isabel (nombre, ciudad, edad, interés) y qué no debe recoger (diagnóstico, historial)."},
    {min:"70–85",bloque:"Demo: inyección de prompt",detalle:"Se sube un PDF trampa a un chat con conector. Se muestra la defensa: delimitar datos, tratar contenido como datos, nunca como orden."},
    {min:"85–100",bloque:"Controles obligatorios del curso",detalle:"Humano en el bucle para toda acción irreversible; límite de gasto; registro de acciones."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 02",detalle:"Matriz de riesgo por proceso: datos involucrados, clasificación, controles, aprobador con cargo."},
    {min:"165–180",bloque:"Cierre",detalle:"Lista de fronteras clínicas completa. Bitácora: \"Fronteras clínicas v1 → van al eval de Isabel\"."}
  ],
  vinculo:"La lista de fronteras clínicas firmada se convierte en 10 casos de regresión permanentes de Isabel. ORION los incorpora en la suite del proyecto.",
  criterio:"Clasificación con referencia explícita a política de uso y LOPDP · ≥ 2 controles por proceso con dato personal · aprobador con cargo en toda acción irreversible.",
  riesgos:"Que se vuelva charla de cumplimiento. Cada control se escribe como caso de eval con entrada y salida esperada."
},
{
  code:"S03", title:"Capacidades y limitaciones de Claude en escenarios reales", semana:2, fecha:"Mié 21 oct", modulo:"Módulo 3", capa:"—", agente:"Isabel, Clasificador de tickets", bloqueante:false,
  objetivo:"Cada participante corre 10 casos reales (o sintéticos autorizados) sobre una tarea de su área y reporta el porcentaje de acierto con al menos 2 casos límite y 1 fallo analizado.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"Resultados del Quiz 1. 2 matrices de riesgo en pantalla."},
    {min:"10–30",bloque:"Dónde rinde alto / dónde falla",detalle:"Reescribir mensaje de RN (alto), extraer edad y ciudad (alto), calcular prima exacta (falla), decidir si una preexistencia aplica (no debe)."},
    {min:"30–50",bloque:"Fallo silencioso en vivo",detalle:"Se clasifican 5 tickets con un prompt mediocre. Uno de \"reclamo\" sale como \"red_medica\" con total seguridad."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Diseño de prueba mínima: 10 casos, salida esperada declarada antes de correr, criterio binario. Se corren 10 tickets del CSV y se tabula acierto."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 03",detalle:"RN → 10 mensajes de prospectos; Marketing → 10 claims de campaña; Servicio → 10 tickets y su ruteo. Tabla: caso, esperado, obtenido, veredicto, tipo de fallo."},
    {min:"165–180",bloque:"Cierre",detalle:"Porcentajes en la pizarra. Bitácora: \"Isabel acierta X % en calificación; los fallos se concentran en ___\"."}
  ],
  vinculo:"Los casos límite que rompen el sistema van al set de regresión. Un participante que reporta 10/10 sin casos límite no aprobó: diseñó una prueba complaciente.",
  criterio:"10 casos reales/autorizados · 2 casos límite · % de acierto · 1 fallo con causa probable.",
  riesgos:"Que usen los datos sintéticos sin criterio. Pedir que al menos 3 casos vengan de su experiencia real, reescritos sin datos personales."
},
{
  code:"S04", title:"Prompt engineering I: RCTFX aplicado al proceso comercial", semana:2, fecha:"Vie 23 oct", modulo:"Módulo 4", capa:"Agents", agente:"Hiperpersonalización, Pep & Zizu", bloqueante:false,
  objetivo:"Cada participante entrega un prompt de producción v1 en RCTFX para un subproceso propio, con datos en etiquetas y formato verificable por máquina.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"2 matrices de fallo. Dónde se concentraron los fallos del grupo."},
    {min:"10–25",bloque:"RCTFX",detalle:"Rol, Contexto, Tarea, Formato, eXamples. Se muestra el prompt del Calificador de leads SALUDSA de la biblioteca y se señala cada parte."},
    {min:"25–35",bloque:"Separar instrucción de datos",detalle:"Etiquetas alrededor del mensaje del prospecto. Conexión con S02: es la defensa contra inyección."},
    {min:"35–45",bloque:"Ejemplos y salida estructurada",detalle:"Salida JSON con intencion, score, siguiente_accion, escalar. \"Si HubSpot no puede leerlo, no sirve.\""},
    {min:"45–50",bloque:"Antipatrones",detalle:"Prompt de 3 páginas vs. 25 líneas estructuradas. Cortesía no es especificación."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Reescribir el prompt mediocre de clasificación de tickets en RCTFX, en vivo. Se corren 5 tickets y se compara con S03."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 04",detalle:"Prompt de producción v1 del subproceso propio, versionado con fecha y autor."},
    {min:"165–180",bloque:"Cierre",detalle:"2 prompts revisados con la rúbrica R2. Bitácora: \"Salida de Isabel hacia HubSpot debe ser JSON estricto\"."}
  ],
  vinculo:"Los prompts de primer contacto por plan escritos por los RN se contrastan con el comportamiento actual de Isabel. Lo que escriben mejor entra al prompt del proyecto.",
  criterio:"5 componentes delimitados · datos en etiquetas · formato verificable · ≥ 2 ejemplos, uno difícil · versionado.",
  riesgos:""
},
{
  code:"S05", title:"Prompt engineering II: evals y regresión — el set de Isabel", semana:3, fecha:"Mié 28 oct", modulo:"Módulo 4", capa:"Agents", agente:"Isabel (P01)", bloqueante:false,
  objetivo:"Cada participante entrega un set de 20 casos con criterio binario, corrido contra v1 y v2 de su prompt, con acierto, costo por caso y latencia. El grupo consolida el set de regresión de Isabel.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"2 prompts v1 en pantalla."},
    {min:"10–25",bloque:"Qué es un eval",detalle:"Casos + esperado declarado antes + criterio aplicable por un tercero + resultado registrado. Sesgo del juez modelo: es generoso con respuestas largas."},
    {min:"25–40",bloque:"Regresión y versionado",detalle:"Cambia el prompt o el modelo → se corre todo el set. Un prompt de Isabel es código. Se muestra un cambio \"inocente\" que rompe 3 casos de frontera clínica."},
    {min:"40–50",bloque:"Costo y latencia",detalle:"Tokens de entrada/salida, caché sobre la KB. Cálculo: 3 000 conversaciones/mes × tokens × precio."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Se construye en vivo el set consolidado: cada participante aporta sus 3 mejores casos límite. Se corre el prompt actual de Isabel contra los 20 primeros."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 05",detalle:"20 casos propios, v1 vs v2, tabla con acierto, costo/caso, latencia media, hipótesis escrita."},
    {min:"165–180",bloque:"Cierre",detalle:"Bitácora: \"Set de regresión Isabel v1: N casos únicos, acierto actual X %\"."}
  ],
  vinculo:"Este es el entregable más valioso de la cohorte para ORION. El set consolidado (meta: 100 casos únicos) se entrega como suite de regresión oficial de Isabel y se corre en cada despliegue.",
  criterio:"20 casos con esperado previo · criterio aplicable por tercero · tabla v1/v2 con acierto, costo, latencia · hipótesis.",
  riesgos:""
},
{
  code:"S06", title:"Claude.ai: Projects, Artifacts, memoria y Claude Design", semana:3, fecha:"Vie 30 oct", modulo:"Módulo 5", capa:"Workspaces", agente:"Pep & Zizu, RN", bloqueante:false,
  objetivo:"Cada participante monta un Project con instrucciones RCTFX y ≥ 5 documentos de la KB aprobada, y produce un artifact usable por un compañero sin explicación.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"Resultados Quiz 2. Estado del set de regresión consolidado."},
    {min:"10–25",bloque:"Chat vs. Project",detalle:"Misma pregunta de cobertura en chat suelto (genérica) y en SALUDSA-Comercial (desde KB con versión)."},
    {min:"25–35",bloque:"Conocimiento del proyecto y sus límites",detalle:"Qué cabe, qué no, por qué la KB necesita versión y vigencia (adelanto de S12–S13)."},
    {min:"35–45",bloque:"Artifacts",detalle:"Se genera en vivo un comparador de planes interno (HTML) para uso de los RN: elige plan, edad, personas → coberturas y carencias desde KB."},
    {min:"45–50",bloque:"Claude Design + memoria",detalle:"Pieza de campaña con claims marcados como \"verificable en KB: Q8\". Memoria: qué guarda, cómo se desactiva."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Todos crean su Project por carril: Mi-Comercial / Mi-Campaña / Mi-Servicio. Instrucciones RCTFX, 5 docs de KB, 3 consultas de prueba."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 06",detalle:"Artifact propio: comparador o guion de primer contacto (RN); pieza en Design con claims (Marketing); árbol de ruteo (Servicio)."},
    {min:"165–180",bloque:"Cierre",detalle:"Cada artifact lo abre otro participante y lo usa sin explicación. Bitácora: \"Workspace comercial base v1\"."}
  ],
  vinculo:"SALUDSA-Comercial queda como el espacio donde los RN preparan respuestas que Isabel no puede dar (precio final, preexistencia). Es el \"lado humano\" del agente.",
  criterio:"Instrucciones RCTFX · ≥ 5 docs con criterio · artifact usable por tercero · 3 consultas documentadas.",
  riesgos:""
},
{
  code:"S07", title:"Claude Cowork: delegar trabajo completo con punto de control", semana:4, fecha:"Mié 4 nov", modulo:"Módulo 5", capa:"Automations", agente:"Pep & Zizu, supervisión de Isabel", bloqueante:false,
  objetivo:"Cada participante delega una tarea multipaso real (≥ 3 pasos) con archivos de entrada y salida, un punto de control humano explícito y comparación de minutos manuales vs. con flujo.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"2 artifacts en pantalla."},
    {min:"10–25",bloque:"Respuesta vs. trabajo",detalle:"\"Resume esto\" vs. encargar \"lee 40 conversaciones, clasifica intención, marca las que debieron escalar, produce informe\". Segundo caso en vivo con Cowork."},
    {min:"25–40",bloque:"Flujo de supervisión semanal de Isabel",detalle:"Entrada: export de conversaciones. Punto de control: un humano revisa las 5 conversaciones de riesgo ALTO antes de que el informe salga."},
    {min:"40–50",bloque:"Tabla de decisión",detalle:"Chat: pregunta. Cowork: trabajo sobre archivos. Claude Code: repositorio con versionado. API: volumen y sistemas."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Flujo \"brief semanal de campaña\": entrada = métricas de Meta Ads + KB; salida = brief con 3 claims verificables; control = Marketing aprueba."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 07",detalle:"Flujo propio con archivos reales de su área (anonimizados): ≥ 3 pasos, punto de control, comparación de minutos incluyendo revisión."},
    {min:"165–180",bloque:"Cierre",detalle:"Minutos ahorrados en pizarra (con revisión incluida). Bitácora: \"Flujo de supervisión semanal v1\"."}
  ],
  vinculo:"El flujo de supervisión semanal es la primera pieza del gobierno operativo de Isabel por parte de SALUDSA. En S09 se vuelve skill + subagente; en S14 alimenta la consola de estado.",
  criterio:"Entrada/salida/registro · ≥ 3 pasos · punto de control con criterio · minutos antes/después con revisión.",
  riesgos:""
},
{
  code:"S08", title:"Claude Code I: instalación, contexto del proyecto y primer flujo", semana:4, fecha:"Vie 6 nov", modulo:"Módulo 6", capa:"Automations", agente:"—", bloqueante:true,
  objetivo:"Todos salen con Claude Code operando sobre un repositorio propio con Git, archivo de contexto y una tarea completada y corregida.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"Check de entorno: quién corre \"claude\" en terminal. Los que no, a sala paralela desde ya."},
    {min:"10–25",bloque:"Modelo mental",detalle:"Un agente con acceso a archivos y terminal dentro de un directorio. \"Nunca en una carpeta sin Git.\""},
    {min:"25–40",bloque:"Archivo de contexto",detalle:"Se escribe en vivo: qué es, convenciones, qué no debe tocar (nada en /datos-reales/, nunca borrar exports)."},
    {min:"40–50",bloque:"Primer flujo no-código",detalle:"En una carpeta de 30 conversaciones: \"clasifica por intención, renombra con prefijo, genera índice\". Se revisa el diff."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Clonar plantilla, git init, archivo de contexto propio, ejecutar la tarea, revisar diff, commit."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 08",detalle:"Tarea propia sobre su carpeta/repositorio. Obligatorio: una corrección al agente documentada."},
    {min:"165–180",bloque:"Cierre",detalle:"2 diffs comentados. Bitácora: \"Repositorio de supervisión v1 en Git\"."}
  ],
  vinculo:"El repositorio saludsa-supervision es donde vivirán la skill de revisión, el subagente QA y los evals. Es propiedad de SALUDSA desde el día uno.",
  criterio:"BLOQUEANTE — Git con ≥ 2 commits · archivo de contexto con \"qué no tocar\" · tarea completada con diff comentado · evidencia de una corrección al agente.",
  riesgos:"Quien no tenga entorno al cierre: 48h con el asistente; si no, carril operador con entorno provisto por ORION. No se avanza a S09 sin Lab 08."
},
{
  code:"S09", title:"Claude Code II: skills, subagentes, hooks y comandos", semana:5, fecha:"Mié 11 nov", modulo:"Módulo 6", capa:"Agents", agente:"Isabel (P01)", bloqueante:false,
  objetivo:"Cada participante entrega una skill propia (que dispara correctamente en 3 casos y no dispara en 1) y un subagente con alcance limitado, versionados en su repositorio.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"2 repositorios en pantalla."},
    {min:"10–25",bloque:"Skills",detalle:"Procedimiento empaquetado que se carga cuando corresponde. Se muestra la skill de referencia y se ejecuta sobre 3 conversaciones."},
    {min:"25–40",bloque:"La descripción es todo",detalle:"4 descripciones de la misma skill, de \"ayuda con conversaciones\" a una específica. Se prueba cuál dispara."},
    {min:"40–50",bloque:"Subagentes, hooks, comandos",detalle:"Subagente = aislamiento. qa-isabel solo lee, nunca escribe en HubSpot. Hook = verificación determinista (bloqueo de /datos-reales/)."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Instalan la skill de referencia, la corren sobre 5 conversaciones, leen el informe. Crean el subagente qa-isabel."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 09",detalle:"Skill propia por carril + subagente propio con justificación del aislamiento. 3 disparos + 1 no-disparo documentados."},
    {min:"165–180",bloque:"Cierre",detalle:"Bitácora: \"Skill de revisión de Isabel v1 instalada en el repo de supervisión\". Encargo: configurar límite de gasto (captura obligatoria)."}
  ],
  vinculo:"Desde esta semana, el equipo de SALUDSA corre la revisión semanal de Isabel con su propia skill, no ORION. El informe semanal se guarda en Agentes-SALUDSA/supervision/.",
  criterio:"Descripción con \"cuándo\" · 3 disparos + 1 no-disparo · pasos numerados y criterio de salida · subagente con alcance limitado justificado · todo en Git.",
  riesgos:""
},
{
  code:"S10", title:"API de Claude: mensajes, tool use, streaming y costo", semana:5, fecha:"Vie 13 nov", modulo:"Módulo 7", capa:"MCP Connectors", agente:"Subagentes HubSpot", bloqueante:true,
  objetivo:"Cada participante ejecuta un script (técnico) o flujo configurado (operador) que llama a la API, define una herramienta rutear_ticket, maneja el caso sin llamada y el error de límite de tasa, y estima el costo mensual.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"Capturas de límite de gasto en pantalla, una por una."},
    {min:"10–25",bloque:"Anatomía de una llamada",detalle:"Sistema, mensajes, tokens máximos. Clave fuera del código, .gitignore. Demo: clasificar 1 ticket."},
    {min:"25–45",bloque:"Tool use",detalle:"Definir rutear_ticket con esquema. Caso: contiene_dato_salud = true → la herramienta no rutea automáticamente, encola para humano."},
    {min:"45–50",bloque:"Streaming, lotes, errores, costo",detalle:"Streaming para experiencia; lotes para históricos; reintento con espera ante límite de tasa."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Técnico: correr el script sobre 50 tickets, forzar un error de tasa. Operador: mismo flujo en un artifact/automatización."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 10",detalle:"Herramienta propia, manejo de los dos casos, estimación de costo mensual: volumen × tokens × precio, con caché."},
    {min:"165–180",bloque:"Cierre",detalle:"3 estimaciones de costo comparadas con las proyecciones del proyecto SALUDSA. Bitácora: \"Clasificador de tickets piloto v1\"."}
  ],
  vinculo:"El clasificador con regla de dato de salud es el piloto de Servicio de la segunda cohorte, y su lógica se traslada al agente de conversión en HubSpot.",
  criterio:"BLOQUEANTE — Clave en entorno + .gitignore · captura de límite de gasto · herramienta con esquema válido · caso sin llamada · reintento por tasa · costo con fórmula visible.",
  riesgos:""
},
{
  code:"S11", title:"MCP: conectores gestionados y servidor propio", semana:6, fecha:"Mié 18 nov", modulo:"Módulo 7", capa:"MCP Connectors", agente:"3 subagentes HubSpot", bloqueante:false,
  objetivo:"Opción A (técnico): servidor MCP con una herramienta de lectura y una de escritura con confirmación. Opción B (operador): 2 conectores conectados a un flujo real con matriz de permisos por rol. Ambos entregan la matriz.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"2 estimaciones de costo revisadas. Lista de sistemas que tocan los procesos del grupo."},
    {min:"10–25",bloque:"Qué resuelve MCP",detalle:"Un protocolo en lugar de 10 integraciones. Demo: Claude leyendo la FAQ por MCP y consultando el pipeline de prueba de HubSpot."},
    {min:"25–40",bloque:"Diseño de herramientas para un modelo",detalle:"Nombres explícitos, descripción que dice cuándo, errores que explican cómo corregir."},
    {min:"40–50",bloque:"El riesgo está en la escritura",detalle:"actualizar_etapa_lead con confirmación explícita, registro y reversibilidad. Las 4 propiedades personalizadas del proyecto SALUDSA."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Conectar Drive (KB) + pipeline de prueba. Llenar la matriz de permisos: dato, quién, para qué, cómo se revoca."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 11",detalle:"Opción A o B sobre el proceso propio. Herramienta de escritura con confirmación obligatoria."},
    {min:"165–180",bloque:"Cierre",detalle:"Matriz de permisos consolidada → propuesta de gobierno de conectores del proyecto."}
  ],
  vinculo:"La matriz consolidada se entrega a TI de SALUDSA y a Autoploy como especificación de permisos de los conectores de los agentes.",
  criterio:"Descripciones con \"cuándo\" y \"qué devuelve\" · errores accionables · escritura con confirmación · matriz de permisos con revocación.",
  riesgos:""
},
{
  code:"S12", title:"RAG I: ingesta, fragmentación, embeddings y recuperación", semana:6, fecha:"Vie 20 nov", modulo:"Módulo 8", capa:"Knowledge Bases", agente:"Isabel, RAG de Servicio", bloqueante:false,
  objetivo:"Cada participante monta un pipeline RAG sobre ≥ 20 documentos, con fragmentación justificada, metadatos de área/versión/vigencia/sensibilidad, y 5 consultas con fragmentos visibles y citación.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"Matriz de permisos consolidada: versión final."},
    {min:"10–25",bloque:"El problema",detalle:"Contexto limitado, KB que cambia cada trimestre, obligación de citar fuente."},
    {min:"25–40",bloque:"Arquitectura y fragmentación",detalle:"Ingesta → fragmentación → vectorización → índice → recuperación → generación. La tabla de carencias cortada por caracteres responde mal."},
    {min:"40–50",bloque:"Metadatos y recuperación híbrida",detalle:"Sin version y vigencia el sistema mezcla la política de 2025 con la de 2026 (Q7 vs Q5)."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Ingesta de la FAQ con metadatos. 5 consultas. Se ve si vuelve Q5 o Q7."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 12",detalle:"Pipeline propio con 20+ documentos. Fragmentación justificada por escrito. 5 consultas con fragmentos y cita."},
    {min:"165–180",bloque:"Cierre",detalle:"Bitácora: \"KB de planes con metadatos v1; Q7 obsoleta aún se cuela en X de 12 pipelines\"."}
  ],
  vinculo:"La KB con metadatos de versión y vigencia es la que Isabel debe consultar en producción. \"Q7 se cuela\" es exactamente el defecto que hay que impedir.",
  criterio:"20+ docs · fragmentación justificada · metadatos mínimos · 5 consultas con fragmentos · citación.",
  riesgos:""
},
{
  code:"S13", title:"RAG II: evaluación de recuperación y RAG agéntico", semana:7, fecha:"Mié 25 nov", modulo:"Módulo 8", capa:"Knowledge Bases", agente:"—", bloqueante:false,
  objetivo:"Cada participante reporta métricas de recuperación antes y después de una corrección, distingue fallo de recuperación de fallo de generación, y demuestra que sus 3 preguntas sin respuesta devuelven \"no está en la base\".",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"Cuántos pipelines siguen devolviendo Q7."},
    {min:"10–25",bloque:"Dos fallos distintos",detalle:"Recuperó mal vs. recuperó bien y generó mal. Demo con la pregunta de maternidad."},
    {min:"25–40",bloque:"Métricas",detalle:"Acierto top-k, posición, fidelidad al fragmento, cobertura, cita. Se calculan en vivo."},
    {min:"40–50",bloque:"Corrección y RAG agéntico",detalle:"Filtro por vigencia elimina Q7. RAG agéntico: el agente decide buscar, reformula, busca dos veces. \"Si no está, decir que no está.\""},
    {min:"50–100",bloque:"Lab guiado",detalle:"Todos corren su set de 20 sobre su pipeline. Métricas antes/después de aplicar filtro por vigencia."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 13",detalle:"Informe: métricas antes/después, diagnóstico por tipo de fallo, corrección, las 3 preguntas sin respuesta devuelven \"no está en la base\"."},
    {min:"165–180",bloque:"Cierre",detalle:"Bitácora: \"Política anti-invención v1: toda respuesta sin fragmento con vigencia válida → 'no está en la base', escalar a RN\"."}
  ],
  vinculo:"La política anti-invención se incorpora al prompt de Isabel y a los evals. Se reporta en la consola de estado de S14.",
  criterio:"20 preguntas etiquetadas con 3 sin respuesta · métricas antes/después · diagnóstico recuperación vs. generación · una corrección medida.",
  riesgos:""
},
{
  code:"S14", title:"Arquitecturas multi-agente y automatización del proceso — consola de estado", semana:7, fecha:"Vie 27 nov", modulo:"Módulo 9", capa:"HTML Artifacts + Governance", agente:"Los tres subagentes HubSpot, Isabel, Pep & Zizu", bloqueante:true,
  objetivo:"Cada participante entrega el diagrama de arquitectura de su capstone con modos de fallo, límites numéricos y aprobador con cargo; el grupo publica la consola de estado de agentes SALUDSA v1 como artifact.",
  agenda:[
    {min:"0–10",bloque:"Apertura",detalle:"Métricas RAG del grupo. Estado de los capstones tras T2."},
    {min:"10–25",bloque:"Cuándo basta un agente",detalle:"Patrones: cadena, enrutador, orquestador + especialistas, evaluador–ejecutor. SALUDSA = enrutador (Isabel) + especialistas (3 subagentes) + evaluador (QA)."},
    {min:"25–40",bloque:"Composición y estado",detalle:"Skills = procedimiento, subagentes = especialistas, MCP = acceso, RAG = memoria. Qué se pasa entre agentes: resumen, nunca la conversación completa con datos personales."},
    {min:"40–50",bloque:"Modos de fallo y controles",detalle:"Máximo 6 iteraciones, USD 0,40 por conversación, registro de cada llamada, aprobación humana antes de \"Cerrado\" o enviar oferta."},
    {min:"50–100",bloque:"Lab guiado",detalle:"Se construye la consola de estado en vivo: 4 tarjetas, tabla de conversaciones de riesgo ALTO, semáforo por agente."},
    {min:"100–110",bloque:"Pausa",detalle:""},
    {min:"110–165",bloque:"Lab 14",detalle:"Diagrama del capstone propio: componentes, flujo de datos, modos de fallo, límites numéricos, aprobador con cargo, plan de adopción."},
    {min:"165–180",bloque:"Cierre",detalle:"Consola publicada. \"La automatización que nadie usa vale cero: su plan de adopción es la última página de su capstone\"."}
  ],
  vinculo:"La consola de estado v1 es el tablero que Nicolás González ve cada lunes. Contiene lo que el equipo de SALUDSA mide sobre sus propios agentes.",
  criterio:"BLOQUEANTE — Diagrama con flujo y decisiones · justificación de arquitectura · modos de fallo con detección y respuesta · límites en números · aprobador con cargo · plan de adopción.",
  riesgos:""
}
];

/* Hitos no-sesión que también viven en el mapa del cohorte */
const MILESTONES = [
  { code:"T1", title:"Tutoría · Alcance y línea base", semana:5, fecha:"13–14 nov", detalle:"Revisar ficha del proceso elegido y línea base medida. Salida: alcance de una página firmado por participante y tutor." },
  { code:"T2", title:"Tutoría · Arquitectura y costo", semana:6, fecha:"20–21 nov", detalle:"Revisar diagrama, componentes, modos de fallo, límites numéricos, costo con fórmula. Salida: arquitectura aprobada." },
  { code:"T3", title:"Tutoría · Ensayo de defensa", semana:7, fecha:"25–26 nov", detalle:"Ensayo cronometrado de 20 min. Se prueba el README con alguien que no es el autor." },
  { code:"EX", title:"Examen de suficiencia", semana:8, fecha:"Mié 2 dic · 08:00–09:30", detalle:"Instrumento del pensum base + 5 casos SALUDSA. Opciones aleatorizadas antes de aplicar." },
  { code:"DEF", title:"Defensas de capstone", semana:8, fecha:"3–4 dic", detalle:"Tribunal: Felipe Salgado + SALUDSA + Auditoría Médica (capstones con dato de salud). Rúbrica de 30 puntos." },
  { code:"S&T", title:"Show & Tell", semana:9, fecha:"Vie 11 dic · 10:00–12:00", detalle:"12 demos de 3 minutos, cada una con un número antes/después, frente a Dirección Comercial." },
  { code:"CERT", title:"Emisión de certificados", semana:10, fecha:"Vie 18 dic", detalle:"Código VBM-AAC-202612-NNN. Suficiencia solo con capstone ≥ 24/30." }
];

/* RCTFX — biblioteca de agentes de referencia */
const RCTFX = [
  { archivo:"WS_SALUDSA-Comercial.md", tipo:"Instrucciones de Project", capa:"Workspaces", sesion:"S06" },
  { archivo:"WS_SALUDSA-Servicio.md", tipo:"Instrucciones de Project", capa:"Workspaces", sesion:"S06" },
  { archivo:"WS_SALUDSA-Conocimiento.md", tipo:"Instrucciones de Project", capa:"Workspaces", sesion:"S01, S06" },
  { archivo:"AG_Calificador_Leads.md", tipo:"Agente (prompt de sistema)", capa:"Agents", sesion:"S04–S05" },
  { archivo:"AG_Redactor_Campaña_Claims.md", tipo:"Agente", capa:"Agents", sesion:"S04, S06" },
  { archivo:"AG_Clasificador_Tickets.md", tipo:"Agente + herramienta", capa:"Agents / MCP", sesion:"S10" },
  { archivo:"AG_Auditor_LOPDP.md", tipo:"Agente", capa:"Governance", sesion:"S02, S11" },
  { archivo:"SKILL_revision-conversacion-isabel/SKILL.md", tipo:"Skill", capa:"Agents", sesion:"S09" },
  { archivo:"SUBAGENT_qa-isabel.md", tipo:"Subagente", capa:"Agents", sesion:"S09" },
  { archivo:"POLITICA_anti-invencion.md", tipo:"Bloque reutilizable", capa:"Knowledge Bases", sesion:"S13" }
];

const DATASETS = [
  { archivo:"leads_sinteticos.csv", filas:60, uso:"S03 (matriz de fallos), S05 (eval), S10 (tool use), S14" },
  { archivo:"conversaciones_whatsapp_sinteticas.csv", filas:40, uso:"S02 (riesgo), S04–S05 (prompting), S09 (supervisor)" },
  { archivo:"tickets_afiliados_sinteticos.csv", filas:50, uso:"S03, S05, S10 (clasificación y ruteo), Capstone Servicio" },
  { archivo:"eval_isabel_20_casos.csv", filas:20, uso:"S05, S13, S14 — set de regresión del agente de ventas" },
  { archivo:"faq_planes_sinteticas.md", filas:"30 preguntas", uso:"S06 (Project), S12–S13 (RAG)" },
  { archivo:"glosario_medicina_prepagada.md", filas:"40 términos", uso:"Todas las sesiones" }
];

const OBSIDIAN_VAULT = [
  { carpeta:"Agent-Briefs", detalle:"Briefs de los agentes del proyecto." },
  { carpeta:"Agentes-SALUDSA", detalle:"Fronteras clínicas, set de regresión de Isabel, bitácora de supervisión." },
  { carpeta:"Automations", detalle:"Flujos multipaso documentados." },
  { carpeta:"Governance", detalle:"Matrices de riesgo y permisos." },
  { carpeta:"KB-Docs", detalle:"Documentos de base de conocimiento." },
  { carpeta:"Show-and-Tell", detalle:"Briefs y material de la demo final." },
  { carpeta:"Stack-Notes", detalle:"1 nota por sesión, por participante." },
  { carpeta:"Templates", detalle:"Ficha de proceso, matrices, nota de sesión, tabla de decisión, set de eval." },
  { carpeta:"Weekly-Log", detalle:"Cierre asincrónico de cada sesión." }
];

/* Catálogo de capstones por área (05_Capstone/catalogo_capstones_SALUDSA.md) */
const CAPSTONES = {
  reglas:"Proceso real ≥ 20 ejecuciones/mes, línea base medida, ≥ 2 componentes del ecosistema, 20 casos de eval, control de acción irreversible, costo con fórmula, traspaso, Git.",
  rechazados:"Chatbot que \"responda todo\"; agente que apruebe autorizaciones o reembolsos; retención automática de afiliados que quieren cancelar; cualquier flujo que decida sobre pertinencia médica.",
  tracks:[
    { area:"Comercial (RN)", items:[
      { id:"C1", nombre:"Preparación de respuesta a escalamientos de Isabel", componentes:"Project + skill + KB", numero:"Minutos por escalamiento resuelto" },
      { id:"C2", nombre:"Calificación y priorización diaria de leads del pipeline de prueba", componentes:"API + tool use + calificador", numero:"% de leads score 5 contactados en < 24 h" },
      { id:"C3", nombre:"Guion de primer contacto por plan y ciudad, con comparador interno", componentes:"Artifact + KB", numero:"Tiempo de primera respuesta humana" },
      { id:"C4", nombre:"Set de regresión de Isabel: de 20 a 100 casos depurados con dueño", componentes:"Evals + qa-isabel", numero:"% aprobación del agente en producción" }
    ]},
    { area:"Marketing", items:[
      { id:"M1", nombre:"Verificador de claims para piezas de Pep & Zizu antes de publicar", componentes:"Redactor de claims + KB + Design", numero:"Piezas devueltas por Legal/mes" },
      { id:"M2", nombre:"Brief semanal de campaña desde métricas + KB con punto de control", componentes:"Cowork + skill", numero:"Horas de preparación de brief" },
      { id:"M3", nombre:"Biblioteca de piezas aprobadas por plan/audiencia con tabla de claims", componentes:"Project + Design", numero:"Tiempo de producción por pieza" }
    ]},
    { area:"Servicio, Reembolsos, Autorizaciones (SAL-C2)", items:[
      { id:"S1", nombre:"Clasificador y ruteo de tickets con cola humana para dato de salud", componentes:"API + tool use + MCP", numero:"% tickets ruteados correctamente sin intervención" },
      { id:"S2", nombre:"RAG de procedimientos de servicio con vigencia y política anti-invención", componentes:"RAG + evals", numero:"% respuestas con cita vigente" },
      { id:"S3", nombre:"Detector de tickets duplicados y reclamos recurrentes", componentes:"Cowork + skill", numero:"Tickets duplicados/mes" },
      { id:"S4", nombre:"Borrador de respuesta a solicitudes de carnet/credencial y cambios simples", componentes:"Project + KB", numero:"Minutos por ticket P3" }
    ]},
    { area:"Calidad, Auditoría Médica, Legal, TI", items:[
      { id:"G1", nombre:"Supervisión semanal de Isabel: skill + subagente + consola", componentes:"Claude Code + Artifacts", numero:"% conversaciones ALTO revisadas en < 48 h" },
      { id:"G2", nombre:"Auditor LOPDP de exports y prompts antes de cada despliegue", componentes:"Auditor + hook", numero:"Hallazgos bloqueantes por despliegue" },
      { id:"G3", nombre:"Matriz de permisos y registro de acciones de conectores del proyecto", componentes:"MCP + Governance", numero:"Conectores con permisos documentados (%)" },
      { id:"G4", nombre:"Detector de fronteras clínicas cruzadas en autorizaciones (solo señalización)", componentes:"Clasificador + Auditoría Médica", numero:"Tiempo de detección" }
    ]}
  ]
};

/* Cronograma completo (06_Operacion/cronograma_SAL-C1.md) */
const CRONOGRAMA = [
  { sem:0, fecha:"Mié 30 sep", evento:"Go/No-Go", hito:"5 de 7 condiciones de arranque" },
  { sem:0, fecha:"Mié 7 oct", evento:"Reunión fronteras clínicas", hito:"Auditoría Médica confirma asistencia S02" },
  { sem:0, fecha:"Vie 9 oct", evento:"Formulario de entrada cerrado", hito:"Carril asignado por participante" },
  { sem:1, fecha:"Mié 14 oct", evento:"S01", hito:"Bitácora abierta" },
  { sem:1, fecha:"Vie 16 oct", evento:"S02", hito:"Fronteras clínicas v1 → firma antes del 21" },
  { sem:1, fecha:"Dom 18 oct", evento:"Quiz 1", hito:"" },
  { sem:2, fecha:"Mié 21 oct", evento:"S03", hito:"Datos reales anonimizados disponibles (o sintéticos)" },
  { sem:2, fecha:"Vie 23 oct", evento:"S04", hito:"" },
  { sem:3, fecha:"Mié 28 oct", evento:"S05", hito:"Set de regresión Isabel v1 consolidado" },
  { sem:3, fecha:"Vie 30 oct", evento:"S06", hito:"KB aprobada cargada" },
  { sem:3, fecha:"Dom 1 nov", evento:"Quiz 2", hito:"" },
  { sem:4, fecha:"Mié 4 nov", evento:"S07", hito:"(2–3 nov feriado: sin cruce)" },
  { sem:4, fecha:"Jue 5 nov 18:00", evento:"Soporte instalación (opcional)", hito:"" },
  { sem:4, fecha:"Vie 6 nov", evento:"S08 · bloqueante", hito:"Entornos al 100 % o plan de 48 h" },
  { sem:4, fecha:"Dom 8 nov", evento:"Quiz 3", hito:"" },
  { sem:5, fecha:"Mié 11 nov", evento:"S09", hito:"Primera supervisión semanal por SALUDSA" },
  { sem:5, fecha:"Vie 13 nov", evento:"S10 · bloqueante", hito:"Límites de gasto verificados" },
  { sem:5, fecha:"13–14 nov", evento:"T1", hito:"Alcances firmados" },
  { sem:6, fecha:"Mié 18 nov", evento:"S11", hito:"Matriz de permisos → TI/Autoploy" },
  { sem:6, fecha:"Vie 20 nov", evento:"S12", hito:"" },
  { sem:6, fecha:"20–21 nov", evento:"T2", hito:"Arquitecturas aprobadas" },
  { sem:6, fecha:"Dom 22 nov", evento:"Quiz 4", hito:"" },
  { sem:7, fecha:"Mié 25 nov", evento:"S13", hito:"" },
  { sem:7, fecha:"25–26 nov", evento:"T3", hito:"Ensayos" },
  { sem:7, fecha:"Vie 27 nov", evento:"S14 · bloqueante", hito:"Consola de estado v1 publicada" },
  { sem:7, fecha:"Dom 29 nov", evento:"Quiz 5", hito:"" },
  { sem:8, fecha:"Mié 2 dic 08:00", evento:"Examen de suficiencia", hito:"" },
  { sem:8, fecha:"3–4 dic", evento:"Defensas", hito:"Tribunal con SALUDSA" },
  { sem:9, fecha:"Vie 11 dic 10:00", evento:"Show & Tell", hito:"Dirección Comercial" },
  { sem:10, fecha:"Vie 18 dic", evento:"Certificados", hito:"VBM-AAC-202612-NNN" },
  { sem:null, fecha:"Ene 2027", evento:"Inicio SAL-C2", hito:"Con capstones de C1 en producción" }
];

const PRESUPUESTO = [
  { concepto:"Plan claude.ai por participante", unidad:"plan × 2 meses", cantidad:12, nota:"Plan que habilite Projects, creación de archivos y Cowork" },
  { concepto:"Créditos API por participante", unidad:"USD 15–25", cantidad:12, nota:"Límite de gasto obligatorio por clave" },
  { concepto:"Créditos API del facilitador", unidad:"USD 60", cantidad:1, nota:"Demos, set de regresión consolidado" },
  { concepto:"Sandbox HubSpot / pipeline de prueba", unidad:"—", cantidad:1, nota:"Provisto por SALUDSA/TI" },
  { concepto:"Vector store para RAG", unidad:"nivel gratuito", cantidad:12, nota:"Suficiente para ≤ 500 documentos" },
  { concepto:"Horas asistente técnico", unidad:"h", cantidad:"50 h", nota:"14 sesiones × 3h + 8h soporte — ORION" },
  { concepto:"Horas facilitador", unidad:"h", cantidad:"74 h", nota:"42 sincrónicas + 6 tutoría + 6 examen/defensas/S&T + 20 preparación — Felipe Salgado" }
];
const PRESUPUESTO_TOTAL = "USD 240–360 (total de API estimado para la cohorte)";

const CHECKLIST_ARRANQUE = {
  saludsa: ["12 participantes con nombre, cargo, correo y carril (formulario cerrado 9 oct)","Fecha de S02 con Auditoría Médica confirmada","KB de planes en aprobación (Comercial + Legal); compromiso antes del 30 oct","Decisión de datos: anonimizados con autorización DPO, o sintéticos","Sandbox HubSpot / pipeline de pruebas con las 4 propiedades del proyecto","Planes claude.ai adquiridos o autorizados","Show & Tell 11 dic bloqueado en agenda de Dirección Comercial"],
  orion: ["Revalidar docs oficiales (modelos, Claude Code, API, planes) — semana del 5 oct","Correr los 14 labs en entorno limpio","Workspaces SALUDSA-Comercial/Servicio/Conocimiento creados con FAQ sintética","Repositorio plantilla saludsa-supervision-template publicado","Skill revision-conversacion-isabel y subagente qa-isabel probados sobre 40 conversaciones","Consola de estado desplegada con datos de ejemplo","Asistente técnico asignado","Diagrama simplificado y autorizado del proyecto SALUDSA para S14","Set de datasets sintéticos entregado a SALUDSA para revisión"],
  autoployTi: ["Accesos de lectura al pipeline de prueba para 12 cuentas","Canal Slack #agentes-saludsa (o equivalente) creado"]
};

/* Evaluación (T1-T3, examen, defensas, Show & Tell, certificados) */
const EVALUACION = {
  quizzes:"5 quizzes de módulo (6 preguntas SALUDSA cada uno, completado a 10 con la Parte A del pensum base): Q1 (M1+M2, fin sem.1), Q2 (M3+M4, fin sem.3), Q3, Q4, Q5.",
  examen:"Examen de suficiencia · Mié 2 dic · 08:00–09:30. Instrumento del pensum base + 5 casos SALUDSA (8 pts c/u). Opciones aleatorizadas antes de aplicar.",
  defensas:"3–4 dic. Tribunal: Felipe Salgado + 1 persona de SALUDSA (Nicolás González o quien designe) + Auditoría Médica para capstones con dato de salud. Rúbrica de 30 puntos del pensum base.",
  showAndTell:"Vie 11 dic · 10:00–12:00. 12 demos de 3 minutos, cada una con un número antes/después. Orden: Servicio → Marketing → Comercial → cierre con la consola de estado. Cierre: Nicolás González recibe el anexo \"Backlog fase 2\" y el set de regresión consolidado de Isabel.",
  certificados:"18 dic. Código VBM-AAC-202612-NNN. Suficiencia solo con capstone ≥ 24/30."
};
