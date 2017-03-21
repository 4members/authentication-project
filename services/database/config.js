var pg = require('pg')
var env = require('env2') env('../config.env');

var config = {
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_USER
}

var client = new pg.Client(config);

client.connect()
