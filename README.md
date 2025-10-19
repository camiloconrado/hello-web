# 🚀 Hello Web — Ejercicio 3: Flujo Git + Entorno mínimo Node.js

## 📘 Descripción del proyecto
Este proyecto corresponde al **Ejercicio 3 del módulo de Desarrollo Web**, cuyo propósito es comprobar el manejo de **Git**, **ramas**, **Pull Requests**, y la creación de un entorno básico en **Node.js** sin frameworks.  

El resultado final es una aplicación mínima que sirve páginas HTML estáticas desde un servidor Node, accesible en `http://localhost:3000`.

---

## 🧩 Estructura del proyecto

hello-web/
│
├── public/
├── 404.html
├── about.html
├── index.html
├── script.js
├── styles.css
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js


---

## ⚙️ Configuración y ejecución

### 🔧 Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/camiloconrado/hello-web.git

2. Entrar en el directorio:
    cd hello-web

3. Instalar las dependencias:
    npm install


▶️ Ejecución del servidor

Ejecuta el siguiente comando:
    npm run dev

Luego abre tu navegador en:
    http://localhost:3000


🧠 Rutas disponibles    

| Ruta                | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| `/`                 | Página principal (index.html)                     |
| `/about`            | Página de información “Acerca de”                 |
| `/usuario/:nombre`  | Ruta dinámica que muestra un saludo personalizado |
| Cualquier otra ruta | Muestra la página `404.html`                      |


🌱 Flujo de trabajo con Git

1. Inicializar repositorio y crear rama principal:
    git init
    git branch -M main

2. Crear rama de feature:
    git checkout -b feat/landing

3. Realizar commits atómicos siguiendo la convención:
    feat: agregar nueva ruta /about
    fix: corregir error en servidor
    docs: actualizar README

4. Hacer merge a main:
    git checkout main
    git merge feat/landing

5. Subir cambios:
    git push origin main


🧾 Criterios de aceptación cumplidos ✅

- Repositorio con README.md y .gitignore adecuados
- Script npm run dev funcional
- Rama feat/landing y Pull Request con descripción clara
- Commits atómicos con convención correcta
- Servidor funcionando en http://localhost:3000


👨‍💻 Autor

Camilo Conrado
📍 Proyecto académico — Desarrollo Web
📅 Octubre 2025


💡 Nota
Este proyecto fue desarrollado como parte del proceso de aprendizaje práctico en Node.js y control de versiones con Git.
El objetivo es comprender el flujo completo de trabajo en un entorno de desarrollo profesional.

