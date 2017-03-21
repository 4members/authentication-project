var config = require('./config.js');
var pg = require('pg')
config = config.local;

module.exports = (config) => {

    var client = new pg.Client(config);


    client.connect(err => {
        if (err) {
            throw err
        }
    })
    return client;
}
