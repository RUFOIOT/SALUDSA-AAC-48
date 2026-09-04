/* ============================================================
   SALUDSA · AAC-48 — Slides — motor del deck
   Construye las diapositivas de una sesion a partir de
   SESSIONS (sessions-data.js) + THEORY/LABS (session-content.js).
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

function getCode(){
  const h = location.hash.replace("#","");
  return SESSIONS.some(s=>s.code===h) ? h : "S01";
}

function buildSlides(code){
  const s = SESSIONS.find(x=>x.code===code);
  const t = THEORY[code] || {};
  const lab = LABS[code] || {};
  const slides = [];

  // 1. Cover
  slides.push({kind:"cover", render:()=> el("div",{class:"slide s-cover"},
    el("div",{class:"s-kicker"}, el("span",{class:"n"},code), "· "+s.modulo+" · "+s.capa),
    el("h1", null, s.title),
    el("div",{class:"meta"},
      el("span",null,"Semana "+s.semana+" · "+s.fecha),
      el("span",null, s.agente),
      s.bloqueante ? el("span",{style:"color:var(--coral);border-color:rgba(255,122,107,.4)"},"BLOQUEANTE") : el("span",null,"Material del alumno"),
    )
  )});

  // 2. Objetivo (SALUDSA)
  slides.push({kind:"objetivo", render:()=> el("div",{class:"slide"},
    el("div",{class:"s-kicker"}, "Al terminar esta sesión"),
    el("div",{class:"s-quote"}, s.objetivo)
  )});

  // 3. Objetivo base / marco conceptual
  if(t.objetivoBase){
    slides.push({kind:"marco", render:()=> el("div",{class:"slide"},
      el("div",{class:"s-kicker"}, "Marco conceptual"),
      el("div",{class:"s-para"}, t.objetivoBase)
    )});
  }

  // 4..N Contenidos (uno por slide)
  (t.contenidos||[]).forEach((c,i)=>{
    slides.push({kind:"contenido", render:()=> el("div",{class:"slide"},
      el("div",{class:"s-kicker"}, `Teoría ${i+1}/${t.contenidos.length}`),
      el("div",{class:"s-big"}, c)
    )});
  });

  // Demo
  if(t.demo){
    slides.push({kind:"demo", render:()=> el("div",{class:"slide"},
      el("div",{class:"s-kicker"}, "🎬 Demostración en vivo"),
      el("div",{class:"s-big"}, t.demo)
    )});
  }

  // Bridge to SALUDSA execution
  slides.push({kind:"bridge", render:()=> el("div",{class:"slide"},
    el("div",{class:"s-kicker"}, "De la teoría a SALUDSA"),
    el("div",{class:"s-big"}, "Así se ejecutó en el aula, sobre datos y agentes reales del proyecto:"),
    el("ul",{class:"s-list small"}, ...s.agenda.filter(b=>!/pausa/i.test(b.bloque)).map(b=>
      el("li",null, el("span",{style:"color:var(--gold)"}, b.min+" — "), b.bloque)
    ))
  )});

  // Lab / practice
  if(lab.consigna){
    slides.push({kind:"lab", render:()=> el("div",{class:"slide"},
      el("span",{class:"s-code-tag"}, lab.tiempo || "Práctica"),
      el("div",{class:"s-kicker"}, "🛠️ "+(lab.nombre||"Laboratorio")),
      el("div",{class:"s-para"}, lab.consigna)
    )});
  }

  // Criteria checklist
  if(lab.criterios && lab.criterios.length){
    slides.push({kind:"criterios", render:()=> el("div",{class:"slide"},
      el("div",{class:"s-kicker"}, "Criterio de aceptación"),
      el("ul",{class:"s-list"}, ...lab.criterios.map(c=>el("li",null,c))),
      lab.nota ? el("div",{class:"s-note"}, lab.nota) : ""
    )});
  }

  // Closing — vínculo + criterio SALUDSA + links
  slides.push({kind:"closing", render:()=> el("div",{class:"slide"},
    el("div",{class:"s-closing"},
      el("div",{class:"s-kicker"}, "Vínculo con el proyecto SALUDSA"),
      el("div",{class:"s-para"}, s.vinculo || s.objetivo),
      el("div",{class:"s-sub"}, "Criterio SALUDSA: "+s.criterio),
      el("div",{class:"cta-row"},
        el("a",{href:"build.html#"+code}, "🛠️ Ir al Build Hub de "+code),
        el("a",{class:"ghost", href:"index.html#sesion/"+code}, "← Volver a la ficha de la sesión")
      )
    )
  )});

  return slides;
}

let slides = [];
let current = 0;

function render(){
  const stage = document.getElementById("stage");
  stage.innerHTML = "";
  slides.forEach((sl,i)=>{
    const node = sl.render();
    node.classList.add("slide-instance");
    if(i===current) node.classList.add("active");
    else if(i<current) node.classList.add("prev");
    node.style.position = "absolute"; node.style.inset = "0";
    stage.appendChild(node);
  });
  document.getElementById("progressFill").style.width = ((current+1)/slides.length*100)+"%";
  document.getElementById("counter").textContent = (current+1)+" / "+slides.length;
  const dots = document.getElementById("dots");
  dots.innerHTML = "";
  slides.forEach((_,i)=> dots.appendChild(el("div",{class:"d"+(i===current?" on":"")})));
}

function goTo(i){
  if(i<0 || i>=slides.length) return;
  current = i;
  render();
}
function next(){ if(current < slides.length-1) goTo(current+1); else location.href = "index.html#sesion/"+getCode(); }
function prevSlide(){ goTo(current-1); }

function init(){
  const code = getCode();
  const s = SESSIONS.find(x=>x.code===code);
  slides = buildSlides(code);
  current = 0;

  document.getElementById("sessionLabel").textContent = code+" · "+s.title;
  document.getElementById("backLink").href = "index.html#sesion/"+code;
  document.getElementById("buildLink").href = "build.html#"+code;

  const idx = SESSIONS.findIndex(x=>x.code===code);
  const prevS = SESSIONS[idx-1], nextS = SESSIONS[idx+1];
  document.getElementById("prevSession").href = prevS ? "slides.html#"+prevS.code : "#";
  document.getElementById("prevSession").style.visibility = prevS ? "visible":"hidden";
  document.getElementById("nextSession").href = nextS ? "slides.html#"+nextS.code : "#";
  document.getElementById("nextSession").style.visibility = nextS ? "visible":"hidden";

  render();
}

document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight"||e.key===" ") next();
  if(e.key==="ArrowLeft") prevSlide();
  if(e.key==="f"||e.key==="F"){
    if(!document.fullscreenElement) document.documentElement.requestFullscreen().catch(()=>{});
    else document.exitFullscreen();
  }
});
document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("stage").addEventListener("click", (e)=>{
    if(e.target.closest("a,button")) return; // deja que el link/botón real haga su trabajo
    const half = window.innerWidth/2;
    if(e.clientX < half) prevSlide(); else next();
  });
  document.getElementById("btnPrev").addEventListener("click", prevSlide);
  document.getElementById("btnNext").addEventListener("click", next);
  document.getElementById("btnFull").addEventListener("click", ()=>{
    if(!document.fullscreenElement) document.documentElement.requestFullscreen().catch(()=>{});
    else document.exitFullscreen();
  });
  init();
});
window.addEventListener("hashchange", init);

})();
