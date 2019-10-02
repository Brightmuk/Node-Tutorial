//creates a new file and add it some spesified content

var fs = require('fs');

//fs.open opens a file or creates a new if it doesnt exist
//fs.writeFile replaces the pre existing file andits content
//fs.unlink deletes a file
fs.appendFile('newfile1.js', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});