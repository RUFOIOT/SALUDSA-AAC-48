# Kit del instructor y certificación
## Automatización y Agentes de IA con Claude — VBM-AAC-48

---

## 1. Checklist previo a la cohorte (T-14 días)

| Días antes | Tarea | Responsable |
|---|---|---|
| T-14 | Revalidar documentación oficial: modelos vigentes, instalación de Claude Code, planes de claude.ai. Actualizar la tabla de modelos de S01 | Instructor |
| T-14 | Verificar que cada laboratorio corre de punta a punta en un entorno limpio | Instructor |
| T-10 | Enviar requisitos técnicos y formulario de diagnóstico de entrada | Coordinación |
| T-7 | Confirmar planes/licencias de los participantes | Coordinación |
| T-5 | Sesión de soporte de instalación opcional (60 min) para Node.js, Git y terminal | Asistente técnico |
| T-3 | Preparar el set de documentos de respaldo para el lab RAG, por si un participante no tiene datos propios | Instructor |
| T-2 | Publicar el repositorio plantilla de la cohorte | Instructor |
| T-1 | Verificar sala, grabación, permisos de compartir pantalla | Coordinación |

**Regla de revalidación:** la documentación de producto cambia entre cohortes. Si el instructor no revisó las páginas oficiales en los últimos 14 días, no dicta S01, S08 ni S10.

- Claude Code: https://docs.claude.com/en/docs/claude-code/overview
- API: https://docs.claude.com/en/api/overview
- claude.ai: https://support.claude.com

---

## 2. Formulario de diagnóstico de entrada

1. ¿Qué sistema operativo usa y tiene permisos de instalación?
2. ¿Ha usado la terminal alguna vez? (nunca / alguna vez / a diario)
3. ¿Programa? (no / algo / sí, lenguaje: ___)
4. ¿Qué proceso de su trabajo repite más veces al mes y cuánto le toma cada vez?
5. ¿Tiene autorización para usar datos de su organización en ejercicios de clase?
6. ¿Qué espera poder hacer en 7 semanas que hoy no puede?

La respuesta 4 se usa para asignar carril (técnico/operador) y para orientar el capstone desde S01. La 5 determina si el participante necesita el set de datos de respaldo.

---

## 3. Conducción del aula online

**No negociable en pantalla compartida**
- Terminal y editor con tipografía grande. Mínimo 18 pt para código, 20 pt en diagramas.
- Tema de alto contraste.
- Un control de zoom a mano para acercarse a la línea que se está explicando.
- Nada de leer código de tamaño normal "porque ya lo tienen en el repositorio".

**Ritmo**
- Ningún bloque expositivo supera 40 minutos sin que alguien más escriba.
- Cada laboratorio guiado avanza al ritmo del tercero más lento, no del primero.
- El asistente técnico atiende bloqueos en sala paralela; la clase no se detiene por una instalación.

**Grabación**
- Se graba y se publica dentro de las 24 horas.
- La grabación no reemplaza asistencia. La asistencia mide participación en laboratorio, y eso no se recupera viendo un video.

---

## 4. Contingencias frecuentes

| Situación | Respuesta |
|---|---|
| Un participante no logra instalar el entorno en S08 | Sala paralela con asistente. Si no se resuelve en 48 h, pasa a carril operador con entorno provisto. Lab 08 es bloqueante: hay que resolverlo |
| Un participante no tiene datos propios para el lab RAG | Set de respaldo de 25 documentos institucionales anonimizados |
| Alguien quema su presupuesto de API en el Lab 10 | Revisar el bucle, revisar tokens máximos, recortar contexto. Documentarlo: es material de clase para S14 |
| Un capstone se va de alcance en H1 | El tutor recorta. No es negociable. Documentar el alcance original como "fase 2" |
| Un participante quiere automatizar un caso clasificado no apto | Se rechaza en H1 con la justificación de la política de uso por escrito |
| Falla la demostración en vivo del instructor | Se diagnostica en voz alta. Es la mejor clase de la semana si se hace bien |
| Rotación: alguien pierde 3 sesiones seguidas | Reunión de continuidad. Con 3 ausencias ya no alcanza el 80 %: se le informa que va a Constancia, no a Certificado |

---

## 5. Guía rápida por sesión (para el instructor)

| Sesión | Riesgo principal | Antídoto |
|---|---|---|
| S01 | Caer en filosofía sobre la IA | Anclar todo en el proceso que trajo cada participante |
| S02 | Volverlo un discurso moral | Hacer que clasifiquen sus propios casos, con consecuencias reales |
| S03 | Que nadie encuentre fallos | Exigir 2 casos límite diseñados para romper |
| S04 | Prompts largos y ceremoniosos | Mostrar un prompt malo largo perdiendo contra uno corto estructurado |
| S05 | Que declaren la salida esperada después de ver el resultado | Se declara antes, en el archivo, con marca de tiempo |
| S06 | Quedarse en tour de producto | Cada función se usa sobre el caso propio, no sobre un ejemplo |
| S07 | Delegar tareas triviales | Exigir mínimo 3 pasos encadenados |
| S08 | Media clase atascada instalando | Sesión de soporte T-5 y sala paralela |
| S09 | Skills que nunca se activan | Ejercicio dedicado de reescritura de descripciones |
| S10 | Costos descontrolados | Límite de gasto verificado antes de empezar el laboratorio |
| S11 | Servidor MCP de juguete | Exigir una herramienta de escritura con confirmación |
| S12 | Copiar la fragmentación del ejemplo | Exigir justificación escrita de la estrategia |
| S13 | Métricas cosméticas | Exigir las 3 preguntas sin respuesta en la base |
| S14 | Multi-agente por moda | Preguntar siempre: ¿por qué no un solo agente? |

---

## 6. Emisión de la credencial

### 6.1 Tipos de credencial

| Credencial | Condición | Texto de la línea de resultado |
|---|---|---|
| Certificado de Suficiencia | Nota ≥ 80, asistencia ≥ 80 %, capstone ≥ 24/30, labs bloqueantes aprobados, declaración firmada | "por haber aprobado satisfactoriamente las evaluaciones de la especialización" |
| Constancia de Participación | Asistencia ≥ 80 % sin cumplir alguna condición de suficiencia | "por haber participado en la especialización, con una duración de 48 horas académicas" |

La distinción se sostiene. Emitir un certificado de suficiencia a quien no aprobó el capstone destruye el valor de todos los demás certificados emitidos.

### 6.2 Estructura del código de verificación

```
VBM-AAC-AAAAMM-NNN
 │   │    │      └── correlativo del participante en la cohorte (001–999)
 │   │    └───────── año y mes de emisión
 │   └────────────── código del programa (Automatización y Agentes con Claude)
 └────────────────── emisor (Vibramente)

Ejemplo: VBM-AAC-202611-007
```

Cada código se registra en el libro de emisiones y resuelve en una página pública de verificación con: nombre, programa, horas, fechas del periodo, tipo de credencial y estado (vigente / revocada). Sin página de verificación, el código es decoración.

### 6.3 Texto del certificado (plantilla)

```
[Identidad visual Vibramente / ORION AI Strategy — Eight Labs]

CERTIFICADO DE SUFICIENCIA

Vibramente / ORION AI Strategy otorga el presente a:

                    [NOMBRE COMPLETO]

Por completar con éxito el programa de especialización:

        AUTOMATIZACIÓN Y AGENTES DE IA CON CLAUDE

Por haber aprobado satisfactoriamente las evaluaciones de la
especialización, donde estudió los fundamentos de los modelos de
lenguaje y el marco de seguridad de Anthropic, así como las
capacidades y limitaciones de Claude verificadas mediante pruebas
propias. Desarrolló competencias en el ecosistema Claude (Claude.ai,
Claude Code, Claude Design, Claude Cowork, MCP y API), prompt
engineering avanzado con evaluación medida, estrategias de RAG con
métricas de recuperación, y arquitecturas multi-agente con skills y
subagentes, aplicándolas a la automatización de un proceso real en un
entorno organizacional. La especialización se llevó a cabo del
[FECHA INICIO] al [FECHA FIN], con una duración de 48 horas académicas.

_______________________          _______________________
Felipe Salgado                    [NOMBRE INSTRUCTOR]
Director                          Instructor

[CIUDAD], [FECHA]                 Código: VBM-AAC-AAAAMM-NNN
                                  Verificación: [URL]
```

**Advertencia:** no replicar identidad visual, sellos, escudos ni marcas de terceros. El certificado debe llevar exclusivamente la marca del emisor y las de socios con acuerdo escrito vigente.

### 6.4 Libro de emisiones (campos obligatorios)

| Campo | Ejemplo |
|---|---|
| Código | VBM-AAC-202611-007 |
| Nombre completo | — |
| Documento de identidad | — |
| Cohorte | 2026-C3 |
| Periodo | 09/11/2026 – 27/12/2026 |
| Horas | 48 |
| Nota final | 87/100 |
| Capstone | 26/30 |
| Asistencia | 13/14 |
| Tipo | Suficiencia |
| Estado | Vigente |
| Emitido por | — |
| Fecha de emisión | — |

Retención del expediente (acta, capstone, declaración de autoría): 5 años. Es lo que permite responder si un empleador pide verificación en 2029.

### 6.5 Revocación

Se revoca una credencial emitida cuando se comprueba fabricación de datos de evaluación o suplantación en el capstone. La revocación se registra en el libro, cambia el estado en la página de verificación y se notifica por escrito al titular.

---

## 7. Correo de emisión (plantilla)

**Asunto:** Certificado de Suficiencia — Automatización y Agentes de IA con Claude

```
[Nombre]:

Adjunto tu Certificado de Suficiencia del programa Automatización y
Agentes de IA con Claude, 48 horas académicas.

Código de verificación: VBM-AAC-AAAAMM-NNN
Verificación pública: [URL]

Resultado: [nota]/100 · Capstone: [x]/30 · Asistencia: [x]/14

Tu proyecto — [nombre del capstone] — redujo [métrica] de [línea base]
a [resultado]. Ese número es lo que vale explicar cuando alguien te
pregunte qué sabes hacer.

Tres cosas para las próximas dos semanas:
1. Poner el capstone en producción con el responsable del proceso.
2. Volver a correr tu set de evaluación en 30 días y comparar.
3. Revisar el costo real contra tu estimación.

Felipe Salgado
Vibramente / ORION AI Strategy
hola@vibramente.studio
```

---

## 8. Métricas de calidad del programa

Se revisan al cierre de cada cohorte. Si dos se incumplen, el programa se rediseña antes de la siguiente.

| Métrica | Objetivo |
|---|---|
| Tasa de finalización | ≥ 75 % |
| Tasa de suficiencia entre quienes finalizan | 60 – 80 % (por debajo el curso es inaccesible; por encima, laxo) |
| Capstones en producción a 30 días del cierre | ≥ 50 % |
| Laboratorios entregados a tiempo | ≥ 80 % |
| Participantes que reportan haber corrido su eval después del curso | ≥ 40 % |
| Incidentes de seguridad de datos en entregables | 0 |
