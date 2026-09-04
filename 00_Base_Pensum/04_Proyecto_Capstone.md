# Proyecto Capstone
## Automatización y Agentes de IA con Claude — VBM-AAC-48

---

## 1. Encargo

Entregar **una automatización funcionando sobre un proceso real de una organización real**, con documentación, controles de riesgo y medición contra una línea base.

No se acepta: prototipo que solo funciona en la demostración, proceso ficticio, ni "propuesta de automatización". El sistema tiene que correr.

**Peso:** 30 % de la nota final. **Mínimo para certificado de suficiencia: 24/30.**

---

## 2. Requisitos obligatorios

| # | Requisito | Verificación |
|---|---|---|
| 1 | Proceso real con ≥ 20 ejecuciones al mes | Ficha del Lab 01 + confirmación del responsable del proceso |
| 2 | Línea base medida antes de automatizar | Minutos por ejecución, tasa de error o retrabajo actual |
| 3 | Al menos dos componentes del ecosistema integrados | Ejemplos: Claude Code + MCP, API + RAG, Project + skill + conector |
| 4 | Set de evaluación de ≥ 20 casos con resultados | Tabla de acierto, antes y después |
| 5 | Control de acción irreversible | Aprobación humana nombrada con cargo |
| 6 | Costo mensual estimado con fórmula | Volumen × tokens × precio, más costos de plan |
| 7 | Documentación de traspaso | Alguien que no es el autor puede operarlo |
| 8 | Repositorio versionado | Mínimo 10 commits con historia real |

---

## 3. Cronograma e hitos

| Hito | Semana | Entrega | Bloqueante |
|---|---|---|---|
| H1 — Alcance | 5 (bloque T1) | Ficha de proceso, línea base medida, alcance de una página | **Sí.** Sin H1 aprobado no continúa |
| H2 — Arquitectura | 6 (bloque T2) | Diagrama, componentes, modos de fallo, costo estimado | **Sí** |
| H3 — Sistema funcionando | 7, día 3 | Repositorio con el sistema corriendo | No |
| H4 — Evaluación | 7, día 5 | 20 casos medidos, comparación con línea base | No |
| H5 — Defensa | Hasta 10 días post-S14 | Presentación de 20 minutos | **Sí** |

**Alcance máximo permitido:** un proceso, un flujo, un entregable. La causa número uno de reprobación es un alcance de tres procesos que no termina ninguno. El tutor tiene autoridad para recortar el alcance en H1 y debe usarla.

---

## 4. Entregables

```
/capstone/
  README.md                → qué hace, cómo se instala, cómo se opera
  01_proceso_y_linea_base.md
  02_arquitectura.md       → diagrama + justificación + modos de fallo
  03_seguridad_y_datos.md  → clasificación, controles, aprobaciones
  04_evaluacion/
      casos.csv            → 20 casos con salida esperada
      resultados_v1.md
      resultados_final.md
  05_costo.md              → fórmula, volumen, estimado mensual
  06_traspaso.md           → quién opera, qué revisa, qué hacer si falla
  /src o /config           → el sistema
```

`README.md` debe permitir que una persona ajena al proyecto lo ponga en marcha sin preguntar nada. Ese es el criterio, y se prueba: el evaluador intenta seguirlo.

---

## 5. Rúbrica de calificación (30 puntos)

| Dimensión | Puntos | 0 | 2 | 4 | 6 |
|---|---|---|---|---|---|
| **D1. Realidad del problema** | 6 | Proceso inventado | Proceso real sin línea base | Línea base estimada | Línea base medida con método y volumen verificados |
| **D2. Funcionamiento** | 6 | No corre | Corre con intervención manual constante | Corre de punta a punta con supervisión | Corre de punta a punta, incluyendo casos límite |
| **D3. Evaluación** | 6 | Sin medición | Menos de 20 casos o sin criterio | 20 casos medidos | 20 casos, comparación con línea base y análisis de fallos |
| **D4. Seguridad y control** | 6 | Sin controles | Controles mencionados | Controles implementados | Controles implementados, con aprobación humana nombrada y trazabilidad |
| **D5. Traspaso y costo** | 6 | Ninguno | Uno de los dos, incompleto | Ambos presentes | Documentación operable por un tercero y costo con fórmula verificable |

**Escala:** 27–30 sobresaliente · 24–26 aprobado · 18–23 reenvío con una oportunidad · < 18 no aprueba.

**Penalizaciones automáticas**
- Credencial expuesta en el repositorio: −6 puntos.
- Datos personales reales sin anonimizar en los entregables públicos: −6 puntos.
- Acción irreversible sin control humano: −6 puntos.

---

## 6. Defensa (20 minutos)

| Bloque | Minutos | Contenido |
|---|---|---|
| 1 | 3 | El proceso, quién lo sufre, la línea base en números |
| 2 | 5 | Demostración en vivo del sistema, incluyendo un caso límite |
| 3 | 4 | Arquitectura y por qué esa y no una más simple |
| 4 | 3 | Evaluación: qué mejoró, qué no, con datos |
| 5 | 5 | Preguntas del tribunal |

**Preguntas obligatorias del tribunal** (se hacen a todos):
1. ¿Qué pasa cuando el sistema se equivoca y nadie lo nota?
2. ¿Cuánto cuesta al mes si el volumen se triplica?
3. Si usted se va mañana, ¿quién lo opera y con qué documento?

Una demostración que falla en vivo no penaliza si el participante diagnostica el fallo correctamente en el momento. Se evalúa criterio, no suerte.

---

## 7. Ejemplos de alcance aprobable

| Proceso | Componentes | Por qué funciona como capstone |
|---|---|---|
| Clasificación y ruteo de tickets de soporte | API + tool use + eval | Volumen alto, criterio binario, medición limpia |
| Extracción de datos de facturas de múltiples formatos | API + salida estructurada + validación | Línea base fácil de medir en minutos |
| Respuesta a licitaciones con base documental propia | RAG + Project + skill | Demuestra recuperación evaluada y citación |
| Revisión previa de contratos contra política interna | RAG + subagente + aprobación humana | Fuerza el control de acción irreversible |
| Informe semanal de operaciones desde múltiples fuentes | MCP + Cowork + skill | Demuestra integración real de sistemas |
| Onboarding de personal: generación y verificación de documentos | Claude Code + skill + hooks | Repetitivo, con control de calidad automatizable |
| Curación y publicación de contenido con validación de marca | Project + Design + eval de marca | Criterio de marca convertido en eval medible |

## 8. Alcances rechazados de antemano

- "Un chatbot que responda todo sobre la empresa" — sin proceso, sin línea base, sin evaluación posible.
- "Un agente que maneje mis redes sociales" — acción irreversible pública sin control viable en 7 semanas.
- Cualquier caso clasificado como **no apto** en el Lab 02.
- Procesos con datos personales sensibles sin autorización escrita del responsable de datos de la organización.

---

## 9. Declaración de autoría (obligatoria para certificar)

```
Declaro que el proyecto presentado corresponde a un proceso real de
_______________________________ y que la implementación fue realizada por mí.

Uso de IA en la elaboración: [ ] Sí, descrito en 06_traspaso.md  [ ] No

Autorización de datos: cuento con autorización del responsable del proceso
para usar los datos incluidos, y los datos personales fueron anonimizados.

Nombre: ______________________  Firma: ______________  Fecha: __________
```
