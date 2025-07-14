const ramos = [
  {
    nombre: "Introducción a las ciencias empresariales y a la ética profesional",
    id: "intro-empresariales",
    semestre: "Primer Año - I Semestre",
    desbloquea: ["fund-cont-1", "aspectos-legales", "trabajo-equipo", "taller-1"]
  },
  {
    nombre: "Fundamentos de la contabilidad I",
    id: "fund-cont-1",
    semestre: "Primer Año - II Semestre",
    desbloquea: ["taller-2", "fund-cont-2", "costeo"]
  },
  {
    nombre: "Fundamentos de la contabilidad II",
    id: "fund-cont-2",
    semestre: "Segundo Año - III Semestre",
    desbloquea: ["taller-3", "cont-sociedad", "intro-auditoria"]
  },
  {
    nombre: "Taller de integración ciclo básico I",
    id: "taller-1",
    semestre: "Primer Año - II Semestre",
    desbloquea: ["taller-2"]
  },
  {
    nombre: "Taller de integración ciclo básico II",
    id: "taller-2",
    semestre: "Segundo Año - III Semestre",
    desbloquea: ["taller-3"]
  },
  {
    nombre: "Taller de integración ciclo básico III",
    id: "taller-3",
    semestre: "Segundo Año - IV Semestre",
    desbloquea: ["taller-perfil-1"]
  },
  {
    nombre: "Taller de integración perfil uv I",
    id: "taller-perfil-1",
    semestre: "Tercer Año - VI Semestre",
    desbloquea: ["taller-perfil-2"]
  },
  {
    nombre: "Taller de integración perfil uv II",
    id: "taller-perfil-2",
    semestre: "Cuarto Año - VII Semestre",
    desbloquea: ["taller-perfil-3"]
  },
  {
    nombre: "Taller de integración perfil uv III",
    id: "taller-perfil-3",
    semestre: "Cuarto Año - VIII Semestre",
    desbloquea: []
  },
  {
    nombre: "Práctica profesional I",
    id: "practica-1",
    semestre: "Quinto Año - IX Semestre",
    desbloquea: ["practica-2", "taller-prof"]
  },
  {
    nombre: "Práctica profesional II",
    id: "practica-2",
    semestre: "Quinto Año - X Semestre",
    desbloquea: []
  },
  {
    nombre: "Taller de integración ciclo profesional",
    id: "taller-prof",
    semestre: "Quinto Año - X Semestre",
    desbloquea: []
  }
  // Agrega aquí los demás ramos de tu malla...
];

const estado = {}; // { idRamo: 'bloqueado' | 'desbloqueado' | 'aprobado' }

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
    section.innerHTML = `<h2>${semestre}</h2><div class=\"ramos\"></div>`;
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
        actualizarEstadoVisual(document.getElementById(id), estado[id]);
      }
    });
  }
}

document.getElementById("toggle-theme").addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode", e.target.checked);
});

ramos.forEach(r => estado[r.id] = r.desbloquea.length > 0 ? "bloqueado" : "desbloqueado");
renderizar();
