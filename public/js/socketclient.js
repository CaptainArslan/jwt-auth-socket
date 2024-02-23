const origin = window.location.origin.split(':');
const domain = origin.splice(0, 2).join(':');
const port = 3000;
const ip = domain + ':' + port;

let isClicked = false;

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    setInterval(() => {
        if (!isClicked) {
            playSoundButton.dispatchEvent(new Event('click'));
            isClicked = true;
        }
        socket.emit('chat message', 'Hello');
    }, 3000);

    socket.on('disconnect', () => {
        clearInterval();
        console.log('disconnected');
    });
});

socket.on('chat message', (msg) => {
    console
        .log('Client message: ' + msg);
    toastr.info('new message sent to server');
    playNotificationSound();
});

