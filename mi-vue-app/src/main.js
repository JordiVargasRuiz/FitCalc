import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/bootstrap-icons/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
import confetti from 'canvas-confetti';





const app = createApp(App);
app.use(router);
app.mount("#app");
