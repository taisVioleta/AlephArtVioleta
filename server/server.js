const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Habilitar CORS para todos los orígenes
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));
// Ruta para servir el archivo 'navbar.html'
app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Navbar', 'navbar.html'));
  });
// Ruta para la página principal 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'pantallaPrincipal.html'));
});


// Iniciar el servidor en el puerto 8080
app.listen(8080, () => {
    console.log('Servidor escuchando http://localhost:8080');
});
