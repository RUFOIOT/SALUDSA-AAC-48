# Laboratorios
## Automatización y Agentes de IA con Claude — VBM-AAC-48

Cada laboratorio tiene un **criterio de aceptación binario**. Se aprueba o no se aprueba; no hay "casi". El participante puede reenviar un laboratorio una vez, dentro de los 7 días de la sesión.

Todos los entregables se suben al repositorio personal del participante con la estructura:

```
/lab-01-proceso-candidato/
/lab-02-matriz-riesgo/
...
/capstone/
```

---

## Lab 01 — Ficha de proceso candidato
**Sesión:** S01 · **Tiempo:** 55 min en aula + 30 min asincrónico

**Consigna:** identificar tres procesos de su organización y describirlos como candidatos a automatización.

Para cada proceso: quién lo ejecuta, con qué frecuencia, cuántos minutos toma hoy, qué entra, qué sale, qué decisión humana contiene, qué pasa si sale mal.

**Criterio de aceptación**
- Tres procesos, con tiempos actuales expresados en minutos medidos o estimados con método explícito.
- Al menos uno con volumen ≥ 20 ejecuciones al mes.
- Ninguno descrito con verbos vagos ("mejorar la comunicación" no es un proceso).

**Error común:** elegir el proceso más impresionante en lugar del más repetitivo. El capstone se gana con volumen, no con espectáculo.

---

## Lab 02 — Matriz de riesgo y controles
**Sesión:** S02 · **Tiempo:** 55 min

**Consigna:** clasificar los tres procesos del Lab 01 según el marco de seguridad y definir controles.

Tabla por proceso: datos involucrados (personales / de cliente / financieros / públicos), clasificación (apto / apto con controles / no apto), controles requeridos, quién aprueba antes de que el resultado salga de la organización.

**Criterio de aceptación**
- Clasificación justificada con referencia explícita a la política de uso, no a la intuición.
- Todo proceso con datos personales lleva al menos dos controles.
- Toda acción irreversible identificada lleva aprobación humana nombrada, con cargo.

---

## Lab 03 — Matriz de capacidad y fallo
**Sesión:** S03 · **Tiempo:** 55 min + 60 min asincrónico

**Consigna:** tomar una tarea del Lab 01, construir 10 casos de prueba reales, ejecutarlos y documentar los fallos.

**Entregable:** tabla con caso, salida esperada, salida obtenida, veredicto, tipo de fallo.

**Criterio de aceptación**
- 10 casos con datos reales de la organización (anonimizados si corresponde).
- Al menos 2 casos límite diseñados para romper el sistema.
- Porcentaje de acierto calculado y al menos un fallo analizado con su causa probable.

**Nota:** un participante que reporta 10/10 sin casos límite no aprobó el laboratorio; diseñó una prueba complaciente.

---

## Lab 04 — Prompt de producción v1
**Sesión:** S04 · **Tiempo:** 55 min

**Consigna:** escribir el prompt de la tarea del Lab 03 en estructura RCTFX.

**Criterio de aceptación**
- Los cinco componentes presentes y separados con delimitadores.
- Los datos variables entran en etiquetas, separados de la instrucción.
- Formato de salida especificado de forma verificable por máquina.
- Mínimo 2 ejemplos, uno de ellos difícil.
- Prompt versionado con fecha y autor.

---

## Lab 05 — Set de evaluación y comparación v1/v2
**Sesión:** S05 · **Tiempo:** 55 min + 60 min asincrónico

**Consigna:** ampliar a 20 casos, definir el criterio de éxito, correr v1, corregir el prompt, correr v2.

**Criterio de aceptación**
- 20 casos con salida esperada declarada antes de ejecutar.
- Criterio de éxito explícito y aplicable por un tercero sin consultar al autor.
- Tabla comparativa v1 vs. v2 con porcentaje de acierto, costo por caso y latencia media.
- Una hipótesis escrita sobre por qué v2 mejoró o no mejoró.

**El caso interesante:** si v2 empeora, el laboratorio se aprueba igual siempre que la hipótesis sea sólida. Se evalúa el método, no la suerte.

---

## Lab 06 — Espacio de trabajo reutilizable
**Sesión:** S06 · **Tiempo:** 55 min

**Consigna:** montar un Project con instrucciones, base de conocimiento y producir un artifact funcional.

**Criterio de aceptación**
- Instrucciones del proyecto en RCTFX, no un párrafo suelto.
- Mínimo 5 documentos de conocimiento cargados, con criterio declarado de por qué esos.
- Un artifact que un compañero pueda abrir y usar sin explicación adicional.
- Prueba con 3 consultas distintas documentadas.

---

## Lab 07 — Flujo de trabajo delegado
**Sesión:** S07 · **Tiempo:** 55 min

**Consigna:** delegar una tarea multipaso completa sobre archivos reales.

**Criterio de aceptación**
- Archivo(s) de entrada, entregable de salida y registro del proceso.
- Al menos 3 pasos encadenados.
- Un punto de control humano explícito, con criterio de qué se revisa.
- Comparación de tiempo: minutos manuales vs. minutos con el flujo, incluyendo el tiempo de revisión.

---

## Lab 08 — Primer flujo en Claude Code
**Sesión:** S08 · **Tiempo:** 55 min

**Consigna:** instalar, inicializar un repositorio, escribir el archivo de contexto del proyecto y completar una tarea real con el agente.

**Criterio de aceptación**
- Repositorio con Git inicializado y al menos 2 commits.
- Archivo de contexto que incluye: qué es este proyecto, convenciones, qué no debe tocar el agente.
- Una tarea completada, con el diff revisado y comentado por el participante.
- Evidencia de al menos una corrección al agente (el agente se equivocó y el participante lo redirigió).

**Carril operador:** carpeta de documentos en lugar de código. Mismo criterio.

---

## Lab 09 — Skill propia y subagente
**Sesión:** S09 · **Tiempo:** 55 min + 60 min asincrónico

**Consigna:** empaquetar un procedimiento repetido como skill y crear un subagente especializado.

**Criterio de aceptación**
- Skill con descripción que declara explícitamente **cuándo** debe activarse, probada con 3 disparos distintos y 1 caso donde correctamente no se activa.
- Procedimiento con pasos numerados y criterio de salida.
- Subagente con prompt propio y alcance de herramientas limitado, con justificación escrita de por qué ese aislamiento aporta.
- Todo versionado en el repositorio.

**Error común:** descripción genérica del tipo "ayuda con documentos". Nunca se activa cuando toca y se activa cuando no toca.

---

## Lab 10 — Llamada a la API con tool use
**Sesión:** S10 · **Tiempo:** 55 min + 60 min asincrónico

**Consigna:** script funcional que llame a la API, defina una herramienta, procese la llamada y devuelva el resultado.

**Criterio de aceptación**
- Clave de API fuera del código, en variable de entorno, y `.gitignore` correcto.
- **Límite de gasto configurado y captura de pantalla como evidencia.** Sin esto el laboratorio no se recibe.
- Una herramienta definida con esquema válido, invocada correctamente.
- Manejo del caso en que el modelo no llama la herramienta.
- Manejo de error de límite de tasa con reintento.
- Estimación de costo mensual con la fórmula visible: volumen × tokens × precio.

---

## Lab 11 — MCP en producción mínima
**Sesión:** S11 · **Tiempo:** 55 min + 60 min asincrónico

**Consigna, opción A (técnica):** construir un servidor MCP con dos herramientas, una de lectura y una de escritura, y conectarlo.

**Consigna, opción B (operador):** conectar dos conectores gestionados a un flujo real y documentar la superficie de exposición de datos.

**Criterio de aceptación, ambas opciones**
- Descripciones de herramienta que indican cuándo usarlas y qué devuelven.
- Mensajes de error accionables.
- La herramienta de escritura exige confirmación explícita antes de ejecutar.
- Matriz de permisos: qué dato queda accesible, para quién, y cómo se revoca.

---

## Lab 12 — Pipeline RAG con datos propios
**Sesión:** S12 · **Tiempo:** 55 min + 90 min asincrónico

**Consigna:** ingerir 20 o más documentos propios y montar recuperación funcional.

**Criterio de aceptación**
- 20+ documentos reales de la organización o del set provisto.
- Estrategia de fragmentación justificada por escrito, no la del ejemplo copiada sin pensar.
- Metadatos: mínimo fecha, área y versión.
- 5 consultas de prueba con los fragmentos recuperados visibles.
- Respuestas que citan el documento fuente.

---

## Lab 13 — Evaluación y corrección del RAG
**Sesión:** S13 · **Tiempo:** 55 min + 90 min asincrónico

**Consigna:** etiquetar 20 preguntas con su fragmento correcto, medir, diagnosticar, corregir, volver a medir.

**Criterio de aceptación**
- Set etiquetado de 20 preguntas, incluyendo 3 cuya respuesta **no está** en la base.
- Métricas de recuperación reportadas antes y después.
- Diagnóstico que distingue fallo de recuperación de fallo de generación.
- Una corrección implementada y su efecto medido.
- Las 3 preguntas sin respuesta en la base devuelven "no está en la base" y no una invención.

---

## Lab 14 — Arquitectura y control de riesgos
**Sesión:** S14 · **Tiempo:** 55 min

**Consigna:** diagramar el sistema del capstone y su plan de control.

**Criterio de aceptación**
- Diagrama con componentes, flujo de datos y puntos de decisión.
- Justificación de por qué multi-agente si lo es, o por qué un solo agente basta si lo es. Ambas respuestas son válidas; la injustificada no.
- Tabla de modos de fallo: qué puede salir mal, cómo se detecta, qué se hace.
- Límite de iteraciones y presupuesto por ejecución declarados en números.
- Punto de aprobación humana identificado con cargo responsable.

---

## Tabla de control del instructor

| Lab | Sesión | Peso en nota de labs | Bloqueante |
|---|---|---|---|
| 01 | S01 | 5 % | No |
| 02 | S02 | 5 % | No |
| 03 | S03 | 10 % | No |
| 04 | S04 | 5 % | No |
| 05 | S05 | 10 % | No |
| 06 | S06 | 5 % | No |
| 07 | S07 | 5 % | No |
| 08 | S08 | 10 % | Sí — sin entorno funcional no se puede seguir |
| 09 | S09 | 10 % | No |
| 10 | S10 | 10 % | Sí — el límite de gasto es condición de continuidad |
| 11 | S11 | 5 % | No |
| 12 | S12 | 10 % | No |
| 13 | S13 | 5 % | No |
| 14 | S14 | 5 % | Sí — es el plano del capstone |

Los tres laboratorios bloqueantes deben aprobarse para acceder a la defensa del capstone.
