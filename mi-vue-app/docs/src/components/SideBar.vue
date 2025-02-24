<template>
  <div class="d-flex">
    <!-- Barra lateral para pantallas grandes -->
    <div class="sidebar bg-dark text-white p-4 d-none d-xxl-block" style="width: 250px; height: 100vh; position: fixed;">
      <div class="container-fluid">
        <a class="navbar-brand fs-3 fw-bold" href="/">
          <i class="bi bi-card-checklist me-2 fs-2"></i> Priorix
        </a>
      </div>

      <ul class="list-unstyled">
        <li><router-link to="/" class="link-item">🏠 Inicio</router-link></li>
        <li><router-link to="/tareas" class="link-item">📋 Tareas</router-link></li>
        <li>
          <button @click="logout" class="btn btn-danger w-100">Salir</button>
        </li>
      </ul>
    </div>

    <!-- Botón para abrir la barra lateral en pantallas pequeñas -->
    <button class="btn btn-primary d-block d-xxl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style="background-color: black; color: white;">
      <i class="bi bi-list"></i> <!-- Icono de la barra lateral -->
    </button>

    <!-- Offcanvas para pantallas pequeñas -->
    <div class="bg-dark text-white offcanvas offcanvas-start d-xxl-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" ref="offcanvas">
      <div class="offcanvas-header">
        <div class="container-fluid">
          <a class="navbar-brand fs-3 fw-bold" href="/">
            <i class="bi bi-card-checklist me-2 fs-2"></i> Priorix
          </a>
        </div>
        <!-- Este es el botón de cerrar (X) -->
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" @click="closeOffcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-unstyled">
          <li><router-link to="/" class="link-item">🏠 Inicio</router-link></li>
          <li><router-link to="/tareas" class="link-item">📋 Tareas</router-link></li>
          <li>
            <button @click="logout" class="btn btn-danger w-100">Salir</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const router = useRouter();

// Método de cierre de sesión
const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('usuario');
    router.push('/');
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

// Función para manejar el cierre del offcanvas y quitar el fondo negro
const closeOffcanvas = () => {
  const offcanvasElement = document.getElementById('offcanvasExample');
  const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
  offcanvas.hide(); // Cierra el offcanvas

  // Elimina el fondo negro manualmente
  const backdrop = document.querySelector('.offcanvas-backdrop');
  if (backdrop) {
    backdrop.remove();  // Eliminamos el fondo oscuro
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;
}

.link-item {
  text-decoration: none;
  color: white;
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
}

.link-item:hover {
  background-color: #4a4a4a;
  color: #f0f0f0;
}

/* Controlar visibilidad del sidebar */
@media (max-width: 2050px) {
  .sidebar {
    display: none;
  }

  .d-xxl-none {
    display: block !important;
  }
}
</style>
