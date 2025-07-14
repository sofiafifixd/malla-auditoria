const mallaData = [
  {
    nombre: "Introducción a las ciencias empresariales y a la ética profesional",
    id: "intro-empresariales",
    desbloquea: [
      "fund-contabilidad-1", "aspectos-legales", "trabajo-equipo", "taller-integracion-1"
    ]
  },
  {
    nombre: "Fundamentos de la contabilidad I",
    id: "fund-contabilidad-1",
    desbloquea: [
      "taller-integracion-2", "fund-contabilidad-2", "sistemas-costeo"
    ]
  },
  {
    nombre: "Aspectos legales de la empresa",
    id: "aspectos-legales",
    desbloquea: ["normativa-empresarial"]
  },
  {
    nombre: "Taller de integración ciclo básico I",
    id: "taller-integracion-1",
    desbloquea: ["taller-integracion-2"]
  },
  {
    nombre: "Taller de integración ciclo básico II",
    id: "taller-integracion-2",
    desbloquea: ["taller-integracion-3"]
  },
  {
    nombre: "Taller de integración ciclo básico III",
    id: "taller-integracion-3",
    desbloquea: ["taller-perfil-1"]
  },
  {
    nombre: "Taller de integración perfil uv I",
    id: "taller-perfil-1",
    desbloquea: ["taller-perfil-2", "practica-prof-1", "proyecto-1"]
  },
  {
    nombre: "Taller de integración perfil uv II",
    id: "taller-perfil-2",
    desbloquea: ["taller-perfil-3"]
  },
  {
    nombre: "Taller de integración perfil uv III",
    id: "taller-perfil-3",
    desbloquea: []
  },
  {
    nombre: "Trabajo en equipo y gestión de compromisos",
    id: "trabajo-equipo",
    desbloquea: []
  },
  {
    nombre: "Fundamentos de la contabilidad II",
    id: "fund-contabilidad-2",
    desbloquea: ["taller-integracion-3", "cont-sociedad", "intro-auditoria"]
  },
  {
    nombre: "Contabilidad de sociedad anónimas",
    id: "cont-sociedad",
    desbloquea: ["normativa-contable-1", "taller-perfil-1", "intro-finanzas"]
  },
  {
    nombre: "Práctica profesional I",
    id: "practica-prof-1",
    desbloquea: ["practica-prof-2", "taller-ciclo-profesional"]
  },
  {
    nombre: "Taller de integración ciclo profesional",
    id: "taller-ciclo-profesional",
    desbloquea: []
  },
  {
    nombre: "Práctica profesional II",
    id: "practica-prof-2",
    desbloquea: []
  }
];

const aprobado = new Set();

function crearRamos() {
  const contenedor = document.getElementById('malla');
  mallaData.forEach(ramo => {
    const div = document.createElement('div');
    div.className = 'ramo';
    div.id = ramo.id;
    div.innerHTML = `<h3>${ramo.nombre}</h3><small>ID: ${ramo.id}</small>`;
    div.addEventListener('click', () => aprobarRamo(ramo));
    contenedor.appendChild(div);
  });
}

function aprobarRamo(ramo) {
  if (aprobado.has(ramo.id)) return;
  aprobado.add(ramo.id);
  const div = document.getElementById(ramo.id);
  div.classList.add('aprobado');

  if (ramo.desbloquea) {
    ramo.desbloquea.forEach(id => {
      const bloque = document.getElementById(id);
      if (bloque) bloque.style.opacity = '1';
    });
  }
}

window.onload = crearRamos;
