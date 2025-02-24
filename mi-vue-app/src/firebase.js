import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEwku5pfN6RA7t5kofpnlE5PYGRpvaR14",
  authDomain: "listatareas-de7c5.firebaseapp.com",
  projectId: "listatareas-de7c5",
  storageBucket: "listatareas-de7c5.appspot.com",
  messagingSenderId: "878146635190",
  appId: "1:878146635190:web:d555b9afc6cdc1deb66d17",
  measurementId: "G-GCB683XBM3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("✅ Persistencia activada"))
  .catch((error) => console.error("❌ Error en persistencia", error));

export { auth, db };
