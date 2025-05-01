<script>
  let menuActive = false;

  function toggleMenu() {
    menuActive = !menuActive;
  }
</script>

<style>
  nav {
    background-color: #4CAF50;
    color: white;
    padding: 1rem 2rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  nav img {
    height: 40px;
    width: auto;
  }

  /* Contenedor de los enlaces */
  .links {
    display: flex;
    gap: 1.5rem;
  }

  .links a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }

  .links a:hover {
    color: #FF9F00;
  }

  body {
    margin: 0;
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    .links {
      display: none;
      flex-direction: column;
      width: 100%;
      padding-top: 0.5rem;
    }

    .links.active {
      display: flex;
    }

    .links a {
      padding: 0.5rem 0;
    }

    /* Menú hamburguesa */
    .menu-toggle {
      display: block;
      font-size: 2rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }
  }

  .menu-toggle {
    display: none; /* Oculto en pantallas grandes */
  }

  .menu-toggle div {
    width: 30px;
    height: 4px;
    background-color: white;
    margin: 6px 0;
  }
</style>

<nav>
  <img src="./logo.png" alt="Logo1" />

  <button class="menu-toggle" on:click={toggleMenu}>
    <div></div>
    <div></div>
    <div></div>
  </button>

  <!-- Enlaces del navbar -->
  <div class="links" class:active={menuActive}>
    <a href="#">Inicio</a>
    <a href="#">Calculadora IMC</a>
  </div>
</nav>
