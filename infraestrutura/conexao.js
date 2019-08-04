const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'remotemysql.com',
  port: 3306,
  user: 'A5kjwQweX5',
  password: '2ZJ1DtOSJU',
  database: 'A5kjwQweX5',
  multipleStatements: true
})

module.exports = conexao
