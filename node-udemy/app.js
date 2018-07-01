var app = require('./config/server');

// Including routes
var routeNoticias = require('./app/routes/noticias')(app);
var routeHome = require('./app/routes/home')(app);
var routeFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

// Running server at...
app.listen(3000, function () {
	console.log('Server started');
});
