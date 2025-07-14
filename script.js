const ramos = [
  {
    nombre: "Introducción a las ciencias empresariales y a la ética profesional",
    id: "introduccion-a-las-ciencias-empresariales-y-a-la-etica-profesional",
    semestre: "Primer Año - I semestre:",
    desbloquea: [
      "fundamentos-de-la-contabilidad-i",
      "aspectos-legales-de-la-empresa",
      "trabajo-en-equipo-y-gestion-de-compromisos",
      "taller-de-integracion-ciclo-basico-i"
    ]
  },
  {
    nombre: "Tecnologías de información y comunicación",
    id: "tecnologias-de-informacion-y-comunicacion",
    semestre: "Primer Año - I semestre:",
    desbloquea: ["computacion"]
  },
  {
    nombre: "Comunicación para la práctica empresarial I",
    id: "comunicacion-para-la-practica-empresarial-i",
    semestre: "Primer Año - I semestre:",
    desbloquea: ["comunicacion-para-la-practica-empresarial-ii"]
  },
  {
    nombre: "Aprendizaje estratégico",
    id: "aprendizaje-estrategico",
    semestre: "Primer Año - I semestre:",
    desbloquea: ["trabajo-en-equipo-y-gestion-de-compromisos"]
  },
  {
    nombre: "Visión sistemática de la organización I",
    id: "vision-sistematica-de-la-organizacion-i",
    semestre: "Primer Año - I semestre:",
    desbloquea: [
      "vision-sistematica-de-la-organizacion-ii",
      "trabajo-en-equipo-y-gestion-de-compromisos",
      "taller-de-integracion-ciclo-basico-i"
    ]
  },
  {
    nombre: "Desarrollo del pensamiento lógico matemático",
    id: "desarrollo-del-pensamiento-logico-matematico",
    semestre: "Primer Año - I semestre:",
    desbloquea: ["matematicas-aplicadas-i"]
  },
  {
    nombre: "Fundamentos de la contabilidad I",
    id: "fundamentos-de-la-contabilidad-i",
    semestre: "Primer Año - II semestre:",
    desbloquea: [
      "taller-de-integracion-ciclo-basico-ii",
      "fundamentos-de-la-contabilidad-ii",
      "sistemas-de-costeo"
    ]
  },
  {
    nombre: "Comunicación para la práctica empresarial II",
    id: "comunicacion-para-la-practica-empresarial-ii",
    semestre: "Primer Año - II semestre:",
    desbloquea: []
  },
  {
    nombre: "Aspectos legales de la empresa",
    id: "aspectos-legales-de-la-empresa",
    semestre: "Primer Año - II semestre:",
    desbloquea: ["normativa-empresarial"]
  },
  {
    nombre: "Visión sistemática de la organización II",
    id: "vision-sistematica-de-la-organizacion-ii",
    semestre: "Primer Año - II semestre:",
    desbloquea: [
      "introduccion-a-la-auditoria",
      "emprendimiento-e-innovacion",
      "marketing",
      "gestion-de-recursos-humanos"
    ]
  },
  {
    nombre: "Matemáticas aplicadas I",
    id: "matematicas-aplicadas-i",
    semestre: "Primer Año - II semestre:",
    desbloquea: ["matematicas-aplicadas-ii", "estadisticas"]
  },
  {
    nombre: "Trabajo en equipo y gestión de compromisos",
    id: "trabajo-en-equipo-y-gestion-de-compromisos",
    semestre: "Primer Año - II semestre:",
    desbloquea: []
  },
  {
    nombre: "Taller de integración ciclo básico I",
    id: "taller-de-integracion-ciclo-basico-i",
    semestre: "Primer Año - II semestre:",
    desbloquea: ["taller-de-integracion-ciclo-basico-ii"]
  },
  // ⚠️ Aquí continúas agregando el resto de los ramos con mismo formato...
];

// Lógica funcional del sistema
const estado = {};
const malla = document.getElementById("malla");
const template = document.getElementById("ramo-template");

function agruparPorSemestre(data) {
  const mapa = {};
  data.forEach(r => {
    if (!mapa[r.semestre]) mapa[r.semestre] = [];
    mapa[r.semestre].push(r);
  });
  return mapa;
}

function renderizar() {
  malla.innerHTML = "";
  const agrupado = agruparPorSemestre(ramos);
  for (let semestre in agrupado) {
    const section = document.createElement("section");
    section.classList.add("semestre");
    section.innerHTML = `<h2>${semestre}</h2><div class="ramos"></div>`;
    const contenedorRamos = section.querySelector(".ramos");

    agrupado[semestre].forEach(ramo => {
      const clone = template.content.cloneNode(true);
      const div = clone.querySelector(".ramo");
      div.id = ramo.id;
      div.querySelector(".ramo-nombre").textContent = ramo.nombre;
      div.querySelector(".ramo-id").textContent = `ID: ${ramo.id}`;
      actualizarEstadoVisual(div, estado[ramo.id] || "bloqueado");
      div.addEventListener("click", () => toggleRamo(ramo));
      contenedorRamos.appendChild(clone);
    });

    malla.appendChild(section);
  }
}

function actualizarEstadoVisual(div, estadoActual) {
  div.classList.remove("bloqueado", "desbloqueado", "aprobado");
  div.classList.add(estadoActual);
  const icon = div.querySelector(".estado");
  icon.textContent =
    estadoActual === "bloqueado" ? "🔒" :
    estadoActual === "desbloqueado" ? "🔓" : "✅";
}

function toggleRamo(ramo) {
  const estadoActual = estado[ramo.id];
  const nuevoEstado = estadoActual === "aprobado" ? "desbloqueado" : "aprobado";
  estado[ramo.id] = nuevoEstado;

  const div = document.getElementById(ramo.id);
  actualizarEstadoVisual(div, nuevoEstado);

  if (ramo.desbloquea) {
    ramo.desbloquea.forEach(id => {
      if (estado[id] !== "aprobado") {
        estado[id] = nuevoEstado === "aprobado" ? "desbloqueado" : "bloqueado";
        const bloque = document.getElementById(id);
        if (bloque) actualizarEstadoVisual(bloque, estado[id]);
      }
    });
  }
}

document.getElementById("toggle-theme").addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked);
});

ramos.forEach(r => estado[r.id] = r.desbloquea.length > 0 ? "bloqueado" : "desbloqueado");
renderizar();
