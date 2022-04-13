const mysql = require('mysql2/promise')

const db = {
  config : {
    host: 'rds-mysql-journaldb.cr4itwpjhb8c.us-east-1.rds.amazonaws.com',
    user: 'administrator',
    password: 'Captain1',
    database: 'mysqlJournalDB',
    waitForConnections: true, 
    connectionLimit: 10,
    queueLimit: 0
  }
}

const pool = mysql.createPool(db.config)

module.exports = {
  pool
}