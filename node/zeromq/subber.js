let socket = require('zeromq');

let sock = socket.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('kitty cats');
console.log('Subscriber connect to port 3000');

sock.on('message', function (topic, message) {
    console.log('received a message related to:', topic, 'containing message:', message);
});