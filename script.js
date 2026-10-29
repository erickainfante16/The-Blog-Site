// Navbar y footer compartidos: se escriben una sola vez y se insertan en todas las páginas.
const pagina = document.body.dataset.pagina;

const enlaces = [
  ["index", "index.html", "Inicio"],
  ["quienes", "QuienesSomos.html", "¿Quiénes somos?"],
  ["contacto", "contacto.html", "Contacto"]
];

const items = enlaces.map(([id, href, texto]) => {
  const activo = id === pagina;
  return `<li class="nav-item"><a class="nav-link${activo ? " active" : ""}"${activo ? ' aria-current="page"' : ""} href="${href}">${texto}</a></li>`;
}).join("");

const navbar = `
<nav class="navbar navbar-expand-lg navbar-dark barra sticky-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">Roadmap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Abrir menú">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">${items}</ul>
    </div>
  </div>
</nav>`;

const footer = `
<footer class="pie mt-auto">
  <div class="container">
    <div class="row g-4">
      <div class="col-12 col-md-4">
        <h5>Proyecto</h5>
        <p class="mb-0">JAVAWOKIS_e-commerce</p>
      </div>
      <div class="col-6 col-md-4">
        <h5>Autores</h5>
        <ul><li>Equipo JAVAWOKIS</li></ul>
      </div>
      <div class="col-6 col-md-4">
        <h5>Contacto</h5>
        <ul><li><a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a></li></ul>
      </div>
    </div>
    <hr>
    <p class="copyright">&copy; 2026 MiSitio. Todos los derechos reservados.</p>
  </div>
</footer>`;

document.getElementById("navbar").outerHTML = navbar;
document.getElementById("footer").outerHTML = footer;