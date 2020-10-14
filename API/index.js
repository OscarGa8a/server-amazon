// Importamos el servidor
const express = require('express');
// Importamos la configuración de rutas
const routes = require('./routes');
// Importa libreria de cors
const cors = require('cors');
//Importa variables de entorno
require('dotenv').config({path: 'variables.env'});

// Creamos el servidor
const app = express();

// Configura los cors en el servidor
app.use(cors());
// Asigna carpeta publica
app.use('/public', express.static('public'));
// Configuramos las rutas
app.use('/', routes());

//Asigna el host
const host = process.env.HOST || '0.0.0.0';
//Asigna el puerto
const port = process.env.PORT || 4000;

// Iniciamos el servidor
app.listen(port, host, () => {
    console.log('Servidor iniciado');
})