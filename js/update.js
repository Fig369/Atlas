
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASS,
  database: 'dbschema'
})

connection.connect((err) =>{
  if (err){ 
    console.log(err)
  }else{
    console.log('connected');
  }

  var sql = "SELECT * FROM fruits WHERE id = 1;";
  connection.query(sql,(err, result) => {
    if (err){ 
      console.log(err)
    }else{
      console.log(result);
  }
  var sql2 = "UPDATE fruits SET fruitname = 'orange', quantity = 1 WHERE id = 1;";
  connection.query(sql2,(err, result) => {
    if (err){ 
      console.log(err)
    }else{
      console.log(result);
    }
  });  
  
  connection.end()
})
});