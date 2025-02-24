<template>
  <div v-if="cargando" class="text-center mt-5">⏳ Cargando...</div>

  <div v-else>
    <SideBar v-if="usuario" :usuario="usuario" :logout="logout" class="d-none d-md-block" />

    <!-- Botón para abrir la barra lateral en pantallas pequeñas -->
    <button
      class="btn btn-primary d-block d-md-none"
      type="button"
      @click="toggleOffcanvas"
      style="background-color: black; color: white;"
    >
      <i class="bi bi-list"></i> <!-- Icono de la barra lateral -->
    </button>

    <!-- Offcanvas solo para pantallas pequeñas -->
    <div
      class="offcanvas offcanvas-start d-md-none"
      tabindex="-1"
      id="offcanvasSidebar"
      aria-labelledby="offcanvasSidebarLabel"
      ref="offcanvas"
    >
      <div  class="offcanvas-header bg-dark text-white">
        <a class="navbar-brand fs-3 fw-bold" href="/">
            <i class="bi bi-card-checklist me-2 fs-2"></i> Priorix
          </a>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="toggleOffcanvas"
        ></button>
      </div>
      <div class="offcanvas-body bg-dark text-white">
        <ul class="list-unstyled">
          <li><router-link to="/" class="link-item">🏠 Inicio</router-link></li>
          <li><router-link to="/tareas" class="link-item">📋 Tareas</router-link></li>
          <li>
            <button @click="logout" class="btn btn-danger w-100">Salir</button>
          </li>
        </ul>
      </div>
    </div>

    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { Offcanvas } from "bootstrap";
import SideBar from "./components/SideBar.vue";

const usuario = ref(null);
const cargando = ref(true);
const router = useRouter();
const isOffcanvasOpen = ref(false);
const offcanvas = ref(null);

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    usuario.value = user;
    cargando.value = false;
  });

  // Manejar el evento de cierre del offcanvas
  const offcanvasElement = offcanvas.value;
  if (offcanvasElement) {
    offcanvasElement.addEventListener("hidden.bs.offcanvas", () => {
      document.body.classList.remove("offcanvas-open");
    });
  }
});

const logout = async () => {
  const offcanvasElement = document.getElementById("offcanvasSidebar");
  if (offcanvasElement) {
    const offcanvasInstance = Offcanvas.getInstance(offcanvasElement) || new Offcanvas(offcanvasElement);
    offcanvasInstance.hide();
  }

  await signOut(auth);
  usuario.value = null;
  isOffcanvasOpen.value = false;

  setTimeout(() => {
    document.activeElement.blur();
    requestAnimationFrame(() => document.activeElement.blur());
  }, 100);

  router.push("/");

  // Recargar la página después de cerrar sesión
  setTimeout(() => {
    window.location.reload();
  }, 100);
};

const toggleOffcanvas = () => {
  isOffcanvasOpen.value = !isOffcanvasOpen.value;
  const offcanvasElement = offcanvas.value;
  const offcanvasInstance = new Offcanvas(offcanvasElement);

  if (isOffcanvasOpen.value) {
    offcanvasInstance.show();
  } else {
    offcanvasInstance.hide();
  }
};
</script>

<style scoped>
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
</style>
