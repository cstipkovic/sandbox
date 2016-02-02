var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
	var qs = querystring.parse(req.url.split('?')[1]);
	var userName = qs.firstName + ' ' + qs.lastName;
	var html = '<!doctype html>' + '<html><head><title>Hello ' + userName + '</title></head>' +
		'<body><h1>Hello, ' + userName + '!</h1></body></html>';

	res.end(html);
}).listen(8000);
