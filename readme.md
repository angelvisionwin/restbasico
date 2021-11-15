# Esquema de un servidor REST mínimo con rutas y sin protecciones

- Paquetes
    * express - web framework
    * dotenv - permite cargar variables de entorno desde un fichero .env
    * cors - compatibilidad ( https://developer.mozilla.org/es/docs/Web/HTTP/CORS )

- Carpetas
    * controllers - controlador de cada ruta, con las funciones para get, post, etc.
    * models - modelos con clases, definiciones de bases de datos, etc.
    * public - carpeta pública con el contenido que se mostrará si alguien accede al servidor vía web
    * routes - un fichero para cada ruta "maestra" que se va a gestionar, importará el contenido de los controladores necesarios
    

<code> Instalación : npm install