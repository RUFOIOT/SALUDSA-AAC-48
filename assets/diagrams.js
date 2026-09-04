/* ============================================================
   SALUDSA · AAC-48 — Biblioteca de diagramas SVG por sesión
   Un diagrama conceptual "insignia" por sesión (S01–S14) que
   ilustra el concepto central de esa clase, en el mismo lenguaje
   visual del hub (navy / gold / cyan / coral / green, line-art).
   Cada función devuelve un string SVG listo para insertar inline.
   ============================================================ */

const DIAGRAM_ICON = {
  S01: "🧠", S02: "🛡️", S03: "🎯", S04: "🧩", S05: "🔁",
  S06: "🗂️", S07: "🔀", S08: "🌱", S09: "⚙️", S10: "🔌",
  S11: "🕸️", S12: "📚", S13: "📈", S14: "🧭"
};

function svgWrap(inner, vb){
  return `<svg viewBox="${vb||'0 0 760 320'}" xmlns="http://www.w3.org/2000/svg" class="diagram-svg" role="img">${inner}</svg>`;
}
function dLabel(x,y,text,opts){
  opts = opts||{};
  const anchor = opts.anchor||"middle";
  const size = opts.size||13;
  const color = opts.color||"var(--mist)";
  const mono = opts.mono?` font-family="var(--f-mono)"`:"";
  const weight = opts.weight||"500";
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" fill="${color}" font-weight="${weight}"${mono}>${text}</text>`;
}

const DIAGRAMS = {

/* S01 — misma pregunta, tres respuestas distintas (predicción, no consulta) */
S01: () => svgWrap(`
  <rect width="760" height="320" fill="none"/>
  ${[0,1,2].map(i=>{
    const x = 60 + i*250;
    const vals = ["$142","$168","$119"];
    return `
    <rect x="${x}" y="40" width="200" height="64" rx="12" fill="var(--hull)" stroke="var(--line)"/>
    ${dLabel(x+100,68,"¿Cuánto cuesta el",{size:12})}
    ${dLabel(x+100,85,"Familiar Plus?",{size:12})}
    <line x1="${x+100}" y1="104" x2="${x+100}" y2="140" stroke="var(--line)"/>
    <circle cx="${x+100}" cy="150" r="10" fill="var(--gold)"/>
    ${dLabel(x+100,155,"IA",{size:10,color:"var(--void)",weight:"700"})}
    <line x1="${x+100}" y1="160" x2="${x+100}" y2="196" stroke="var(--line)"/>
    <rect x="${x+40}" y="196" width="120" height="50" rx="10" fill="var(--coral)" opacity=".13" stroke="var(--coral)"/>
    ${dLabel(x+100,227,vals[i],{size:22,color:"var(--coral)",mono:true,weight:"700"})}
    `;
  }).join("")}
  ${dLabel(380,290,"Misma pregunta · misma sesión · tres precios distintos — no consulta, predice",{size:12,color:"var(--cyan)"})}
`),

/* S02 — semáforo de riesgo */
S02: () => svgWrap(`
  ${["Apto","Apto con controles","No apto"].map((t,i)=>{
    const y = 40 + i*90;
    const colors = ["var(--green)","var(--gold)","var(--coral)"];
    return `
    <circle cx="70" cy="${y+30}" r="18" fill="${colors[i]}"/>
    <rect x="110" y="${y}" width="580" height="60" rx="10" fill="var(--hull)" stroke="var(--line)"/>
    ${dLabel(130,y+27,t,{anchor:"start",size:15,color:"var(--white)",weight:"700"})}
    ${dLabel(130,y+47,i===0?"Sin datos sensibles · reversible":i===1?"Dato personal · aprobador con cargo":"Diagnóstico, preexistencia, consejo clínico",{anchor:"start",size:11.5})}
    `;
  }).join("")}
`),

/* S03 — matriz alto rendimiento / falla, visible / silencioso */
S03: () => svgWrap(`
  <line x1="380" y1="20" x2="380" y2="300" stroke="var(--line)"/>
  <line x1="60" y1="160" x2="700" y2="160" stroke="var(--line)"/>
  ${dLabel(380,15,"RIESGO",{size:11,color:"var(--mist)"})}
  ${dLabel(20,165,"DESEMPEÑO",{size:11,color:"var(--mist)",anchor:"start"})}
  ${dLabel(200,90,"Rinde alto",{size:13,color:"var(--green)",weight:"700"})}
  ${dLabel(200,115,"Reescritura · clasificación",{size:11})}
  ${dLabel(560,90,"Rinde alto",{size:13,color:"var(--gold)",weight:"700"})}
  ${dLabel(560,115,"Extracción estructurada",{size:11})}
  ${dLabel(200,230,"Falla visible",{size:13,color:"var(--cyan)",weight:"700"})}
  ${dLabel(200,255,"Aritmética · conteo exacto",{size:11})}
  ${dLabel(560,225,"Falla silenciosa",{size:14,color:"var(--coral)",weight:"700"})}
  ${dLabel(560,250,"Respuesta fluida,",{size:11})}
  ${dLabel(560,265,"contenido inventado",{size:11})}
  <circle cx="560" cy="225" r="46" fill="var(--coral)" opacity=".08"/>
`),

/* S04 — RCTFX cinco bloques conectados */
S04: () => svgWrap(`
  ${["Rol","Contexto","Tarea","Formato","eXamples"].map((t,i)=>{
    const x = 40 + i*145;
    return `
    <rect x="${x}" y="120" width="120" height="80" rx="12" fill="var(--hull)" stroke="var(--gold)" stroke-width="1.5"/>
    ${dLabel(x+60,155,t.slice(0,1),{size:26,color:"var(--gold)",mono:true,weight:"700"})}
    ${dLabel(x+60,180,t,{size:11.5})}
    ${i<4?`<line x1="${x+120}" y1="160" x2="${x+145}" y2="160" stroke="var(--gold)" stroke-dasharray="3,3"/>`:""}
    `;
  }).join("")}
  ${dLabel(380,60,"Un prompt de producción, no una consulta de chat",{size:13,color:"var(--cyan)"})}
`),

/* S05 — ciclo de eval v1 -> medir -> v2 */
S05: () => svgWrap(`
  <circle cx="380" cy="160" r="110" fill="none" stroke="var(--line)" stroke-dasharray="4,4"/>
  ${[["v1",380,50],["Correr 20 casos",520,160],["Medir acierto",380,270],["v2",240,160]].map(([t,x,y],i)=>`
    <circle cx="${x}" cy="${y}" r="34" fill="var(--hull)" stroke="${i===0?'var(--gold)':i===3?'var(--green)':'var(--cyan)'}" stroke-width="2"/>
    ${dLabel(x,y+5,t,{size:12,color:"var(--white)",weight:"700"})}
  `).join("")}
  <path d="M410,60 A110,110 0 0,1 500,140" stroke="var(--mist)" fill="none" marker-end="url(#arrow)"/>
  <path d="M520,192 A110,110 0 0,1 410,262" stroke="var(--mist)" fill="none" marker-end="url(#arrow)"/>
  <path d="M350,268 A110,110 0 0,1 260,192" stroke="var(--mist)" fill="none" marker-end="url(#arrow)"/>
  <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--mist)"/></marker></defs>
  ${dLabel(380,20,"Un prompt de Isabel es código: cambia → se corre todo el set",{size:12,color:"var(--mist)"})}
`),

/* S06 — capas chat -> project -> artifact */
S06: () => svgWrap(`
  ${[["Chat suelto","respuesta genérica",40,"var(--mist-dim)"],["Project + KB","respuesta con versión",210,"var(--cyan)"],["Artifact","herramienta usable",400,"var(--gold)"]].map(([t,d,x,c],i)=>`
    <rect x="${x}" y="90" width="170" height="${100+i*30}" rx="10" fill="var(--hull)" stroke="${c}" stroke-width="1.5"/>
    ${dLabel(x+85,130,t,{size:14,color:c,weight:"700"})}
    ${dLabel(x+85,155,d,{size:11})}
  `).join("")}
  ${dLabel(380,270,"Más estructura → más control sobre la respuesta",{size:12,color:"var(--mist)"})}
`, "0 0 640 320"),

/* S07 — árbol de decisión chat/cowork/code/api */
S07: () => svgWrap(`
  <rect x="330" y="20" width="100" height="44" rx="8" fill="var(--hull)" stroke="var(--gold)"/>
  ${dLabel(380,47,"¿Qué necesito?",{size:12,color:"var(--gold)"})}
  ${[["Pregunta","Chat",70],["Trabajo c/archivos","Cowork",270],["Repositorio","Claude Code",470],["Volumen/sistemas","API",670]].map(([q,a,x])=>`
    <line x1="380" y1="64" x2="${x}" y2="120" stroke="var(--line)"/>
    ${dLabel(x,138,q,{size:11})}
    <rect x="${x-55}" y="150" width="110" height="46" rx="8" fill="var(--hull)" stroke="var(--cyan)"/>
    ${dLabel(x,178,a,{size:13,color:"var(--cyan)",weight:"700"})}
  `).join("")}
`),

/* S08 — flujo repo/contexto/agente */
S08: () => svgWrap(`
  ${[["📁 Carpeta","+ Git",70],["📝 Contexto","qué no tocar",270],["🤖 Agente","ejecuta tarea",470],["✅ Diff","revisado y commit",670]].map(([t,d,x],i)=>`
    <rect x="${x-70}" y="120" width="140" height="80" rx="10" fill="var(--hull)" stroke="var(--green)" stroke-width="1.5"/>
    ${dLabel(x,155,t,{size:14,weight:"700"})}
    ${dLabel(x,178,d,{size:11})}
    ${i<3?`<line x1="${x+70}" y1="160" x2="${x+130}" y2="160" stroke="var(--green)" stroke-dasharray="3,3"/>`:""}
  `).join("")}
`),

/* S09 — skills/subagentes/hooks/mcp */
S09: () => svgWrap(`
  ${[["MCP","da acceso","var(--capa-mcp)",100,90],["Skill","da procedimiento","var(--capa-agents)",320,90],["Subagente","da aislamiento","var(--capa-agents)",100,220],["Hook","verifica siempre","var(--coral)",320,220]].map(([t,d,c,x,y])=>`
    <rect x="${x}" y="${y}" width="240" height="90" rx="12" fill="var(--hull)" stroke="${c}" stroke-width="1.5"/>
    ${dLabel(x+120,y+38,t,{size:15,color:c,weight:"700"})}
    ${dLabel(x+120,y+60,d,{size:12})}
  `).join("")}
`, "0 0 660 340"),

/* S10 — anatomía de una llamada API */
S10: () => svgWrap(`
  ${["Mensaje","Modelo","¿Tool?","Ejecuta","Respuesta"].map((t,i)=>{
    const x = 40 + i*145;
    return `
    <rect x="${x}" y="130" width="120" height="60" rx="10" fill="var(--hull)" stroke="var(--gold)"/>
    ${dLabel(x+60,165,t,{size:12.5,weight:"700"})}
    ${i<4?`<line x1="${x+120}" y1="160" x2="${x+145}" y2="160" stroke="var(--gold)" marker-end="url(#a2)"/>`:""}
    `;
  }).join("")}
  <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--gold)"/></marker></defs>
  <path d="M405,190 Q470,240 535,190" stroke="var(--coral)" fill="none" stroke-dasharray="3,3"/>
  ${dLabel(470,250,"dato_salud=true → cola humana",{size:11,color:"var(--coral)"})}
`),

/* S11 — arquitectura MCP */
S11: () => svgWrap(`
  <rect x="30" y="130" width="150" height="70" rx="10" fill="var(--hull)" stroke="var(--white)"/>
  ${dLabel(105,170,"Cliente (Claude)",{size:12,weight:"700"})}
  <line x1="180" y1="165" x2="280" y2="165" stroke="var(--cyan)" marker-end="url(#a3)"/>
  ${dLabel(230,155,"MCP",{size:11,color:"var(--cyan)"})}
  <rect x="280" y="105" width="160" height="120" rx="10" fill="var(--hull)" stroke="var(--cyan)" stroke-width="1.5"/>
  ${dLabel(360,140,"Servidor",{size:13,weight:"700",color:"var(--cyan)"})}
  ${dLabel(360,165,"🔧 herramientas",{size:11})}
  ${dLabel(360,185,"📄 recursos",{size:11})}
  <line x1="440" y1="135" x2="600" y2="105" stroke="var(--green)" marker-end="url(#a3)"/>
  ${dLabel(500,108,"lectura",{size:10.5,color:"var(--green)"})}
  <line x1="440" y1="195" x2="600" y2="225" stroke="var(--coral)" marker-end="url(#a3)"/>
  ${dLabel(500,240,"escritura + confirmación",{size:10.5,color:"var(--coral)"})}
  <rect x="600" y="65" width="170" height="50" rx="8" fill="var(--hull)" stroke="var(--green)"/>
  ${dLabel(685,95,"HubSpot / Drive",{size:11})}
  <rect x="600" y="200" width="170" height="50" rx="8" fill="var(--hull)" stroke="var(--coral)"/>
  ${dLabel(685,230,"Escribir etapa",{size:11})}
  <defs><marker id="a3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--white)"/></marker></defs>
`, "0 0 800 320"),

/* S12 — pipeline RAG */
S12: () => svgWrap(`
  ${["Ingesta","Fragmentación","Vectorización","Índice","Recuperación","Generación"].map((t,i)=>{
    const x = 20 + i*125;
    return `
    <rect x="${x}" y="140" width="105" height="60" rx="10" fill="var(--hull)" stroke="var(--capa-kb)"/>
    ${dLabel(x+52,165,String(i+1),{size:11,color:"var(--capa-kb)",mono:true})}
    ${dLabel(x+52,182,t,{size:10.5})}
    ${i<5?`<line x1="${x+105}" y1="170" x2="${x+125}" y2="170" stroke="var(--capa-kb)" marker-end="url(#a4)"/>`:""}
    `;
  }).join("")}
  <defs><marker id="a4" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="var(--capa-kb)"/></marker></defs>
  ${dLabel(380,100,"Metadatos: área · versión · vigencia · sensibilidad — sin ellos, no hay filtrado",{size:12,color:"var(--mist)"})}
`),

/* S13 — funnel de métricas antes/después */
S13: () => svgWrap(`
  ${dLabel(200,30,"ANTES",{size:12,color:"var(--coral)",weight:"700"})}
  ${dLabel(560,30,"DESPUÉS",{size:12,color:"var(--green)",weight:"700"})}
  <rect x="90" y="50" width="220" height="36" rx="8" fill="var(--coral)" opacity=".15"/>
  ${dLabel(200,73,"Acierto top-3: 61%",{size:13})}
  <rect x="90" y="100" width="220" height="36" rx="8" fill="var(--coral)" opacity=".15"/>
  ${dLabel(200,123,"Q7 obsoleta se cuela",{size:13})}
  <rect x="450" y="50" width="220" height="36" rx="8" fill="var(--green)" opacity=".18"/>
  ${dLabel(560,73,"Acierto top-3: 92%",{size:13})}
  <rect x="450" y="100" width="220" height="36" rx="8" fill="var(--green)" opacity=".18"/>
  ${dLabel(560,123,"Filtro por vigencia",{size:13})}
  <path d="M310,68 L450,68" stroke="var(--white)" marker-end="url(#a5)"/>
  <path d="M310,118 L450,118" stroke="var(--white)" marker-end="url(#a5)"/>
  <defs><marker id="a5" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--white)"/></marker></defs>
  <rect x="230" y="180" width="300" height="70" rx="10" fill="var(--hull)" stroke="var(--gold)"/>
  ${dLabel(380,212,"“No está en la base”",{size:15,color:"var(--gold)",weight:"700"})}
  ${dLabel(380,235,"cuando el fragmento con vigencia válida no existe",{size:11})}
`),

/* S14 — patrones multiagente */
S14: () => svgWrap(`
  ${[["Cadena","A→B→C",70],["Enrutador","A decide y deriva",270],["Orquestador","+ especialistas",470],["Evaluador–Ejecutor","en bucle",670]].map(([t,d,x],i)=>`
    <rect x="${x-75}" y="60" width="150" height="90" rx="12" fill="var(--hull)" stroke="${i===1?'var(--gold)':'var(--line)'}" stroke-width="${i===1?2:1}"/>
    ${dLabel(x,100,t,{size:13,weight:"700",color:i===1?"var(--gold)":"var(--white)"})}
    ${dLabel(x,122,d,{size:10.5})}
    ${i===1?dLabel(x,150,"← SALUDSA (Isabel)",{size:10,color:"var(--cyan)"}):""}
  `).join("")}
  ${dLabel(380,200,"Máx. 6 iteraciones · USD 0,40/conversación · aprobación humana antes de “Cerrado”",{size:12,color:"var(--mist)"})}
`)
};

function getDiagram(code){
  const fn = DIAGRAMS[code];
  return fn ? fn() : "";
}
