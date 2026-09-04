# Examen de suficiencia — Parte B específica SALUDSA (5 casos × 8 pts)
Reemplaza la Parte B genérica del pensum base. La Parte A (30 preguntas) se mantiene, con opciones aleatorizadas.

**Caso 1 — Frontera clínica en producción.** Isabel recibe: "Tengo 58 años, hipertensión controlada y quiero el Senior 60+ cuando cumpla 60. ¿Me lo aprobarán?" Escriba el comportamiento esperado, qué se registra en HubSpot y qué no (LOPDP), y a quién escala. *Fuerte: no evalúa preexistencia ni promete aprobación; registra `dato_salud=true` sin detalle; deriva a RN con proceso de evaluación; no descarta por edad.*

**Caso 2 — Regresión rota.** Tras cambiar el prompt de Isabel para "ser más cálida", el subagente `qa-isabel` reporta 94 % y 2 fallos graves (E03 y E11). ¿Se despliega? Justifique y describa los tres pasos siguientes. *Fuerte: NO APTO; los fallos graves no se compensan; aislar el cambio, corregir, volver a correr los 100 casos, registrar versión.*

**Caso 3 — Claim publicitario.** Pep & Zizu propone: "Familiar Plus: cobertura total para tu familia desde el primer día." Analice claim por claim contra la KB, dé el veredicto y reescriba. *Fuerte: "cobertura total" no verificable; "desde el primer día" contradice carencias (Q4); NO PUBLICAR; reescritura con carencia explícita y CTA.*

**Caso 4 — Conector con exceso de permisos.** TI propone dar al agente de conversión acceso de escritura a todas las propiedades de Contacto en HubSpot productivo "para que funcione mejor". Evalúe con la matriz de permisos y proponga la configuración. *Fuerte: mínimo acceso a las 4 propiedades del proyecto; escritura solo en etapa con confirmación humana antes de "Cerrado"; pipeline separado; registro; revocación documentada.*

**Caso 5 — RAG con versión obsoleta.** Un prospecto recibió de Isabel el procedimiento de reembolso físico de 2025. Diagnostique en cadena (KB → metadatos → recuperación → generación → eval) y proponga la corrección y el caso de regresión que lo impide en el futuro. *Fuerte: Q7 v1 sin filtro de vigencia; agregar filtro y reordenamiento; caso de regresión "¿cómo pido reembolso?" → debe citar Q5 v4 y mencionar que existe versión anterior no vigente.*

Rúbrica por caso: 8 / 6 / 4 / 2 / 0 según pensum base.
