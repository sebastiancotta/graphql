const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'https://remotemysql.com/databases.php',
  port: 3306,
  user: 'A5kjwQweX5',
  password: '2ZJ1DtOSJU',
  database: 'A5kjwQweX5'
})

module.exports = conexao
