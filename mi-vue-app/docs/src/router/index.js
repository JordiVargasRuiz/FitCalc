import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Auth from "../views/Auth.vue"; // Asegúrate de que el archivo Auth.vue existe en /views
import Tareas from "../views/Tareas.vue"; // Asegúrate de que el archivo Auth.vue existe en /views

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/auth", component: Auth },
  { path: "/tareas", component: Tareas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
