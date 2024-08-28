const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Habilitar CORS para todos los orígenes
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Publicaciones/Principal', 'principal.html'));
});


// Iniciar el servidor en el puerto 8081
app.listen(8081, () => {
    console.log('Servidor escuchando http://localhost:8081');
});
