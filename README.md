# SALUDSA-AAC-48 — Cohorte corporativa "Automatización y Agentes de IA con Claude"
**Cliente:** SALUDSA (CLI-001) · **Emisor:** Vibramente / ORION AI Strategy · **Facilitador:** Felipe Salgado · **v1.0 · 4 sep 2026**

Paquete completo para arrancar SAL-C1 el 14 de octubre de 2026. Combina el pensum de 48 h (certificación con suficiencia) con la estructura del AI Operator Cohort (6 capas, Obsidian, RCTFX, Show & Tell) y usa los agentes del proyecto SALUDSA — Isabel, Pep & Zizu y los subagentes HubSpot — como objeto de trabajo real.

## 🛰️ Student Hub (sitio publicado)

**[abre el Student Hub →](https://rufoiot.github.io/SALUDSA-AAC-48/)**

Consola interactiva del cohorte: navega las 14 sesiones en una línea de tiempo por semana, cada una con su objetivo verificable, guion minuto a minuto (barra proporcional + detalle), vínculo con el proyecto SALUDSA y criterio de entregable — fiel al contenido de `02_Sesiones/*.md`, sin datos inventados. Incluye además Misión (documento rector), Recursos (RCTFX/Datasets/Obsidian), Capstones, Evaluación y Operación (cronograma, presupuesto, checklist y la consola de estado de S14 embebida en vivo).

Código fuente del hub: `index.html` + `assets/` (`sessions-data.js`, `app.js`, `style.css`). Es un sitio estático sin build step — para editarlo, se modifica directamente y se publica hacia GitHub Pages (rama `main`, raíz del repo).

> Las "sesiones gráficas" pedidas se implementaron como este hub interactivo (cada sesión es una vista cinematográfica navegable) en vez de 14 archivos `.md` estáticos adicionales — mayor fidelidad visual sin duplicar la fuente de verdad en `02_Sesiones/`.

## Empieza aquí
1. `01_Programa/01_Programa_SALUDSA.md` — documento rector: adaptabilidad a medicina prepagada (confirmada con 3 condiciones), matriz regulatoria, mapa sesión → proyecto, calendario, roles, go/no-go.
2. `06_Operacion/checklist_arranque.md` — lo que SALUDSA, ORION y Autoploy deben tener listo.
3. `06_Operacion/comunicaciones.md` — correo de propuesta a Nicolás González listo para enviar.

## Estructura
```
00_Base_Pensum/        Pensum genérico de 48 h (programa, syllabus, labs, evaluación, capstone, kit instructor)
01_Programa/           Adaptación SALUDSA (documento rector)
02_Sesiones/           Formato + 14 guías de facilitador minuto a minuto + tutorías y Show & Tell
03_Recursos/
   RCTFX/              3 workspaces, 4 agentes, 1 skill, 1 subagente, política anti-invención
   Datasets/           6 datasets SINTÉTICOS (leads, conversaciones, tickets, eval Isabel, FAQ con metadatos, glosario)
   Plantillas/         Ficha de proceso, matrices LOPDP/permisos, set de eval, script API base, checklist de supervisión
   Obsidian_Vault/     7 carpetas del cohort + Agentes-SALUDSA (fronteras clínicas, set de regresión, bitácora)
04_Evaluacion/         5 casos de examen SALUDSA + 5 quizzes SALUDSA (complementan el pensum base)
05_Capstone/           Catálogo de 15 capstones pre-aprobados por área + brief de Show & Tell
06_Operacion/          Cronograma, presupuesto, checklist, comunicaciones, consola de estado (HTML)
```

## Lo que este paquete entrega al proyecto SALUDSA (no solo al curso)
| Entregable | Sesión | Destino |
|---|---|---|
| Fronteras clínicas firmadas como evals | S02 | Suite de regresión de Isabel |
| Set de regresión de Isabel (meta 100 casos) | S05 → S&T | ORION + SALUDSA |
| Skill de revisión + subagente QA | S09 | Supervisión semanal a cargo de SALUDSA |
| Matriz de permisos de conectores | S11 | TI SALUDSA + Autoploy + Legal |
| KB con versión/vigencia y política anti-invención | S12–S13 | Prompt de Isabel |
| Consola de estado de agentes | S14 | Dirección Comercial, cada lunes |

## Advertencias
- Todos los datos en `Datasets/` son ficticios; SALUDSA los sustituye por datos anonimizados bajo autorización del DPO.
- Revalidar documentación oficial (modelos, Claude Code, API, planes) la semana previa: https://docs.claude.com · https://support.claude.com
- Las referencias normativas (LOPDP, ley de medicina prepagada) se validan con Legal de SALUDSA en el go/no-go. El curso no sustituye asesoría legal.
- Sin KB aprobada, fronteras clínicas firmadas y autorización de datos, el programa se dicta con sintéticos y **no certifica suficiencia sobre los agentes reales**.
