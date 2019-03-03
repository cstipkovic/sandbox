import { socket } from 'zeromq';

let sock = socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('kitty cats');
console.log('Subscriber bound to port 3000');

setInterval(function () {
    console.log('sending a multipart message envelope');
    sock.send(['kitty cats', 'meow!']);
}, 500);