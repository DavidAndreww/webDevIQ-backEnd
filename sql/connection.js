const mysql = require('mysql')

class Connection {
    constructor() {
      if (!this.pool) {
        console.log('creating MySQL connection...'.blue.bold)
        this.pool = mysql.createPool({
          connectionLimit: 100,
          host: '104.54.208.47',
          user: 'oberthewhat',
          password: 'ajwo0416',
          database: 'deviq',
          // port: 3306
        })
  
        return this.pool
      }
  
      return this.pool
    }
  }
  
  const instance = new Connection()
  
  module.exports = instance;