/* ============================================================
   SALUDSA · AAC-48 — Build Hub — motor de la página
   Manual de práctica por sesión: teoría condensada + recursos
   cruzados (RCTFX/Datasets) + guion en el aula + laboratorio.
   ============================================================ */
(function(){
"use strict";

function el(tag, attrs, ...children){
  const node = document.createElement(tag);
  if(attrs) for(const k in attrs){
    if(k === "class") node.className = attrs[k];
    else if(k === "html") node.innerHTML = attrs[k];
    else node.setAttribute(k, attrs[k]);
  }
  children.flat().forEach(c=>{
    if(c===null||c===undefined||c==="") return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}
function dataTable(headers, rows){
  return el("div",{class:"tbl-wrap"},
    el("table",{class:"data"},
      el("thead",null, el("tr",null, ...headers.map(h=>el("th",null,h)))),
      el("tbody",null, ...rows.map(r=> el("tr",null, ...r.map(c=>el("td",null,c)))))
    )
  );
}
function minToPct(range, total){ const [a,b] = range.split(/[–-]/).map(Number); return (b-a)/total*100; }

function getCode(){
  const h = location.hash.replace("#","");
  return SESSIONS.some(s=>s.code===h) ? h : "S01";
}

function render(){
  const code = getCode();
  const idx = SESSIONS.findIndex(x=>x.code===code);
  const s = SESSIONS[idx];
  const t = THEORY[code] || {};
  const lab = LABS[code] || {};
  const prev = SESSIONS[idx-1], next = SESSIONS[idx+1];
  const totalMin = 180;

  const recursos = RCTFX.filter(r=> r.sesion.includes(code));
  const datasets = DATASETS.filter(d=> d.uso.includes(code));

  const root = document.getElementById("app");
  root.innerHTML = "";

  root.appendChild(el("div",{class:"deck"},
    el("a",{class:"deck-back", href:"index.html#sesion/"+code}, "← Volver a la ficha de "+code),

    el("div",{class:"deck-meta"},
      el("span",{class:"chip"}, "Semana "+s.semana),
      el("span",{class:"chip"}, s.fecha),
      el("span",{class:"chip"}, s.modulo),
      el("span",{class:"chip"}, s.capa),
      el("span",{class:"chip"}, "Build Hub"),
      s.bloqueante ? el("span",{class:"chip block"}, "BLOQUEANTE") : ""
    ),
    el("span",{class:"deck-code"}, code+" · Material del alumno"),
    el("h1",{class:"deck-title"}, s.title),

    el("div",{class:"deck-link", style:"margin-top:24px"},
      el("h4",null,"📽️ ¿Prefieres verlo en slides?"),
      el("p",null, el("a",{href:"slides.html#"+code, style:"color:var(--cyan)"}, "Abrir el deck cinemático de "+code+" →"))
    ),

    section("Objetivo de la sesión",
      el("div",{class:"objetivo-box"}, s.objetivo),
      t.objetivoBase ? el("p",{style:"margin-top:14px;color:var(--mist);font-size:14px;line-height:1.7"}, t.objetivoBase) : ""
    ),

    t.contenidos ? section("Teoría — qué necesitas saber",
      el("ul",{class:"checklist"}, ...t.contenidos.map(c=>el("li",null,c))),
      t.demo ? el("div",{class:"info-card", style:"margin-top:16px"}, el("h4",null,"🎬 Demostración en vivo"), el("p",null,t.demo)) : "",
      t.lectura ? el("p",{style:"margin-top:14px;color:var(--cyan);font-size:13px"}, "📖 Lectura asignada: "+t.lectura) : ""
    ) : "",

    (recursos.length || datasets.length) ? section("Recursos de esta sesión",
      recursos.length ? el("div",null, el("p",{style:"color:var(--mist);font-size:13px;margin-bottom:10px"},"Biblioteca RCTFX"), dataTable(["Archivo","Tipo","Capa"], recursos.map(r=>[r.archivo,r.tipo,r.capa]))) : "",
      datasets.length ? el("div",{style:"margin-top:20px"}, el("p",{style:"color:var(--mist);font-size:13px;margin-bottom:10px"},"Datasets"), dataTable(["Archivo","Filas"], datasets.map(d=>[d.archivo,String(d.filas)]))) : ""
    ) : "",

    section(`Cómo se ejecutó en el aula SALUDSA — ${totalMin} min`,
      el("div",{class:"timeline"},
        el("div",{class:"timeline-bar"}, ...s.agenda.map(b=> el("div",{class:"seg", title:b.bloque+" ("+b.min+")", style:`width:${minToPct(b.min,totalMin)}%;background:${/pausa/i.test(b.bloque)?"var(--hull-3)":"var(--gold)"}`}))),
        el("div",{class:"timeline-list"}, ...s.agenda.map(b=> el("div",{class:"t-row"+(/pausa/i.test(b.bloque)?" pausa":"")},
          el("div",{class:"t-min"}, b.min+" min"),
          el("div",null, el("div",{class:"t-name"}, b.bloque), b.detalle?el("div",{class:"t-desc"},b.detalle):"")
        )))
      )
    ),

    lab.consigna ? section("🛠️ Práctica — "+(lab.nombre||"Laboratorio"),
      el("p",{style:"color:var(--gold);font-family:var(--f-mono);font-size:12.5px;margin-bottom:14px"}, "Tiempo estimado: "+lab.tiempo),
      el("div",{class:"objetivo-box", style:"border-left-color:var(--cyan)"}, lab.consigna),
      el("h4",{style:"font-family:var(--f-mono);color:var(--mist);font-size:12px;letter-spacing:.04em;margin:24px 0 12px"}, "CRITERIO DE ACEPTACIÓN"),
      el("ul",{class:"checklist"}, ...(lab.criterios||[]).map(c=>el("li",null,c))),
      lab.nota ? el("div",{class:"info-card risk", style:"margin-top:16px"}, el("h4",null,"⚠️ Error común"), el("p",null,lab.nota)) : ""
    ) : "",

    section("Entrega SALUDSA",
      el("div",{class:"two-col", style:"margin-top:0"},
        el("div",{class:"info-card criteria"}, el("h4",null,"Criterio del entregable (versión SALUDSA)"), el("p",null, s.criterio||"—")),
        el("div",{class:"deck-link", style:"margin-top:0"}, el("h4",null,"Vínculo con el proyecto"), el("p",null, s.vinculo||"—"))
      )
    ),

    el("div",{class:"deck-nav"},
      prev ? el("a",{href:"build.html#"+prev.code}, el("span",null,"← Anterior"), el("span",{class:"dn-title"}, prev.code+" · "+prev.title)) : el("span"),
      next ? el("a",{class:"next", href:"build.html#"+next.code}, el("span",null,"Siguiente →"), el("span",{class:"dn-title"}, next.code+" · "+next.title))
           : el("a",{class:"next", href:"index.html#mapa"}, el("span",null,"Fin de la ruta"), el("span",{class:"dn-title"},"Volver al mapa"))
    )
  ));
  root.appendChild(el("footer",{class:"site"}, `${PROGRAM.codigo} · Build Hub · Material del alumno`));
}

function section(title, ...children){
  return el("div",{class:"deck-block"}, el("span",{class:"db-label"}, title.toUpperCase()), ...children);
}

document.addEventListener("DOMContentLoaded", render);
window.addEventListener("hashchange", render);

})();
