document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <a class="navbar-brand" href="#"><img src="../../Resources/images/HanamiLogo.png" alt="Hanami" style="width: 100px; height: 90px;"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="marcas.html">Marcas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Productos.html">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="graficas.html">Graficas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="categorias.html">Categorias</a>
        </li>
        <li class="nav-item">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </li>
      </ul>
    </div>
  `;
 
});

// custom-script.js
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  navbar.classList.add('fixed-navbar');
});
