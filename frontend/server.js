var http = require('http');
const url = process.env.BACKEND ? process.env.BACKEND : 'http://localhost'

http.createServer(function (req, res) {
  const options = {
    host: url,
    port: 8080,
    path: '/',
    method: 'GET'
  };

  http.request(options, function(res2) {
    res2.setEncoding('utf8');
    res2.on('data', function (chunk) {
	  res.write(chunk);
	  res.end();
    });
  }).end();
}).listen(8090);