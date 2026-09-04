# S05 · Prompt engineering II: evals y regresión — el set de Isabel
**Semana 3 · Lun 19 oct · 16:00–18:00 · Módulo 4 · Capa: Agents · Agente relacionado: Isabel (P01)**

## Objetivo verificable
Cada participante entrega un set de 20 casos con criterio binario, corrido contra v1 y v2 de su prompt, con acierto, costo por caso y latencia. El grupo consolida el **set de regresión de Isabel**.

## Preparación
- `eval_isabel_20_casos.csv` como ejemplo de formato.
- Hoja compartida "Set de regresión Isabel — consolidado" con columnas: caso, entrada, esperado, fallo grave, autor, duplicado (S/N).
- Cuenta con caché de prompt demostrable (bloque de KB estable reutilizado).

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | 2 prompts v1 en pantalla |
| 10–25 | Qué es un eval | Casos + esperado declarado antes + criterio aplicable por un tercero + resultado registrado. Tres tipos de criterio (exacto, reglas, juez modelo) con ejemplo SALUDSA de cada uno. Sesgo del juez modelo: es generoso con respuestas largas |
| 25–40 | Regresión y versionado | Cambia el prompt o el modelo → se corre todo el set. Un prompt de Isabel es código. Se muestra un cambio "inocente" que rompe 3 casos de frontera clínica |
| 40–50 | Costo y latencia | Tokens de entrada/salida, caché sobre la KB de planes. Cálculo en pizarra: 3 000 conversaciones/mes × tokens × precio. Cada RN estima el costo de su propio prompt |
| 50–100 | Lab guiado | Se construye en vivo el set consolidado: cada participante aporta sus 3 mejores casos límite. Se deduplican. Se corre el prompt actual de Isabel (versión de laboratorio) contra los 20 primeros. Acierto en pantalla |
| 100–110 | Pausa | |
| 110–165 | Lab 05 | 20 casos propios, v1 vs v2, tabla con acierto, costo/caso, latencia media, hipótesis escrita |
| 165–180 | Cierre | Tres v2 que mejoraron, una que empeoró con buena hipótesis (se celebra igual). Bitácora: "Set de regresión Isabel v1: N casos únicos, acierto actual X %". Encargo: Quiz 2 |

## Vínculo con el proyecto
**Este es el entregable más valioso de la cohorte para ORION.** El set consolidado (meta: 100 casos únicos) se entrega al proyecto como suite de regresión oficial de Isabel y se corre en cada despliegue. El equipo de SALUDSA pasa a ser dueño del criterio de calidad de su agente.

## Criterio (Lab 05)
20 casos con esperado previo · criterio aplicable por tercero · tabla v1/v2 con acierto, costo, latencia · hipótesis.
