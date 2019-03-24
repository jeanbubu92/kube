var http = require('http');
const message = process.env.MESSAGE ? process.env.MESSAGE : 'K8s is awesome!'

http.createServer(function (req, res) {
  res.write(message);
  res.end();
}).listen(8080);