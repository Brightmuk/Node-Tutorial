var http = require('http');
var uc = require('upper-case');

//http module from node which allows Node.js to transfer data over the http
// require is to include the module

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //200 means ok
  //re argument represents request object
  res.write(req.url);
  res.write(uc('Hello World!'));
  res.end();
}).listen(8081);

