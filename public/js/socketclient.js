console.log('socketclient.js loaded');

const origin = window.location.origin.split(':');
const domain = origin.splice(0, 2).join(':');
const port = 3000;
const ip = domain + ':' + port;
console.log('ip: ' + ip);

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    // console.log('connected');
    socket.emit('chat message', 'Hello');

    socket.on('disconnect', () => {
        console.log('disconnected');
    });

});

socket.on('chat message', (msg) => {
    console
        .log('Client message: ' + msg);
});
