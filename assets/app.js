/* ============================================================
   SALUDSA · AAC-48 — Student Hub — app.js
   Router liviano por hash + render desde sessions-data.js
   ============================================================ */
(function(){
"use strict";

const CAPA_COLOR = {
  "Governance":"var(--capa-governance)",
  "Agents":"var(--capa-agents)",
  "Automations":"var(--capa-automations)",
  "MCP Connectors":"var(--capa-mcp)",
  "Knowledge Bases":"var(--capa-kb)",
  "HTML Artifacts + Governance":"var(--capa-html)",
  "Workspaces":"var(--capa-agents)",
  "—":"var(--capa-none)"
};

function el(tag, attrs, ...children){
  const node = document.createElement(tag);
  if(attrs) for(const k in attrs){
    if(k === "class") node.className = attrs[k];
    else if(k === "html") node.innerHTML = attrs[k];
    else if(k.startsWith("on")) node.addEventListener(k.slice(2), attrs[k]);
    else node.setAttribute(k, attrs[k]);
  }
  children.flat().forEach(c=>{
    if(c === null || c === undefined || c === "") return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}
function esc(s){ return (s||"").toString(); }

/* ---------------- ROUTES ---------------- */
const root = document.getElementById("app");
const views = {};
function registerView(name, renderFn){ views[name] = renderFn; }

function navigate(hash, scroll){
  if(!hash) hash = "#inicio";
  const parts = hash.replace("#","").split("/");
  const view = parts[0] || "inicio";
  const param = parts[1];
  renderView(view, param);
  document.querySelectorAll(".nav button").forEach(b=>{
    b.classList.toggle("active", b.dataset.view === view);
  });
  if(location.hash !== hash) history.pushState(null,"",hash);
  if(scroll !== false) window.scrollTo({top:0, behavior:"instant" in window ? "instant":"auto"});
}

function renderView(view, param){
  root.innerHTML = "";
  const fn = views[view] || views["inicio"];
  root.appendChild(fn(param));
}

window.addEventListener("popstate", ()=>navigate(location.hash, false));
document.addEventListener("click", (e)=>{
  const btn = e.target.closest("[data-nav]");
  if(btn){ e.preventDefault(); navigate("#"+btn.dataset.nav); }
});

/* ================= INICIO (hero + resumen) ================= */
registerView("inicio", ()=>{
  const wrap = el("div");
  wrap.appendChild(el("section", {class:"hero"},
    el("div",{class:"hero-kicker"}, el("span",{class:"pulse"}), `${PROGRAM.codigo} · ${PROGRAM.cohorte}`),
    el("h1", null, "SALUDSA — AAC·48", el("span",{class:"sub"}, PROGRAM.tagline)),
    el("p", {class:"lede"}, PROGRAM.resumen),
    el("div",{class:"telemetry-strip"},
      tItem(PROGRAM.sesiones, "sesiones"),
      tItem(PROGRAM.horas+"h", "de formación"),
      tItem(PROGRAM.semanas, "semanas de cohorte"),
      tItem(PROGRAM.agentes.length, "agentes supervisados"),
      tItem("14/10", "arranque SAL-C1")
    )
  ));

  const cta = el("div",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"}, "Entra a la consola"),
      el("h2", null, "El mapa del cohorte, sesión por sesión"),
      el("p", null, PROGRAM.noEs)
    ),
    el("div",{class:"grid cols-4"},
      navCard("mapa","Sesiones","Las 14 sesiones, hitos y tutorías en la línea de tiempo del cohorte."),
      navCard("mision","Misión","Por qué el programa se adapta a medicina prepagada, matriz regulatoria, roles y calendario."),
      navCard("recursos","Recursos","Biblioteca RCTFX, datasets sintéticos y vault de Obsidian."),
      navCard("capstones","Capstones","Catálogo de proyectos pre-aprobados por área, con su número antes/después.")
    )
  );
  wrap.appendChild(cta);
  wrap.appendChild(siteFooter());
  return wrap;
});
function tItem(val,label){ return el("div",{class:"t-item"}, el("div",{class:"t-val"}, String(val)), el("div",{class:"t-lbl"}, label)); }
function navCard(view,title,desc){
  return el("button",{class:"card", "data-nav":view, style:"text-align:left;width:100%;border:1px solid var(--line);cursor:pointer"},
    el("h4",null,title), el("p",null,desc)
  );
}

/* ================= MAPA (timeline de sesiones) ================= */
registerView("mapa", ()=>{
  const wrap = el("div");
  wrap.appendChild(el("section",{class:"section"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"},"Línea de tiempo · SAL-C1"),
      el("h2",null,"14 sesiones · 7 semanas · 3 agentes en supervisión"),
      el("p",null,`${PROGRAM.horario}. Cada nodo abre la sesión completa: objetivo verificable, guion minuto a minuto y su entrega al proyecto SALUDSA.`)
    ),
    el("div",{class:"map-wrap"}, ...buildWeekLanes()),
    buildLegend()
  ));
  wrap.appendChild(siteFooter());
  return wrap;
});

function buildWeekLanes(){
  const weeks = {};
  SESSIONS.forEach(s=>{ (weeks[s.semana] = weeks[s.semana]||[]).push({type:"session", data:s}); });
  MILESTONES.forEach(m=>{ (weeks[m.semana] = weeks[m.semana]||[]).push({type:"milestone", data:m}); });
  const order = Object.keys(weeks).map(Number).sort((a,b)=>a-b);
  return order.map(w=>{
    const items = weeks[w];
    return el("div",{class:"week-lane"},
      el("div",{class:"week-lane-head"},
        el("span",{class:"wk"}, "SEMANA "+w),
        el("span",{class:"wk-range"}, items.map(i=>i.data.fecha).join(" · "))
      ),
      el("div",{class:"node-row"}, ...items.map(i=> i.type==="session" ? sessionNode(i.data) : milestoneNode(i.data)))
    );
  });
}

function sessionNode(s){
  const color = CAPA_COLOR[s.capa] || "var(--capa-none)";
  return el("button",{class:"node", "data-nav":"sesion/"+s.code, style:`--capa:${color}`},
    el("div",{class:"n-top"},
      el("span",{class:"n-code"}, s.code),
      el("span",{class:"n-date"}, s.fecha)
    ),
    el("div",{class:"n-title"}, s.title),
    el("div",{class:"n-foot"},
      el("span",{class:"n-capa"}, el("span",{class:"sw"}), s.capa),
      s.bloqueante ? el("span",{class:"n-block"},"BLOQUEANTE") : el("span",null, s.modulo)
    )
  );
}
function milestoneNode(m){
  return el("button",{class:"node milestone", "data-nav":"hito/"+m.code},
    el("div",{class:"n-top"},
      el("span",{class:"n-code"}, m.code),
      el("span",{class:"n-date"}, m.fecha)
    ),
    el("div",{class:"n-title"}, m.title),
    el("div",{class:"n-foot"}, el("span",null,"Hito del cohorte"))
  );
}
function buildLegend(){
  const capas = ["Governance","Agents","Automations","MCP Connectors","Knowledge Bases","HTML Artifacts + Governance","—"];
  return el("div",{class:"legend"}, ...capas.map(c=>
    el("div",{class:"l-item"}, el("span",{class:"sw", style:`background:${CAPA_COLOR[c]}`}), c==="—"?"Fundamentos":c)
  ), el("div",{class:"l-item"}, el("span",{class:"sw", style:"background:var(--coral);border-radius:50%"}), "Sesión bloqueante"));
}

/* ================= SESIÓN (deck completo) ================= */
registerView("sesion", (code)=>{
  const idx = SESSIONS.findIndex(s=>s.code===code);
  const s = SESSIONS[idx] || SESSIONS[0];
  const prev = SESSIONS[idx-1], next = SESSIONS[idx+1];
  const totalMin = 180;

  const wrap = el("div", {class:"deck"},
    el("button",{class:"deck-back","data-nav":"mapa"}, "← Volver al mapa de sesiones"),
    el("div",{class:"deck-meta"},
      el("span",{class:"chip"}, "Semana "+s.semana),
      el("span",{class:"chip"}, s.fecha),
      el("span",{class:"chip"}, s.modulo),
      el("span",{class:"chip"}, s.capa),
      el("span",{class:"chip"}, s.agente),
      s.bloqueante ? el("span",{class:"chip block"}, "BLOQUEANTE") : ""
    ),
    el("span",{class:"deck-code"}, s.code),
    el("h1",{class:"deck-title"}, s.title),

    el("div",{class:"grid cols-2", style:"margin-top:6px"},
      el("a",{class:"card", href:"slides.html#"+s.code, style:"text-decoration:none;display:block;border-color:rgba(216,177,104,.35)"},
        el("h4",null,"📽️ Slides de la sesión"),
        el("p",null,"Teoría y práctica en deck cinemático, pantalla completa — material para repasar la clase.")
      ),
      el("a",{class:"card", href:"build.html#"+s.code, style:"text-decoration:none;display:block;border-color:rgba(79,216,220,.35)"},
        el("h4",null,"🛠️ Build Hub"),
        el("p",null,"Manual de práctica: teoría, recursos, guion del aula y laboratorio con criterio de aceptación.")
      )
    ),

    el("div",{class:"deck-block"},
      el("span",{class:"db-label"},"Objetivo verificable"),
      el("div",{class:"objetivo-box"}, s.objetivo)
    ),

    el("div",{class:"deck-block"},
      el("span",{class:"db-label"}, `Guion de la sesión — ${totalMin} min`),
      el("div",{class:"timeline"},
        el("div",{class:"timeline-bar"}, ...s.agenda.map(b=>segFromBlock(b, totalMin))),
        el("div",{class:"timeline-list"}, ...s.agenda.map(b=>rowFromBlock(b)))
      )
    ),

    s.vinculo ? el("div",{class:"deck-link"},
      el("h4",null,"Vínculo con el proyecto SALUDSA"),
      el("p",null, s.vinculo)
    ) : "",

    el("div",{class:"two-col"},
      el("div",{class:"info-card criteria"}, el("h4",null,"Criterio del entregable"), el("p",null, s.criterio||"—")),
      s.riesgos ? el("div",{class:"info-card risk"}, el("h4",null,"Riesgos de facilitación"), el("p",null, s.riesgos))
                : el("div",{class:"info-card"}, el("h4",null,"Agente relacionado"), el("p",null, s.agente))
    ),

    el("div",{class:"deck-nav"},
      prev ? el("button",{"data-nav":"sesion/"+prev.code}, el("span",null,"← Anterior"), el("span",{class:"dn-title"}, prev.code+" · "+prev.title))
           : el("span"),
      next ? el("button",{class:"next","data-nav":"sesion/"+next.code}, el("span",null,"Siguiente →"), el("span",{class:"dn-title"}, next.code+" · "+next.title))
           : el("button",{class:"next","data-nav":"mapa"}, el("span",null,"Fin de la ruta"), el("span",{class:"dn-title"},"Volver al mapa"))
    )
  );
  const outer = el("div"); outer.appendChild(wrap); outer.appendChild(siteFooter());
  return outer;
});

function minToPct(range, total){
  const [a,b] = range.split(/[–-]/).map(Number);
  return {start:a, width:(b-a)/total*100};
}
function segFromBlock(b, total){
  const {width} = minToPct(b.min, total);
  const isPausa = /pausa/i.test(b.bloque);
  const color = isPausa ? "var(--hull-3)" : "var(--gold)";
  return el("div",{class:"seg", title:`${b.bloque} (${b.min})`, style:`width:${width}%;background:${color}`});
}
function rowFromBlock(b){
  const isPausa = /pausa/i.test(b.bloque);
  return el("div",{class:"t-row"+(isPausa?" pausa":"")},
    el("div",{class:"t-min"}, b.min+" min"),
    el("div",null, el("div",{class:"t-name"}, b.bloque), b.detalle ? el("div",{class:"t-desc"}, b.detalle) : "")
  );
}

/* ================= HITO ================= */
registerView("hito", (code)=>{
  const m = MILESTONES.find(x=>x.code===code) || MILESTONES[0];
  const wrap = el("div",{class:"deck"},
    el("button",{class:"deck-back","data-nav":"mapa"}, "← Volver al mapa de sesiones"),
    el("div",{class:"deck-meta"}, el("span",{class:"chip"},"Semana "+m.semana), el("span",{class:"chip"},m.fecha)),
    el("span",{class:"deck-code"}, m.code),
    el("h1",{class:"deck-title"}, m.title),
    el("div",{class:"deck-block"}, el("div",{class:"objetivo-box"}, m.detalle))
  );
  const outer = el("div"); outer.appendChild(wrap); outer.appendChild(siteFooter());
  return outer;
});

/* ================= MISIÓN (programa rector) ================= */
registerView("mision", ()=>{
  const wrap = el("div");
  wrap.appendChild(el("section",{class:"section"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"}, PROGRAM.codigo+" · "+PROGRAM.version),
      el("h2",null,"Por qué este programa, y por qué se adapta"),
      el("p",null, PROGRAM.resumen)
    ),
    el("div",{class:"grid cols-3"}, ...PROGRAM.porQueAdapta.map((t,i)=>
      el("div",{class:"card"}, el("span",{class:"card-num"}, "0"+(i+1)), el("p",null,t))
    ))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"},"No es opcional"),
      el("h2",null,"Tres condiciones de arranque")
    ),
    ...PROGRAM.condiciones.map((c,i)=> el("div",{class:"condition"},
      el("div",{class:"c-idx"}, "0"+(i+1)),
      el("div",null, el("h4",null,c.titulo), el("p",null,c.detalle), el("div",{class:"c-resp"},"Responsable: "+c.responsable))
    ))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"Cumplimiento"), el("h2",null,"Matriz regulatoria y de riesgo")),
    dataTable(["Marco","Exige","Dónde lo cubre","Control operativo"],
      PROGRAM.matrizRegulatoria.map(r=>[r.marco, r.exige, r.donde, r.control]))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"Dos cohortes secuenciales"), el("h2",null,"Participantes")),
    el("div",{class:"grid cols-2"}, ...PROGRAM.cohortes.map(c=>
      el("div",{class:"card", style: c.activa? "border-color:rgba(216,177,104,.4)":""},
        el("h4",null, c.id + (c.activa? "  · en curso":"")),
        el("p",null, c.perfil),
        el("p",{style:"margin-top:10px;color:var(--white)"}, "Foco: "+c.foco),
        el("p",{style:"margin-top:4px"}, "Agentes: "+c.agente)
      )
    ))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"§6"), el("h2",null,"Stack de 6 capas — versión SALUDSA")),
    dataTable(["Capa","En el proyecto SALUDSA"], PROGRAM.stack6capas.map(s=>[s.capa, s.saludsa]))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"Quién hace qué"), el("h2",null,"Roles")),
    dataTable(["Rol","Persona","Responsabilidad"], PROGRAM.roles.map(r=>[r.rol, r.persona, r.detalle]))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"Se reportan a Dirección Comercial"), el("h2",null,"Indicadores del programa")),
    el("div",{class:"grid cols-2"}, ...PROGRAM.indicadores.map(i=>
      el("div",{class:"card"}, el("h4",{style:"color:var(--gold);font-family:var(--f-mono);font-size:14px"}, i.meta), el("p",{style:"margin-top:6px"}, i.indicador))
    ))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"30 de septiembre"), el("h2",null,"Condiciones de arranque (go / no-go)")),
    el("ul",{class:"checklist"}, ...PROGRAM.goNoGo.map(g=>el("li",null,g))),
    el("p",{style:"margin-top:16px;color:var(--mist);font-size:13px"},"Con 5 de 7, se arranca con datos sintéticos. Con menos, se posterga dos semanas.")
  ));

  wrap.appendChild(siteFooter());
  return wrap;
});

/* ================= RECURSOS ================= */
registerView("recursos", ()=>{
  const wrap = el("div");
  wrap.appendChild(el("section",{class:"section"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"},"03_Recursos"),
      el("h2",null,"Biblioteca RCTFX, datasets y vault"),
      el("p",null,"Todos los prompts siguen Rol · Contexto · Tarea · Formato · eXamples. Los nombres de planes y cifras son sintéticos hasta que SALUDSA sustituya la KB.")
    ),
    dataTable(["Archivo","Tipo","Capa","Sesión"], RCTFX.map(r=>[r.archivo, r.tipo, r.capa, r.sesion]))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"100% sintéticos"), el("h2",null,"Datasets"),
      el("p",null,"Todos los datos son ficticios. No representan productos, afiliados ni tarifas reales de SALUDSA.")),
    dataTable(["Archivo","Filas","Uso en sesión"], DATASETS.map(d=>[d.archivo, String(d.filas), d.uso]))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"Obsidian Vault"), el("h2",null,"7 carpetas del cohorte + Agentes-SALUDSA")),
    el("div",{class:"grid cols-3"}, ...OBSIDIAN_VAULT.map(o=>
      el("div",{class:"card"}, el("h4",null,"/"+o.carpeta), el("p",null,o.detalle))
    ))
  ));

  wrap.appendChild(siteFooter());
  return wrap;
});

/* ================= CAPSTONES ================= */
registerView("capstones", ()=>{
  const wrap = el("div");
  wrap.appendChild(el("section",{class:"section"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"},"05_Capstone"),
      el("h2",null,"Catálogo de capstones — alcances pre-aprobados"),
      el("p",null, CAPSTONES.reglas)
    ),
    ...CAPSTONES.tracks.map(t=>el("div",{style:"margin-top:12px"},
      el("h3",{style:"font-size:1.1rem;margin-bottom:16px;color:var(--gold)"}, t.area),
      el("div",{class:"grid cols-2", style:"margin-bottom:36px"}, ...t.items.map(c=>
        el("div",{class:"card"},
          el("span",{class:"card-num"}, c.id),
          el("h4",null, c.nombre),
          el("p",null, "Componentes: "+c.componentes),
          el("p",{style:"margin-top:6px;color:var(--cyan)"}, "Número: "+c.numero)
        )
      ))
    )),
    el("div",{class:"info-card risk"}, el("h4",null,"Rechazados de antemano"), el("p",null, CAPSTONES.rechazados))
  ));
  wrap.appendChild(siteFooter());
  return wrap;
});

/* ================= EVALUACIÓN ================= */
registerView("evaluacion", ()=>{
  const wrap = el("div");
  wrap.appendChild(el("section",{class:"section"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"},"04_Evaluacion + T1–T3"),
      el("h2",null,"Suficiencia, defensas y Show & Tell")
    ),
    el("div",{class:"grid cols-2"},
      el("div",{class:"info-card"}, el("h4",null,"Quizzes de módulo"), el("p",null, EVALUACION.quizzes)),
      el("div",{class:"info-card"}, el("h4",null,"Examen de suficiencia"), el("p",null, EVALUACION.examen)),
      el("div",{class:"info-card"}, el("h4",null,"Defensas de capstone"), el("p",null, EVALUACION.defensas)),
      el("div",{class:"info-card"}, el("h4",null,"Show & Tell"), el("p",null, EVALUACION.showAndTell)),
      el("div",{class:"info-card criteria"}, el("h4",null,"Certificados"), el("p",null, EVALUACION.certificados))
    )
  ));
  wrap.appendChild(siteFooter());
  return wrap;
});

/* ================= OPERACIÓN ================= */
registerView("operacion", ()=>{
  const wrap = el("div");
  wrap.appendChild(el("section",{class:"section"},
    el("div",{class:"section-head"},
      el("span",{class:"eyebrow"},"06_Operacion"),
      el("h2",null,"Cronograma completo SAL-C1")
    ),
    dataTable(["Sem.","Fecha","Evento","Hito operativo"],
      CRONOGRAMA.map(c=>[c.sem===null?"—":String(c.sem), c.fecha, c.evento, c.hito||"—"]))
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"12 participantes"), el("h2",null,"Presupuesto de laboratorio")),
    dataTable(["Concepto","Unidad","Cantidad","Nota"], PRESUPUESTO.map(p=>[p.concepto,p.unidad,String(p.cantidad),p.nota])),
    el("p",{style:"margin-top:14px;color:var(--gold);font-family:var(--f-mono);font-size:13px"}, PRESUPUESTO_TOTAL)
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"Antes del 14 de octubre"), el("h2",null,"Checklist de arranque")),
    el("div",{class:"grid cols-3"},
      checklistCard("SALUDSA (Nicolás / Sonia)", CHECKLIST_ARRANQUE.saludsa),
      checklistCard("ORION (Felipe Salgado)", CHECKLIST_ARRANQUE.orion),
      checklistCard("Autoploy / TI", CHECKLIST_ARRANQUE.autoployTi)
    )
  ));

  wrap.appendChild(el("section",{class:"section", style:"padding-top:0"},
    el("div",{class:"section-head"}, el("span",{class:"eyebrow"},"S14 · Entregable en vivo"), el("h2",null,"Consola de estado de agentes"),
      el("p",null,"Plantilla que el grupo construye en Lab 14 y publica como artifact. Vista en vivo del prototipo:")),
    el("div",{class:"iframe-frame"}, el("iframe",{src:"06_Operacion/consola_estado_agentes.html", title:"Consola de estado de agentes SALUDSA", loading:"lazy"}))
  ));

  wrap.appendChild(siteFooter());
  return wrap;
});

/* ---------------- helpers ---------------- */
function dataTable(headers, rows){
  return el("div",{class:"tbl-wrap"},
    el("table",{class:"data"},
      el("thead",null, el("tr",null, ...headers.map(h=>el("th",null,h)))),
      el("tbody",null, ...rows.map(r=> el("tr",null, ...r.map(c=>el("td",null,c)))))
    )
  );
}
function checklistCard(title, items){
  return el("div",{class:"card"}, el("h4",null,title), el("ul",{class:"checklist", style:"margin-top:12px"}, ...items.map(i=>el("li",null,i))));
}
function siteFooter(){
  return el("footer",{class:"site"}, `${PROGRAM.codigo} · ${PROGRAM.emisor} · ${PROGRAM.version} · Datos sintéticos hasta autorización SALUDSA`);
}

/* ---------------- boot ---------------- */
navigate(location.hash || "#inicio", false);
window.addEventListener("hashchange", ()=>navigate(location.hash));

})();
