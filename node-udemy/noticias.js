var http = require('http');

var server = http.createServer(function (req, res) {
	var categoria = req.url;
	console.log(categoria);

	if (categoria == '/tecnologia') {
		res.end('tecnologia');
	} else {
		res.end('outras');
	}
});

server.listen(3000);
