const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Habilitar CORS para todos los orígenes
app.use(cors());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'AlephArt-diana-navbar')));



// Iniciar el servidor en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor escuchando en el puerto 80009');
});
