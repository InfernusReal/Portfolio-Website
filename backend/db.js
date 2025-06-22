// db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,       // e.g. 'localhost'
  user: process.env.DB_USER,       // e.g. 'root'
  password: process.env.DB_PASS,   // e.g. '3001'
  database: process.env.DB_NAME,   // e.g. 'your_db_name'
  port: process.env.DB_PORT        // e.g. 3001
});

module.exports = pool;
