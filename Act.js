const DOCENTES = [
  { nombre: "Yesenia López",    iniciales: "YL", nivel: "prepa",    materias: "Kinder y PreKinder",                           link: "" },
  { nombre: "Claudia Duarte",   iniciales: "CD", nivel: "prepa",    materias: "Preparatoria",                                 link: "" },
  { nombre: "Yaqueline Ixcoy",  iniciales: "YI", nivel: "primaria", materias: "Primero Primaria",                             link: "" },
  { nombre: "Sandra Maldonado", iniciales: "SM", nivel: "primaria", materias: "Segundo Primaria",                             link: "" },
  { nombre: "Amarilis Damian",  iniciales: "AD", nivel: "primaria", materias: "Tercero Primaria",                             link: "" },
  { nombre: "Sara Pascual",     iniciales: "SP", nivel: "primaria", materias: "Cuarto Primaria",                              link: "" },
  { nombre: "Sandra del Valle", iniciales: "SV", nivel: "primaria", materias: "Quinto Primaria",                              link: "" },
  { nombre: "Mirla Sabán",      iniciales: "MS", nivel: "primaria", materias: "Sexto Primaria",                               link: "" },
  { nombre: "Debora Estrada",   iniciales: "DE", nivel: "primaria", materias: "Inglés — Primaria, Preprimaria y Básicos",     link: "" },
  { nombre: "Ruth Gómez",       iniciales: "RG", nivel: "basicos",  materias: "Matemáticas",                                  link: "" },
  { nombre: "Roxana Merlos",    iniciales: "RM", nivel: "basicos",  materias: "Lengua y Literatura",                          link: "" },
  { nombre: "Brayan Ixcoy",     iniciales: "BI", nivel: "basicos",  materias: "Estudios Sociales",                            link: "" },
  { nombre: "Hellen Maldonado", iniciales: "HM", nivel: "basicos",  materias: "Computación · Seminario · Otros",              link: "" },
  { nombre: "Sucely García",    iniciales: "SG", nivel: "basicos",  materias: "Expresión Artística",                          link: "" },
  { nombre: "Thelma Say",       iniciales: "TS", nivel: "basicos",  materias: "Educación Física",                             link: "" },
  { nombre: "Wendy Molina",     iniciales: "WM", nivel: "basicos",  materias: "Contabilidad",                                 link: "" },
  { nombre: "Kimberly López",   iniciales: "KL", nivel: "basicos",  materias: "Ciencias Naturales · Biología · Química",      link: "" },
  { nombre: "Josselin López",   iniciales: "JL", nivel: "basicos",  materias: "Idioma Inglés",                                link: "" },
  { nombre: "Keneth López",     iniciales: "KL", nivel: "basicos",  materias: "TICS · Laboratorio",                           link: "" },
];

const LABELS = { prepa: "Preprimaria", primaria: "Primaria", basicos: "Básicos" };

const ICON_DOOR = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8"/><path d="M18 9l3 3-3 3"/><path d="M21 12H9"/></svg>`;

function renderCards(nivel) {
  const grid = document.getElementById("grid");
  const filtered = nivel === "all" ? DOCENTES : DOCENTES.filter(d => d.nivel === nivel);
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty">No se encontraron docentes para este nivel.</div>`;
    return;
  }
  grid.innerHTML = filtered.map(d => `
    <div class="card">
      <div class="card-top">
        <div class="avatar av-${d.nivel}">${d.iniciales}</div>
        <div>
          <div class="card-name">${d.nombre}</div>
          <span class="badge badge-${d.nivel}">${LABELS[d.nivel]}</span>
        </div>
      </div>
      <div class="card-subject">${d.materias}</div>
      <a class="card-btn" href="${d.link}" target="_blank" rel="noopener">
        ${ICON_DOOR} Ingresar
      </a>
    </div>
  `).join("");
}

function filter(nivel, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderCards(nivel);
}

renderCards("all");
