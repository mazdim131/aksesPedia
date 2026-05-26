const navbar = document.getElementById('navbar');
navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary mt-3">
  <div class="container-fluid rounded-5">
    <div class="d-flex">
        <img src="/src/assets/logo/logo.png" class="ms-5" style="height: 30px;">
        <a class="navbar-brand text-white" href="/index.html">ksesPedia</a>
    </div>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-flex nav-content collapse navbar-collapse" id="navbarNav">
      <ul class="justify-content-end ms-auto navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <div class="d-flex btn btn-dark">

          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;