const express
    = require('express');
const app =
    express();

const
    server = require('http').createServer(app);


const
    port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

const
    io = require('socket.io')(server, {
        cors: {
            origin: "*", // allow all origins
        }
    });


io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('chat message', (msg) => {
        console.log('New messages received on server : ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

