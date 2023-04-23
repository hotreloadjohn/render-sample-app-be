const mysql = require("mysql2/promise");
const dbConfig = require("./dbConfig");

// Create the connection pool. The pool-specific settings are the defaults

// Create a pool of database connections
const pool = mysql.createPool(dbConfig);

module.exports = {
  pool,
};
