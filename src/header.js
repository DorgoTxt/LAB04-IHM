const Header= (header) => {
    return (<header class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">Diego PC</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active text-light" aria-current="page" href="#">Inicio</a>
          <a class="nav-link text-light" href="#">Nosotros</a>
          <a class="nav-link text-light" href="#">Precios</a>
        </div>
      </div>
    </div>
  </header>);
}

export default Header;

