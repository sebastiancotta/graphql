const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'teste',
  password: 'teste',
  database: 'teste'
})

module.exports = conexao
