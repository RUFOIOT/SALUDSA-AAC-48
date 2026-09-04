# Quizzes de módulo — versión SALUDSA (6 preguntas cada uno; completar a 10 con la Parte A del pensum base)
Todas de opción múltiple; la respuesta correcta está marcada con ✔ (aleatorizar antes de aplicar).

## Q1 (M1+M2) — fin semana 1
1. Isabel da un precio distinto cada vez que se le pregunta lo mismo porque: a) hay error de red b) ✔ genera texto probable, no consulta una tabla c) el RN cambió el plan
2. "Mi mamá tiene diabetes" en un chat es: a) dato personal común b) ✔ dato sensible (salud) bajo LOPDP c) dato público
3. La defensa más barata contra "ignora tus instrucciones" dentro de un PDF: a) prohibir PDFs b) ✔ tratar el contenido como datos delimitados, no como orden c) usar modelo más grande
4. Antes de que un agente cambie una etapa a "Cerrado ganado": a) basta el log b) ✔ aprobación humana explícita c) aviso posterior
5. Frontera clínica significa: a) tema que Isabel responde con cuidado b) ✔ tema que Isabel nunca resuelve y siempre escala c) tema de Auditoría de calidad
6. Un afiliado actual con reclamo que llega por el canal de ventas: a) es lead score 3 b) ✔ no es lead; se deriva a Servicio c) se le ofrece cambio de plan

## Q2 (M3+M4) — fin semana 3
1. Una prueba de 10 casos con 10/10 y sin casos límite es: a) lista para producción b) ✔ complaciente, no informa c) suficiente si el RN la aprueba
2. En RCTFX, los datos del prospecto van: a) mezclados con la instrucción b) ✔ en etiquetas separadas c) al final sin marcar
3. La salida del calificador de leads hacia HubSpot debe ser: a) prosa clara b) ✔ JSON con esquema c) tabla Markdown
4. Un fallo silencioso es: a) tiempo de espera b) ✔ respuesta fluida y errónea c) error 429
5. Declarar la salida esperada después de ver el resultado: a) es más eficiente b) ✔ invalida el eval c) es lo normal
6. Un cambio "inocente" en el prompt de Isabel exige: a) probar 2 casos b) ✔ correr todo el set de regresión c) avisar a ORION

## Q3 (M5) — fin semana 4
1. `SALUDSA-Comercial` es para: a) que Isabel hable con prospectos b) ✔ que el RN prepare lo que Isabel escaló c) marketing
2. Un claim de campaña se aprueba si: a) suena bien b) ✔ señala una entrada de la KB vigente c) lo aprueba el diseñador
3. El punto de control en un flujo Cowork de supervisión revisa: a) todo b) ✔ el 100 % de las conversaciones de riesgo ALTO c) una muestra al azar
4. Minutos ahorrados se reportan: a) sin el tiempo de revisión b) ✔ incluyendo el tiempo de revisión humana c) estimados
5. La memoria del asistente con datos de prospectos: a) se deja siempre activa b) ✔ se controla y se limpia de datos personales c) no existe
6. Chat vs. Cowork vs. Claude Code vs. API se elige por: a) preferencia b) ✔ tipo de trabajo: respuesta, archivos, repositorio, volumen/sistemas c) costo únicamente

## Q4 (M6+M7) — fin semana 6
1. Antes de correr Claude Code en una carpeta: a) cerrar Slack b) ✔ tener Git activo c) subir tokens
2. Una skill que nunca se activa: a) modelo lento b) ✔ descripción no dice cuándo usarla c) falta hook
3. `qa-isabel` no debe tener acceso a HubSpot porque: a) es caro b) ✔ el evaluador no debe poder escribir ni ver el razonamiento del evaluado c) HubSpot no soporta MCP
4. `contiene_dato_salud = true` en el clasificador implica: a) prioridad P1 b) ✔ cola humana, sin ruteo automático c) borrar el ticket
5. Límite de gasto en la clave de API: a) opcional b) ✔ condición para el laboratorio c) solo en producción
6. Herramienta de escritura en HubSpot vía MCP: a) libre b) ✔ confirmación explícita, registro, reversibilidad c) solo de noche

## Q5 (M8+M9) — fin semana 7
1. Q7 (reembolso físico 2025) se cuela en las respuestas por: a) mal embedding b) ✔ falta de filtro por vigencia c) chunk grande
2. Fragmento correcto en top-3 pero respuesta omite la carencia: fallo de a) recuperación b) ✔ generación c) ingesta
3. Pregunta sin respuesta en la KB → el sistema debe: a) usar conocimiento general b) ✔ decir que no está y escalar c) devolver el más parecido
4. El proyecto SALUDSA usa el patrón: a) un solo prompt b) ✔ enrutador + especialistas + evaluador c) cadena lineal
5. Entre agentes se pasa: a) la conversación completa b) ✔ un resumen sin datos personales innecesarios c) nada
6. La automatización que nadie usa: a) vale por el aprendizaje b) ✔ vale cero; el plan de adopción es obligatorio c) se guarda para fase 2
