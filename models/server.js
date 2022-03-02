const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const Socket = require('./socket');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = socketIo(this.server, {});
    }

    initMiddlewares() {
        this.app.use(express.static( path.resolve( __dirname, '../public')));
        //CORS
        this.app.use(cors());
    }

    configSockets() {
        new Socket(this.io);
    }

    runServer() {
        // Inicializar Middlewares
        this.initMiddlewares();
        // Inicializar Socket
        this.configSockets();
        // Inicializar Server
        this.server.listen(this.port, () => {
            console.log(`Server escuchando en puerto: ${this.port}`);
        })
    }
}


module.exports = Server;