var pg = require('pg')
var env = require('env2') env('../config.env');

var config = {

}

module.exports = {
    local: {
        user: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_USER
    }


}