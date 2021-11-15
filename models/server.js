const express = require('express');
const cors = require('cors');


class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Ruta para las peticiones
        this.apiPath = '/api/';

        // Middlewares ( ver descripción en la método )
        this.middlewares();

        // Monta las rutas accesibles cuando se hacen peticions al servidor
        this.routes();
    }

    middlewares() {

        // Un middleware es una función que se puede ejecutar antes o después del manejo de una ruta. 
        // Esta función tiene acceso al objeto Request, Response y la función next().

        // CORS
        this.app.use( cors() );

        // Lectura y parseo de las peticiones al API que vienen en el body
        this.app.use( express.json() );

        // Directorio Público (carpeta), contiene el index que se muestra si alguien accede por navegador
        this.app.use( express.static('public') );

    }

    routes() {

        // Importa los módulos con las distintas rutas que queramos mapear
        
        this.app.use( this.apiPath, require('../routes/api'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}


module.exports = Server;
