var pg = require('pg');




module.exports = {
    local: {
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
      user: process.env.DB_USER
    }


}
