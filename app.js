// Importar Firebase y la configuración
import db from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

// Referencia al nodo con el código: "TUCODIGOPROPIOPERSONALIZABLE"
const dbRef = ref(db, 'TUCODIGOPROPIOPERSONALIZABLE');

// Escuchar los cambios en la base de datos
onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    document.getElementById("temp_actual").textContent = data?.temp_actual_dis || "Sin datos";
    document.getElementById("temp_objetivo").textContent = data?.temp_objetivo_dis || "Sin datos";
});
