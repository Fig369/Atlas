
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

  var sql = "SELECT * FROM fruits";
  connection.query(sql,(err, results) => {
    if (err){ 
      console.log(err)
    }else{
      console.log(results);
    }
  });  
  
  connection.end()
});