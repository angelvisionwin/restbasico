// Paquete para permitir leer las variables el fichero .env
require('dotenv').config();

// Instancia el servidor configurado en los modelos
const Server= require('./models/server');

// Creamos el objeto
const server = new Server();

// Lanza el servidor a la espera
server.listen();