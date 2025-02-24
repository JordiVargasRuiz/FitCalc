// src/composables/useTareas.js
import { ref } from "vue";
import { auth, db } from "../firebase";
import { collection, addDoc, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export function useTareas() {
  const usuario = ref(null);
  const nuevaTarea = ref("");
  const tituloTarea = ref("");  // Nuevo campo para el título
  const prioridadTarea = ref("media");  // Nuevo campo con valor predeterminado
  const tareas = ref([]);

  // Detectar usuario autenticado
  onAuthStateChanged(auth, (user) => {
    if (user) {
      usuario.value = user;
      obtenerTareas();
    } else {
      usuario.value = null;
      tareas.value = [];
    }
  });

  // Obtener tareas en tiempo real
  const obtenerTareas = () => {
    if (!usuario.value) return;

    const tareasRef = collection(db, "usuarios", usuario.value.uid, "tareas");

    onSnapshot(tareasRef, (snapshot) => {
      tareas.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  };

  // Agregar tarea con título, fecha y prioridad
  const agregarTarea = async () => {
    if (!tituloTarea.value.trim() || !nuevaTarea.value.trim() || !usuario.value) return;

    await addDoc(collection(db, "usuarios", usuario.value.uid, "tareas"), {
      titulo: tituloTarea.value,
      texto: nuevaTarea.value,
      fecha: new Date().toISOString(),  // Fecha actual en formato ISO
      prioridad: prioridadTarea.value,  // Guardamos la prioridad seleccionada
      completada: false,
    });

    // Limpiar los campos después de agregar la tarea
    tituloTarea.value = "";
    nuevaTarea.value = "";
    prioridadTarea.value = "media";
  };

  // Eliminar tarea
  const eliminarTarea = async (id) => {
    if (!usuario.value) return;
    await deleteDoc(doc(db, "usuarios", usuario.value.uid, "tareas", id));
  };

  return {
    usuario,
    nuevaTarea,
    tituloTarea,
    prioridadTarea,
    tareas,
    agregarTarea,
    eliminarTarea,
  };
}
