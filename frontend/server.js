var http = require('http');
const url = process.env.BACKEND ? process.env.BACKEND : 'http://localhost:8080'

http.createServer(function (req, res) {

  http.get(url, function(res2) {
    res2.on('data', function (chunk) {
	  res.write(chunk);
	  res.end();
    });
  }).end();

}).listen(8090);