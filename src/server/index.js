const express = require('express');
const {errorLogs, handlerError} = require('../middleware/error.handler');
class App {
    constructor() {
        this.app = express();
        this.app.use(express.json()); //Activar las respuestas POST con formato JSON
        this.setupRoutes(); // Configuracion de rutas de mi APP
        
        // Centralizacion de errores con Middlewares
        this.app.use(handlerError); 
        this.app.use(errorLogs);
    }

    setupRoutes() {
        const productRouter = require('../routes/productRouter');
        const userRouter = require('../routes/userRouter');
        
        const router = express.Router();
        this.app.use('/api/v1', router);
        router.use('/products', productRouter);
        router.use('/users', userRouter);
    }

    start(port) {
        this.server =  this.app.listen(port, ()=>{
            console.log(`Servidor iniciando en el puerto ${port}`);
        })
        
        this.app.get('/', (req, res)=>{
            res.send('Hola mundo');
        })
    }

    getServerAddress() {
        const address = this.server.address();
        
        let ipAddress = address.address;
        if (ipAddress === '::') {
            ipAddress = 'localhost'; // Cambia '::' a '127.0.0.1' (IPv4 loopback)
        }

        return `http://${ipAddress}:${address.port}`;
    }

    stopServer() {
        this.server.close();
    }
}

module.exports = App