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
  var sql = "INSERT INTO fruits (id, fruit_name, quantity) VALUES (1, 'apple', 10)";
  connection.query(sql,(err) => {
    if (err){ 
      console.log(err)
    }else{
      console.log('record inserted');
    }
  });  
  
  connection.end()
});