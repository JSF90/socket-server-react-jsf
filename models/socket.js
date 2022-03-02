

class Socket {
    constructor( io ) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connections
        this.io.on('connection', (socket) => { 
            // Escuchar evento 'mensage-to-server'
            socket.on('mensage-to-server', (data) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data)
            })
        });
    }
}

module.exports = Socket;