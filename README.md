""" 
# 🔥 Termostato en Tiempo Real con Firebase

Este proyecto muestra datos de temperatura en tiempo real usando Firebase Realtime Database y una interfaz web con diseño estilo neon.

---

## 🛠️ Requisitos

- Node.js instalado
- Cuenta en [Firebase](https://firebase.google.com/)
- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Extensión Live Server o servidor local (opcional)

---

## 🚀 Instalación del Proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/JJgithubUT/mi-termostato-web.git
cd mi-termostato-web
```

2. Instala Firebase:

```bash
npm install firebase
```

3. Abre el archivo `firebd.js` y reemplaza los valores de configuración por los de tu proyecto de Firebase (ver pasos abajo).

4. Abre el archivo `index.html` con **Live Server** o ejecuta:

```bash
npx serve .
```

---

## 🔧 Configuración de Firebase paso a paso

### 1. Crear un nuevo proyecto en Firebase

- Ve a [console.firebase.google.com](https://console.firebase.google.com/)
- Haz clic en "Agregar proyecto"
- Asigna un nombre (por ejemplo: `termostato`)
- Desactiva Google Analytics (opcional)
- Espera a que se cree

---

### 2. Habilitar Realtime Database

- En el panel izquierdo, haz clic en **"Base de datos"**
- Haz clic en **"Crear base de datos"** dentro de Realtime Database
- Selecciona ubicación y elige modo de inicio: **modo prueba** para desarrollo

```json
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```

> ⚠️ Importante: No dejes estas reglas en producción.

---

### 3. Agregar Firebase a tu app web

- En la consola de Firebase, ve a **Engranaje (⚙️) > Configuración del proyecto**
- Ve a la pestaña **General** y baja hasta **Tus apps**
- Haz clic en **</> (Web)**
- Registra tu app (puedes ponerle `termostato-web`)
- Firebase te dará una configuración como esta:

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO.firebaseio.com",
  projectId: "TU_ID",
  storageBucket: "TU_BUCKET.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

Copia estos valores en el archivo `firebd.js`.

---

### 4. Estructura esperada en tu base de datos

Importante que tu código propio dea generado por ti mismo para que solo tu puedas acceder a el.

Este `TUCODIGOPROPIOPERSONALIZABLE` debe ser el mismo en el archivo **app.js**, ahí está donde

se debe insertar el código. Recuerda que este es la base de la página web.

Crea manualmente este nodo en Realtime Database:

```json
"TUCODIGOPROPIOPERSONALIZABLE": {
  "temp_actual_dis": 22,
  "temp_objetivo_dis": 25
}
```

Puedes modificarlo desde la consola en tiempo real.

---

## 📁 Estructura del Proyecto

```
/mi-termostato-realtime/
│
├── /node_modules    -> Configuración generada por node
├── index.html       -> Página principal
├── styles.css       -> Estilos neon
├── app.js           -> Lógica para mostrar datos en tiempo real
├── firebd.js        -> Configuración Firebase (con módulos)
├── package.json     -> Módulos y config npm
├── .gitignore
└── README.md
```

---

## 👨‍💻 Autor

**Juan Javier Castillo Bretón** — [@JJgithubUT](https://github.com/JJgithubUT)

---