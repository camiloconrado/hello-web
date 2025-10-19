const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta personalizada /about
app.get('/about', (req, res) => {
  res.send('<h2>Esta es la página "Acerca de"</h2>');
});

// Ruta tipo API
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde la API de Express 👋' });
});

// Ruta dinámica con parámetro
app.get('/usuario/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`<h2>Hola, ${nombre}! Bienvenido a Express 🚀</h2>`);
});

// Ruta 404 (si ninguna anterior coincide)
app.use((req, res) => {
  res.status(404).send(`
    <h1>❌ Error 404</h1>
    <p>La página que buscas no existe o fue movida.</p>
    <a href="/">Volver al inicio</a>
  `);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
