const sql = require("mssql");
require("dotenv").config();
console.log(process.env.DB_USER, process.env.DB_PWD, process.env.DB_NAME);

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

module.exports = sqlConfig;
