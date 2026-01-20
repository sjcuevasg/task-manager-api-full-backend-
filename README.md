#  Task Manager API

API REST desarrollada con **Node.js**, **Express** y **MySQL**, que permite gestionar usuarios y tareas mediante una arquitectura **MVC**.

Este proyecto fue creado con fines de aprendizaje y práctica de backend, aplicando buenas prácticas usadas en entornos reales.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- nodemon


---

##  Estructura del proyecto

task-manager-api/
│
├── src/
│ ├── controllers/ # Lógica de negocio
│ ├── models/ # Acceso a base de datos
│ ├── routes/ # Endpoints
│ ├── config/ # Conexión a DB
│ └── app.js # Configuración de Express
│
├── server.js # Punto de entrada
├── .env # Variables de entorno (no se sube)
├── .gitignore
├── package.json
└── README.md