const mysql = require()

class Connection {
    constructor() {
      if (!this.pool) {
        console.log('creating MySQL connection...'.blue.bold)
        this.pool = mysql.createPool({
          connectionLimit: 100,
          host: '',
          user: 'root',
          password: '',
          database: 'admin',
          // port: 3306
        })
  
        return this.pool
      }
  
      return this.pool
    }
  }
  
  const instance = new Connection()
  
  module.exports = instance;