<template>
  <div v-if="cargando" class="text-center mt-5">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
  </div>

  <div v-else :class="{ 'fondo-sin-usuario': !usuario }"></div>
  <div v-else>
    <NavBar v-if="usuario" :usuario="usuario" :logout="logout" />

    <div class="container-fluid py-5" id="main-container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="card shadow-lg border-0 rounded-4 p-4">
            <h1 class="mb-4 text-center text-primary fw-bold">📋Priorix</h1>
            
            <div v-if="usuario" class="mb-3 text-center">
              <p class="fw-bold">📅 Hoy es: {{ fechaActual }}</p>
              <p class="fw-bold">📌 Tienes {{ tareas.length }} tarea(s) pendiente(s)</p>
            </div>
            
            <div v-if="usuario">
              <div class="input-group mb-3">
                <input v-model="tituloTarea" class="form-control rounded-start" placeholder="Título de la tarea..." />
                <input v-model="nuevaTarea" class="form-control" placeholder="Descripción..." />
                <input type="date" v-model="fechaTarea" class="form-control" />
                <select v-model="prioridadTarea" class="form-select">
                  <option value="Alta">Alta 🔥</option>
                  <option value="Media">Media ⚡</option>
                  <option value="Baja">Baja 🍃</option>
                </select>
                <button @click="agregarTarea" class="btn btn-primary" :disabled="!nuevaTarea.trim()">
                  <i class="bi bi-plus-circle"></i>
                </button>
              </div>

              <ul class="list-group">
                <li v-for="tarea in tareas" :key="tarea.id" 
                    class="list-group-item d-flex justify-content-between align-items-center p-3 shadow-sm mb-3 rounded-3"
                    :class="{'completada': tarea.completada, 'fade-out': tarea.animar}">
                  <div class="flex-grow-1">
                    <h5 class="fw-bold">{{ tarea.titulo }}</h5>
                    <p class="mb-1">📅 {{ tarea.fecha }} | 🚦 Prioridad: <span :class="{'text-danger': tarea.prioridad === 'Alta', 'text-warning': tarea.prioridad === 'Media', 'text-success': tarea.prioridad === 'Baja'}">{{ tarea.prioridad }}</span></p>
                    <p class="mb-0">📝 {{ tarea.texto }}</p>
                  </div>
                  <div>
                    <button @click="marcarCompletada(tarea)" class="btn btn-outline-success btn-sm me-2 rounded-circle">
                      <i class="bi bi-check-circle"></i>
                    </button>
                    <button @click="eliminarTarea(tarea.id)" class="btn btn-outline-danger btn-sm rounded-circle">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            <div v-else class="text-center text-warning fw-bold">🔒 Debes iniciar sesión para ver tus tareas.</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

</template>

<script setup>
import { useTareas } from "../composables/useTareas";
import { ref } from "vue";
import confetti from 'canvas-confetti';

const { usuario, tituloTarea, nuevaTarea, fechaTarea, prioridadTarea, tareas, agregarTarea, eliminarTarea } = useTareas();

const fechaActual = ref(new Date().toLocaleDateString());

const marcarCompletada = (tarea) => {
  tarea.completada = true;
  tarea.animar = true;
  setTimeout(() => {
    eliminarTarea(tarea.id);
  }, 1000);

  mostrarConfetti();
};

const mostrarConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ff0', '#0f0', '#00f', '#f0f', '#f90']
  });
};
</script>

<style>
body {
  background-image: url('../assets/bg_fondo.png'); /* Reemplaza con la ruta de tu imagen */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}


.card {
  border-radius: 12px;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo semitransparente */
}

.list-group-item {
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.list-group-item:hover {
  background-color: rgba(248, 249, 250, 0.8);
}

.completada {
  background-color: #28a745 !important;
  color: white;
  text-decoration: line-through;
}

.fade-out {
  opacity: 0;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
  transform: scale(1.2);
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: white;
  transform: scale(1.2);
}
</style>
