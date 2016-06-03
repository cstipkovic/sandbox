var app = require('./config/app_config');
var produtos = require('./routes/produtoRouter');

app.get('/', function(req, res) {
	res.end('API M4W');
});

app.use('/produtos', produtos);