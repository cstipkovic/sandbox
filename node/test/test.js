var fs = require('fs');
var request = require('http');

var urls = new Array("http://www.google.com");

function scrape (url, file) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log('request url: ' + url);
      console.log('request file: ' + file);
      fs.writeFile(file, body);
    }
  });
}

for (var i = 0; i < urls.length; i++) {
  var file = 'log' + [i] + '.txt';
  var url = urls[i];

  console.log(url);
  console.log(file);

  scrape(url, file);
}