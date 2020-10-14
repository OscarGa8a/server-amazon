// Importamos el servidor
const { response } = require('express');
const express = require('express');
const https  = require('https');
// Obtenemos el router de express
const router = express.Router();

module.exports = () => {

    router.get('/', (req, res, next) => {
        // https.request('https://fdm-dev.s3.us-east-2.amazonaws.com/media/error-image-cdn/prueba/data.json', (response) => {
        //     let str = '';

        //     response.on('data', function (chunk) {
        //         str += chunk;
        //     });

        //     response.on('end', function () {
        //         console.log(str);
        //         res.json({mensaje: str});
        //     });
        // }).end();
    });

    return router;
}