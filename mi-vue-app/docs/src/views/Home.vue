<template>
  <div class="layout">
    <nav v-if="!usuario" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <i class="bi bi-card-checklist me-2 icono-grande"></i> 
          <span class="texto-grande">Priorix</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <router-link to="#" @click="scrollToSection" class="nav-link">Características</router-link>
            </li>

            <li
              class="nav-item dropdown"
              @mouseenter="mostrarDropdown('dropdownAcceder')"
              @mouseleave="ocultarDropdownConDelay('dropdownAcceder')"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownAcceder"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Acceder
              </a>
              <ul 
                  class="dropdown-menu dropdown-menu-end ajustar-menu"
                  aria-labelledby="dropdownAcceder"
                  @mouseenter="cancelarOcultamiento"
                  @mouseleave="ocultarDropdownConDelay('dropdownAcceder')"
                >
                  <li><router-link to="/auth" class="dropdown-item">Iniciar Sesión</router-link></li>
                  <li><router-link to="/login" class="dropdown-item">Registrarse</router-link></li>
                </ul>

            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="carouselExampleIndicators" v-if="!usuario" class="carousel slide mt-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/slide0.png" class="d-block w-100" alt="Imagen 1">
        </div>
        <div class="carousel-item">
          <img src="../assets/slide1.png" class="d-block w-100" alt="Imagen 2">
        </div>
        <div class="carousel-item">
          <img src="../assets/slide2.png" class="d-block w-100" alt="Imagen 3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


<div v-if="!usuario" class="container-fluid mt-5 pt-5 position-relative">
  <img src="../assets/img_bg.png" class="img-fluid" alt="Imagen de fondo">
  <div class="d-flex justify-content-between text-container position-absolute top-10 start-0 w-100 px-5">
    <h2 class="bg-opacity-50 p-3 rounded text-black text-start">"Convierte tus tareas en <br> logros con Priorix"</h2>
    <h2 class="bg-opacity-50 p-3 rounded text-black text-center">"La herramienta definitiva para organizar tu vida."</h2>
    <h2 class="bg-opacity-50 p-3 rounded text-black text-end">"Revoluciona tu forma de gestionar el tiempo."</h2>
  </div>
</div>

<br><br><br><br><br><br><br>

<div class="container-fluid mt-4 pt-5">
  <div class="text-container d-flex flex-column flex-md-row align-items-center">
    <div class="mb-4 mt-3">
      <p class="bg-opacity-50 p-4 rounded text-start" style="color: red; margin-bottom: 0;"><strong>Despeja tu mente</strong></p>
      <h1 class="bg-opacity-50 p-3 rounded text-black text-start" style="margin-top: 0;">Captura tareas a la <br>velocidad del pensamiento</h1>
      <h2 class="bg-opacity-50 p-3 rounded text-black text-start">Hemos pasado más de una década refinando<br> Priorix para que sea una extensión de tu cerebro.<br> Captura y organiza tareas al instante usando <br> lenguaje coloquial y fluido.</h2>
    </div>

    <div class="mt-3" style="max-width: 100%; flex-shrink: 0;">
      <img src="../assets/img1.png" class="img-fluid" alt="Imagen" style="width: 90%; max-width: 550px; margin-left: 40px; margin-top: 15px;">
    </div>
  </div>
</div>

<br><br><br><br><br>

<div class="container-fluid mt-4 pt-5">
  <div id="text-container-planificacion" class="text-container d-flex flex-column flex-md-row align-items-center">

    <div class="mb-4 mt-3">
      <p class="bg-opacity-50 p-4 rounded text-start" style="color:blue; margin-bottom: 0;"><strong>Planifica con confianza</strong></p>
      <h1 class="bg-opacity-50 p-3 rounded text-black text-start" style="margin-top: 0;">Simplifica la planificación</h1>
      <h2 class="bg-opacity-50 p-3 rounded text-black text-start">Aprovecha tu tiempo al máximo. Establece fechas<br>de vencimiento, visualiza tu semana en vista de<br>calendario y programa tareas periódicas muy<br>fácilmente.</h2>
    </div>


    <div class="mt-3" style="max-width: 100%; flex-shrink: 0;">
      <img src="../assets/img2.png" class="img-fluid" alt="Imagen" style="width: 90%; max-width: 550px; margin-left: 40px; margin-top: 15px;">
    </div>
  </div>
</div>


<br><br><br><br><br>


<div class="container-fluid mt-4 pt-5">
  <div id="text-container-planificacion1" class="text-container d-flex flex-column flex-md-row align-items-center">

    <div class="mb-4 mt-3">
      <p class="bg-opacity-50 p-4 rounded text-start" style="color: purple; margin-bottom: 0;"><strong>Convierte tus ideas</strong></p>
      <h1 class="bg-opacity-50 p-3 rounded text-black text-start" style="margin-top: 0;">Optimiza tu flujo de trabajo</h1>
      <h2 class="bg-opacity-50 p-3 rounded text-black text-start">Captura rápidamente lo que necesitas hacer y <br>mantenlo todo en un solo lugar. Priorix te ayuda a<br>organizar tus pendientes de manera sencilla<br>permitiéndote enfocarte en completar tus tareas.</h2>
    </div>

    <div class="mt-3" style="max-width: 100%; flex-shrink: 0;">
      <img src="../assets/img3.png" class="img-fluid" alt="Imagen" style="width: 90%; max-width: 550px; margin-left: 40px; margin-top: 15px;">
    </div>
  </div>
</div>



<div class="full-width-container" v-if="!usuario">
  <img src="../assets/img4.png" class="full-width-image" alt="Imagen de ancho completo">
  <div class="overlay-text">
    <h1>No dejes que tus ideas se pierdan</h1>
    <p>"Cada gran logro comienza con una tarea bien organizada. Convierte tus pensamientos en acciones y da el primer paso hacia tus metas."</p>
  </div>
</div>


    <footer class="footer">
      <p class="text-white mb-0">
        By using <strong>Priorix</strong> you accept our 
        <a href="#" class="text-primary">Terms of Service</a> and 
        <a href="#" class="text-primary">Privacy Policy</a>.
      </p>
    </footer>
  </div>
</template>

<script>
// Importar la función desde un archivo separado
import { scrollToSection } from './scroll.js';

export default {
  methods: {
    scrollToSection
  }
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import * as bootstrap from "bootstrap"; 


const usuario = ref(null);
let ocultarTimeout = null;

onAuthStateChanged(auth, (user) => {
  usuario.value = user ? { ...user } : null;
  console.log("Usuario actualizado:", usuario.value);
});

onMounted(() => {
  document.querySelectorAll('.dropdown-toggle').forEach(dropdown => {
    new bootstrap.Dropdown(dropdown);
  });

  new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'));
});

const mostrarDropdown = (id) => {
  clearTimeout(ocultarTimeout);
  const dropdown = new bootstrap.Dropdown(document.getElementById(id));
  dropdown.show();
};

const ocultarDropdownConDelay = (id) => {
  ocultarTimeout = setTimeout(() => {
    ocultarDropdown(id);
  }, 300);
};

const ocultarDropdown = (id) => {
  const dropdownElement = document.getElementById(id);
  if (dropdownElement) {
    const dropdownMenu = dropdownElement.nextElementSibling;
    if (dropdownMenu) {
      dropdownMenu.classList.remove("show");
    }
  }
};

const cancelarOcultamiento = () => {
  clearTimeout(ocultarTimeout);
};
</script>
<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.carousel {
    height: 50vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
}

.carousel-inner, .carousel-item {
    height: 100vh;
}

.carousel-item img {
    height: 60vh;
    width: 100%;
    object-fit: cover;
}

.navbar {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 15px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.footer {
  background: #212529;
  color: white;
  text-align: center;
  padding: 15px;
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
}

.text-container {
  top: 80%;
  transform: translateY(-50%);
}

.text-container h2 {
  flex: 1;
  margin: 0 10px;
  font-size: 1.5rem;
}



.img-fluid {
  margin-top: 500px;
  width: 100%;
  height: auto; 
}

.container-fluid {
  padding: 0;
  margin: 0; 
}

.text-container h2 {
  font-size: 1.5rem;
  text-align: left;
  text-justify: distribute;
}

.full-width-image {
  width: 100vw; 
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
  object-fit: cover;
  position: absolute;
  left: 0;
  margin-top: -100px;
}

.full-width-container {
  width: 100vw;
  height: auto;
}

.overlay-text {
  position: absolute;
  top: 3500px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  font-size: 1.5rem;
}





@media (max-width: 1200px) {
  .text-container h2 {
    font-size: 1.3rem;
    margin-top: 95px;
  }
  .text-container .mb-4 {
      margin-top: 200px !important;
    }
    #text-container-planificacion {
    margin-top: -400px !important;
  }
  .full-width-image {
  margin-top: -300px;
}


#text-container-planificacion1 {
    margin-top: 190px !important;
  }
}


@media (max-width: 920px) {
  #text-container-planificacion1 {
    margin-top: -250px !important;
  }

  .overlay-text {
  position: absolute;
  top: 3500px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center, justify;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  font-size: 0.8rem;
}
}



@media (max-width: 768px) {
  .text-container h2 {
    font-size: 0.95rem;
    margin-top: 120px;
  }
  .text-container .mb-4 {
      margin-top: 400px !important;
    }

    #text-container-planificacion {
    margin-top: -600px !important;
  }

  #text-container-planificacion1 {
    margin-top: -550px !important;
  }
  .full-width-image {
  margin-top: -400px;
}

.overlay-text {
  position: absolute;
  top: 3830px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center, justify;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  font-size: 0.8rem;
}
}

@media (max-width: 576px) {
  .text-container h2 {
    font-size: 0.9rem;
    margin-top: 110px;
    margin-left: 5px;
  }
  .text-container .mb-4 {
      margin-top: 400px !important;
    }

    #text-container-planificacion {
    margin-top: -600px !important;
  }

  #text-container-planificacion1 {
    margin-top: -600px !important;
  }
  .full-width-image {
  margin-top: -550px;
}

.overlay-text {
  position: absolute;
  top: 3400px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  font-size: 0.8rem;
}

}

@media (max-width: 400px) {
  .overlay-text {
    top: 2120px;
    width: 98%;
    padding: 8px;
  }
}
</style>
