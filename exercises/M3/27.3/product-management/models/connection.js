const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'yuki',
  password: 'yuki-Nagato12',
  database: 'rest_exercicios',
});

module.exports = connection;
