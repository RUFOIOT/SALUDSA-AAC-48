# S11 · MCP: conectores gestionados y servidor propio — gobierno de accesos
**Semana 6 · Mié 18 nov · Módulo 7 · Capa: MCP Connectors · Agente relacionado: los tres subagentes HubSpot**

## Objetivo verificable
Opción A (técnico): servidor MCP con una herramienta de lectura y una de escritura con confirmación. Opción B (operador): 2 conectores conectados a un flujo real con **matriz de permisos por rol**. Ambos entregan la matriz.

## Preparación
- Sandbox de HubSpot o pipeline de pruebas (condición de arranque). Si no existe, se usa el simulador de S10.
- Plantilla `matriz_permisos_mcp.md`.
- Servidor MCP mínimo de referencia `mcp-saludsa-kb` (lee FAQ; escribe "nota de supervisión" con confirmación).

## Guion
| Min | Actividad | Guion |
|---|---|---|
| 0–10 | Apertura | 2 estimaciones de costo revisadas. Lista de sistemas que tocan los procesos del grupo |
| 10–25 | Qué resuelve MCP | Un protocolo en lugar de 10 integraciones. Servidor, herramientas, recursos, cliente. Demo: Claude leyendo la FAQ por MCP y consultando el pipeline de prueba de HubSpot |
| 25–40 | Diseño de herramientas para un modelo | Nombres explícitos, descripción que dice cuándo, errores que explican cómo corregir. Se comparan dos versiones de `buscar_lead` |
| 40–50 | El riesgo está en la escritura | `actualizar_etapa_lead` con confirmación explícita, registro y reversibilidad. Conexión con LOPDP: qué campos de Contacto ve cada rol. Las 4 propiedades personalizadas del proyecto SALUDSA como ejemplo real |
| 50–100 | Lab guiado | Todos: conectar Drive (KB) + el pipeline de prueba. Llenar la matriz de permisos: dato, quién, para qué, cómo se revoca. Técnico: levantar `mcp-saludsa-kb` y agregar una herramienta |
| 100–110 | Pausa | |
| 110–165 | Lab 11 | Opción A o B sobre el proceso propio. Herramienta de escritura con confirmación obligatoria |
| 165–180 | Cierre | Matriz de permisos consolidada del grupo en pantalla → **propuesta de gobierno de conectores del proyecto**. Bitácora. Encargo: reunir 20+ documentos de su área para RAG (o usar la KB aprobada) |

## Vínculo con el proyecto
La matriz consolidada se entrega a TI de SALUDSA y a Autoploy como **especificación de permisos** de los conectores HubSpot/Drive/Slack de los agentes. Es el documento que hoy no existe y que Legal va a pedir.

## Criterio (Lab 11)
Descripciones con "cuándo" y "qué devuelve" · errores accionables · escritura con confirmación · matriz de permisos con revocación.
