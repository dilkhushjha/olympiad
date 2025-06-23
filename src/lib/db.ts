import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST, // Remote MySQL Host
  user: process.env.DB_USER, // Database Username
  password: process.env.DB_PASSWORD, // Database Password
  database: process.env.DB_NAME, // Database Name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
