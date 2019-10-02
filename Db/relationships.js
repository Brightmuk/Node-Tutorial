var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bright",
  password: "beatsbydre",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favourite FROM users JOIN products ON users.favourite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    //to returnn even non related users
    //SELECT users.name AS user, products.name AS favourite FROM users LEFT JOIN products ON users.favourite_product = products.id";
    //to retune even unrelated products
    //SELECT users.name AS user, products.name AS favourite FROM users RIGHT JOIN products ON users.favourite_product = products.id";
  });
});