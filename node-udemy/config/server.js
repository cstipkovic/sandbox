var express = require('express');

var app = express();

// Setting engine HTML on express with ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;
