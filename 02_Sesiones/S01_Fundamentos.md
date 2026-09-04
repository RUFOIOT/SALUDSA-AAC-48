# S01 · Fundamentos de LLM y sistemas agénticos
**Semana 1 · Mié 14 oct · 08:00–11:00 · Módulo 1 · Capa: (base) · Agente relacionado: los tres**

## Objetivo verificable
Al cerrar, cada participante explica en 90 segundos, con sus palabras, por qué Isabel puede inventar un precio si nadie se lo impide, y entrega la ficha de 3 procesos de su área.

## Preparación del facilitador
- Workspace `SALUDSA-Conocimiento` creado con la FAQ sintética cargada.
- Tres capturas reales (anonimizadas) de conversaciones de WhatsApp con prospectos, autorizadas por Nicolás.
- Tabla de modelos vigente (revalidada esta semana en https://docs.claude.com/en/api/overview).
- Roster con carril (técnico/operador) y proceso declarado en el formulario de entrada.

## Guion
| Min | Actividad | Guion del facilitador |
|---|---|---|
| 0–10 | Apertura | "Este programa no es sobre IA. Es sobre Isabel, Pep & Zizu y ustedes. Al terminar, ustedes los supervisan, no ORION." Presentación de 30 s por persona: nombre, área, el proceso que más repite al mes |
| 10–25 | Concepto: cómo genera texto un LLM | Demo: misma pregunta "¿cuánto cuesta el Familiar Plus para 4 personas?" tres veces con temperatura distinta. Se ve que **inventa un número distinto cada vez**. Frase clave: "no consulta, predice" |
| 25–40 | Ventana de contexto y degradación | Demo: conversación de 40 turnos donde la instrucción "nunca des precio" del turno 1 se pierde en el turno 38. Pizarra: qué cabe, qué se cae |
| 40–50 | Asistente → flujo → agente | Tabla de 3 niveles con Isabel como ejemplo: Isabel responde (asistente), Isabel consulta la KB (flujo), Isabel cambia la etapa en HubSpot (agente = riesgo). "Cada nivel arriba, un control más" |
| 50–100 | Lab guiado | Cada uno abre `SALUDSA-Conocimiento`, hace 5 preguntas de la FAQ y 2 que NO están. Registra cuándo el modelo dice "no sé" y cuándo inventa. Tabla compartida en pantalla |
| 100–110 | Pausa | |
| 110–165 | Lab autónomo — Lab 01 | Ficha de 3 procesos propios: quién, frecuencia/mes, minutos por ejecución, entrada, salida, decisión humana, qué pasa si sale mal. Plantilla `ficha_proceso.md` |
| 165–180 | Cierre | 3 fichas leídas en voz alta. Fila 1 de la bitácora: "Isabel predice; toda cifra debe venir de KB". Encargo: leer sección conceptual de la doc de API y el glosario |

## Vínculo con el proyecto SALUDSA
Las 36 fichas (12 × 3) forman el **backlog de automatizaciones fase 2**. Se depuran en T1 y se entregan a Nicolás como anexo del Show & Tell.

## Criterio del entregable (Lab 01)
3 procesos · minutos medidos o método explícito · al menos uno con ≥ 20 ejecuciones/mes · sin verbos vagos.

## Riesgos de facilitación
Los RN quieren hablar de ventas, no de tokens. Anclar cada concepto a una conversación real de WhatsApp. Si a los 25 min nadie ha visto un fallo del modelo en pantalla, la sesión va mal.
