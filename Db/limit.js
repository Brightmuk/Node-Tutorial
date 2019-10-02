var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bright",
  password: "beatsbydre",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    //To limit start point
    //--------------------
    //SELECT * FROM customers LIMIT 5 OFFSET 2 
    //SELECT * FROM customers LIMIT 5, 2 
    //this means exclude the second point

  });
});