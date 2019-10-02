var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bright",
  password: "beatsbydre",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {

      //To select certain columns only
      //-----------------------------
      //SELECT name, address FROM customers
    if (err) throw err;
    // console.log(result);

    //result contains each row as an object
    //to filter result you can do
    console.log(result[2].address);

    //Filter with column specification
    //--------------------------------
    // SELECT * FROM customers WHERE address = 'Park Lane 38

    //Use of wildcards
    //----------------
    //SELECT * FROM customers WHERE address LIKE 'S%':return all addresses starting with s****

    //Order the result into an order
    //------------------------------
    //SELECT * FROM customers ORDER BY name DESC 
    //SELECT * FROM customers ORDER BY name 'for ascending'

  });
});