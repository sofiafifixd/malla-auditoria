const ramos = [
  {
    id: 'intro-ciencias',
    nombre: 'Intro. ciencias empresariales y ética',
    nivel: 'I semestre',
    dependencias: [],
    desbloquea: ['fund-conta-i', 'aspectos-legales', 'trabajo-equipo', 'taller-integracion-i']
  },
  {
    id: 'tic',
    nombre: 'Tecnologías de información',
    nivel: 'I semestre',
    dependencias: [],
    desbloquea: ['computacion']
  },
  {
    id: 'comunicacion-i',
    nombre: 'Comunicación empresarial I',
    nivel: 'I semestre',
    dependencias: [],
    desbloquea: ['comunicacion-ii']
  },
  {
    id: 'aprendizaje',
    nombre: 'Aprendizaje estratégico',
    nivel: 'I semestre',
    dependencias: [],
    desbloquea: ['trabajo-equipo']
  },
  {
    id: 'vision-i',
    nombre: 'Visión sist. organización I',
    nivel: 'I semestre',
    dependencias: [],
    desbloquea: ['vision-ii', 'trabajo-equipo', 'taller-integracion-i']
  },
  {
    id: 'logico-matematico',
    nombre: 'Pensamiento lógico matemático',
    nivel: 'I semestre',
    dependencias: [],
    desbloquea: ['matematicas-i']
  },
  {
    id: 'fund-conta-i',
    nombre: 'Fundamentos contabilidad I',
    nivel: 'II semestre',
    dependencias: ['intro-ciencias'],
    desbloquea: ['taller-integracion-ii', 'fund-conta-ii', 'costeo']
  },
  {
    id: 'comunicacion-ii',
    nombre: 'Comunicación empresarial II',
    nivel: 'II semestre',
    dependencias: ['comunicacion-i'],
    desbloquea: []
  },
  // Agrega más ramos aquí siguiendo el mismo formato...
];

const mallaDiv = document.getElementById('malla');

function renderRamos() {
  mallaDiv.innerHTML = '';
  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    div.id = ramo.id;

    const aprobado = localStorage.getItem(ramo.id) === 'aprobado';
    const bloqueado = ramo.dependencias.length && !ramo.dependencias.every(d => localStorage.getItem(d) === 'aprobado');

    if (aprobado) div.classList.add('aprobado');
    else if (bloqueado) div.classList.add('bloqueado');

    div.innerHTML = `
      <div class="nombre">${ramo.nombre}</div>
      <div class="nivel">${ramo.nivel}</div>
    `;

    div.addEventListener('click', () => {
      if (div.classList.contains('bloqueado')) return;
      localStorage.setItem(ramo.id, 'aprobado');
      renderRamos();
    });

    mallaDiv.appendChild(div);
  });
}

window.addEventListener('load', renderRamos);
