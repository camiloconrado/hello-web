// Node.js nativo

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Construir ruta del archivo
  const filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Extensión del archivo (para definir tipo MIME)
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
  };

  // Leer y servir archivo
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Error 404: Página no encontrada</h1>');
      return;
    }

    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
    res.end(content);
  });
});

// Servidor en puerto 3000
server.listen(3000, () =>
  console.log('Servidor en http://localhost:3000')
);
