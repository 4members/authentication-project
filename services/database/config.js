var pg = require('pg');
module.exports = {
    local: {
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        user : process.env.DB_USER
    },
    heroku: {},
    test: {
      host:'localhost',
        database: process.env.DB_NAME_TEST,
        password: process.env.DB_PASSWORD_TEST,
        user: process.env.DB_USER_TEST
    }
}
