// Importamos el servidor
const { response } = require('express');
const express = require('express');
const https  = require('https');
// Obtenemos el router de express
const router = express.Router();

module.exports = () => {

    router.get('/', (req, res, next) => {
        res.send('Servidor de imágenes de prueba')
    });

    return router;
}