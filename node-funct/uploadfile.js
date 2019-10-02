var http = require('http');
var formidable = require('formidable');
//fromidable enables file upload to the computer
var fs = require('fs');
//we use the file system to change the directoory the file is uploaded 
// since the default will be uploaded in a temporary folder in the server


http.createServer(function (req, res) {
if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = '/home/bright/node-t' + files.filetoupload.name;
        fs.rename(oldpath, newpath, function (err) {

        if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
    });
} else {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}
}).listen(8080);