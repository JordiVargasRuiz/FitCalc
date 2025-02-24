<template>
  <div class="login-container d-flex align-items-center justify-content-center vh-100">
    <div class="background"></div> <!-- Imagen de fondo -->
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <i class="bi bi-card-checklist me-2"></i> Priorix
        </a>
      </div>
    </nav>

    <div class="container p-4 rounded shadow-sm">
      <div class="login-box text-center p-4 shadow-lg rounded">
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="User Avatar" class="avatar mb-3">
        <h2 class="text-white mb-3">Log In Priorix</h2>
        <form @submit.prevent="login">
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="bi bi-person"></i></span>
            <input type="email" class="form-control" v-model="email" placeholder="Correo Electrónico" required>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text"><i class="bi bi-lock"></i></span>
            <input type="password" class="form-control" v-model="password" placeholder="Contraseña" required>
          </div>
          <div class="form-check text-start text-white">
            <input class="form-check-input" type="checkbox" id="rememberMe">
            <label class="form-check-label" for="rememberMe">Recuérdame</label>
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3">Iniciar Sesión</button>
        </form>

        <p class="text-white mt-3">¿Aún no te has registrado en Priorix?</p>
        <router-link to="/login" class="btn btn-success w-100 mt-2">Regístrate aquí</router-link>

        <p class="text-white mt-3"><a href="#" class="text-light">¿Olvidaste tu contraseña?</a></p>
        <p v-if="error" class="text-danger">{{ error }}</p>
      </div>
    </div>

    <footer class="footer text-center">
      <p class="text-white mb-0">
        By using <strong>Priorix</strong> you accept our 
        <a href="#" class="text-primary">Terms of Service</a> and 
        <a href="#" class="text-primary">Privacy Policy</a>.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/");
  } catch (err) {
    error.value = "Error al iniciar sesión: " + err.message;
  }
};
</script>

<style scoped>
/* Fondo de pantalla */
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/hola.png'); /* Imagen local */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1; /* Envía el fondo atrás */
}

/* Navbar */
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

/* Contenedor principal */
.login-container {
  height: 100vh;
  position: relative;
  padding-top: 70px;
  margin-top: -50px;
}

/* Caja de login */
.container {
  max-width: 450px;
  background: #cac8cc;
  padding: 30px;
  border-radius: 10px;
}
.login-box {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 15px;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
}

/* Otros estilos */
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.input-group-text {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
}
.form-control {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
}
.form-control::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
.btn-primary {
  background-color: #ff4b5c;
  border: none;
}
.btn-primary:hover {
  background-color: #ff6b81;
}

/* Botón de registro en verde */
.btn-success {
  background-color: #28a745;
  border: none;
}
.btn-success:hover {
  background-color: #218838;
}
</style>
