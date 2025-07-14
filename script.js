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
  {
    nombre: "Taller de integración ciclo básico II",
    id: "taller-de-integracion-ciclo-basico-ii",
    semestre: "Segundo Año - III semestre:",
    desbloquea: ["taller-de-integracion-ciclo-basico-iii"]
  },
  {
    nombre: "Fundamentos de la contabilidad II",
    id: "fundamentos-de-la-contabilidad-ii",
    semestre: "Segundo Año - III semestre:",
    desbloquea: [
      "taller-de-integracion-ciclo-basico-iii",
      "contabilidad-de-sociedad-anonimas",
      "introduccion-a-la-auditoria"
    ]
  },
  {
    nombre: "Sistemas de costeo",
    id: "sistemas-de-costeo",
    semestre: "Segundo Año - III semestre:",
    desbloquea: ["contabilidad-gerencial", "taller-de-integracion-ciclo-basico-iii"]
  },
  {
    nombre: "Normativa empresarial",
    id: "normativa-empresarial",
    semestre: "Segundo Año - III semestre:",
    desbloquea: ["impuestos-i"]
  },
  {
    nombre: "Emprendimiento e innovación",
    id: "emprendimiento-e-innovacion",
    semestre: "Segundo Año - III semestre:",
    desbloquea: []
  },
  {
    nombre: "Matemáticas aplicadas II",
    id: "matematicas-aplicadas-ii",
    semestre: "Segundo Año - III semestre:",
    desbloquea: ["microeconomia"]
  },
  {
    nombre: "Gestión de recursos humanos",
    id: "gestion-de-recursos-humanos",
    semestre: "Segundo Año - III semestre:",
    desbloquea: []
  },
  {
    nombre: "Computación",
    id: "computacion",
    semestre: "Segundo Año - IV semestre:",
    desbloquea: ["sistemas-de-informacion-y-control-de-gestion"]
  },
  {
    nombre: "Taller de integración ciclo básico III",
    id: "taller-de-integracion-ciclo-basico-iii",
    semestre: "Segundo Año - IV semestre:",
    desbloquea: ["taller-de-integracion-perfil-uv-i"]
  },
  {
    nombre: "Contabilidad de sociedad anónimas",
    id: "contabilidad-de-sociedad-anonimas",
    semestre: "Segundo Año - IV semestre:",
    desbloquea: [
      "normativa-contable-i",
      "taller-de-integracion-perfil-uv-i",
      "introduccion-a-las-finanzas"
    ]
  },
  {
    nombre: "Introducción a la auditoria",
    id: "introduccion-a-la-auditoria",
    semestre: "Segundo Año - IV semestre:",
    desbloquea: [
      "fundamentos-de-auditoria",
      "sistemas-de-informacion-y-control-de-gestion"
    ]
  },
  {
    nombre: "Inglés I",
    id: "ingles-i",
    semestre: "Segundo Año - IV semestre:",
    desbloquea: ["ingles-ii"]
  },
  {
    nombre: "Estadísticas",
    id: "estadisticas",
    semestre: "Segundo Año - IV semestre:",
    desbloquea: ["metodos-cuantitativos", "modelos-de-decision"]
  },
  {
    nombre: "Microeconomía",
    id: "microeconomia",
    semestre: "Segundo Año - IV semestre:",
    desbloquea: ["macroeconomia"]
  },
  {
    nombre: "Macroeconomía",
    id: "macroeconomia",
    semestre: "Tercer Año - V semestre:",
    desbloquea: []
  },
  {
    nombre: "Normativa Contable I",
    id: "normativa-contable-i",
    semestre: "Tercer Año - V semestre:",
    desbloquea: ["normativa-contable-ii"]
  },
  {
    nombre: "Impuestos I",
    id: "impuestos-i",
    semestre: "Tercer Año - V semestre:",
    desbloquea: ["tributacion-aplicada-i"]
  },
  {
    nombre: "Inglés II",
    id: "ingles-ii",
    semestre: "Tercer Año - V semestre:",
    desbloquea: ["ingles-iii"]
  },
  {
    nombre: "Modelos de decisión",
    id: "modelos-de-decision",
    semestre: "Tercer Año - V semestre:",
    desbloquea: []
  },
  {
    nombre: "Marketing",
    id: "marketing",
    semestre: "Tercer Año - V semestre:",
    desbloquea: ["gestion-de-operaciones"]
  }
   {
    nombre: "Métodos cuantitativos",
    id: "metodos-cuantitativos",
    semestre: "Tercer Año - VI semestre:",
    desbloquea: ["practica-profesional-i", "proyecto-de-investigacion-i"]
  },
  {
    nombre: "Taller de integración perfil uv I",
    id: "taller-de-integracion-perfil-uv-i",
    semestre: "Tercer Año - VI semestre:",
    desbloquea: [
      "taller-de-integracion-perfil-uv-ii",
      "practica-profesional-i",
      "proyecto-de-investigacion-i"
    ]
  },
  {
    nombre: "Normativa Contable II",
    id: "normativa-contable-ii",
    semestre: "Tercer Año - VI semestre:",
    desbloquea: [
      "contabilidad-superior-i",
      "practica-profesional-i",
      "proyecto-de-investigacion-i"
    ]
  },
  {
    nombre: "Tributación Aplicada I",
    id: "tributacion-aplicada-i",
    semestre: "Tercer Año - VI semestre:",
    desbloquea: [
      "impuestos-ii",
      "practica-profesional-i",
      "proyecto-de-investigacion-i"
    ]
  },
  {
    nombre: "Inglés III",
    id: "ingles-iii",
    semestre: "Tercer Año - VI semestre:",
    desbloquea: ["ingles-iv", "practica-profesional-i", "proyecto-de-investigacion-i"]
  },
  {
    nombre: "Sistemas de información y control de gestión",
    id: "sistemas-de-informacion-y-control-de-gestion",
    semestre: "Tercer Año - VI semestre:",
    desbloquea: [
      "auditoria-de-sistemas-de-informacion",
      "planificacion-y-control-de-gestion-estrategica",
      "practica-profesional-i",
      "proyecto-de-investigacion-i"
    ]
  },
  {
    nombre: "Contabilidad gerencial",
    id: "contabilidad-gerencial",
    semestre: "Cuarto Año - VII semestre:",
    desbloquea: ["gestion-de-operaciones"]
  },
  {
    nombre: "Taller de integración perfil uv II",
    id: "taller-de-integracion-perfil-uv-ii",
    semestre: "Cuarto Año - VII semestre:",
    desbloquea: ["taller-de-integracion-perfil-uv-iii"]
  },
  {
    nombre: "Introducción a las finanzas",
    id: "introduccion-a-las-finanzas",
    semestre: "Cuarto Año - VII semestre:",
    desbloquea: [
      "finanzas-avanzadas",
      "formulacion-y-evaluacion-de-proyectos",
      "planificacion-y-control-de-gestion-estrategica",
      "finanzas-a-largo-plazo"
    ]
  },
  {
    nombre: "Fundamentos de auditoria",
    id: "fundamentos-de-auditoria",
    semestre: "Cuarto Año - VII semestre:",
    desbloquea: ["auditoria-de-sistemas-de-informacion", "auditoria-de-gestion"]
  },
  {
    nombre: "Impuestos II",
    id: "impuestos-ii",
    semestre: "Cuarto Año - VII semestre:",
    desbloquea: ["tributacion-aplicada-ii"]
  },
  {
    nombre: "Proyecto de investigación I",
    id: "proyecto-de-investigacion-i",
    semestre: "Cuarto Año - VII semestre:",
    desbloquea: ["proyecto-de-investigacion-ii"]
  },
  {
    nombre: "Inglés IV",
    id: "ingles-iv",
    semestre: "Cuarto Año - VII semestre:",
    desbloquea: []
  },
  {
    nombre: "Gestión de operaciones",
    id: "gestion-de-operaciones",
    semestre: "Cuarto Año - VIII semestre:",
    desbloquea: ["formulacion-y-evaluacion-de-proyectos"]
  },
  {
    nombre: "Taller de integración perfil uv III",
    id: "taller-de-integracion-perfil-uv-iii",
    semestre: "Cuarto Año - VIII semestre:",
    desbloquea: []
  },
  {
    nombre: "Contabilidad superior I",
    id: "contabilidad-superior-i",
    semestre: "Cuarto Año - VIII semestre:",
    desbloquea: ["contabilidad-superior-ii"]
  },
  {
    nombre: "Finanzas a largo plazo",
    id: "finanzas-a-largo-plazo",
    semestre: "Cuarto Año - VIII semestre:",
    desbloquea: []
  },
  {
    nombre: "Auditoría de gestión",
    id: "auditoria-de-gestion",
    semestre: "Cuarto Año - VIII semestre:",
    desbloquea: []
  },
  {
    nombre: "Tributación aplicada II",
    id: "tributacion-aplicada-ii",
    semestre: "Cuarto Año - VIII semestre:",
    desbloquea: ["gestion-tributaria"]
  },
  {
    nombre: "Proyecto de investigación II",
    id: "proyecto-de-investigacion-ii",
    semestre: "Cuarto Año - VIII semestre:",
    desbloquea: []
  },
  {
    nombre: "Contabilidad superior II",
    id: "contabilidad-superior-ii",
    semestre: "Quinto Año - IX semestre:",
    desbloquea: ["auditoria-de-estados-financieros", "taller-de-integracion-ciclo-profesional"]
  },
  {
    nombre: "Finanzas avanzadas",
    id: "finanzas-avanzadas",
    semestre: "Quinto Año - IX semestre:",
    desbloquea: ["taller-de-integracion-ciclo-profesional"]
  },
  {
    nombre: "Auditoría de sistemas de información",
    id: "auditoria-de-sistemas-de-informacion",
    semestre: "Quinto Año - IX semestre:",
    desbloquea: ["taller-de-integracion-ciclo-profesional"]
  },
  {
    nombre: "Gestión tributaria",
    id: "gestion-tributaria",
    semestre: "Quinto Año - IX semestre:",
    desbloquea: ["taller-de-integracion-ciclo-profesional"]
  },
  {
    nombre: "Práctica profesional I",
    id: "practica-profesional-i",
    semestre: "Quinto Año - IX semestre:",
    desbloquea: ["taller-de-integracion-ciclo-profesional", "practica-profesional-ii"]
  },
  {
    nombre: "Auditoría de estados financieros",
    id: "auditoria-de-estados-financieros",
    semestre: "Quinto Año - X semestre:",
    desbloquea: []
  },
  {
    nombre: "Formulación y evaluación de proyectos",
    id: "formulacion-y-evaluacion-de-proyectos",
    semestre: "Quinto Año - X semestre:",
    desbloquea: []
  },
  {
    nombre: "Planificación y control de gestión estratégica",
    id: "planificacion-y-control-de-gestion-estrategica",
    semestre: "Quinto Año - X semestre:",
    desbloquea: []
  },
  {
    nombre: "Práctica profesional II",
    id: "practica-profesional-ii",
    semestre: "Quinto Año - X semestre:",
    desbloquea: []
  },
  {
    nombre: "Taller de integración ciclo profesional",
    id: "taller-de-integracion-ciclo-profesional",
    semestre: "Quinto Año - X semestre:",
    desbloquea: []
  }
];
