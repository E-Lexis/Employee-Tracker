const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: process.env.host,
      user: process.env.username,
      password: process.env.password,
      database: process.env.database
    },
    console.log('Connected to the company database.')
  );

module.exports = db;