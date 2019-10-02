var http = require('http');
var dt = require('./url');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8081);
//open server with node <file name>