var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/API';

mongoose.connect(urlString, function(err, res) {
    if (err) {
        console.log('Nao foi possivel conectar a: ' + urlString);
    } else {
        console.log('Conectado a: ' + urlString);
    }
});
