var users = require('../services/database/users.js')
var session = require('../services/database/session.js')
var connect = require('../services/database/connect.js')
var config = require('../services/database/config.js');
var client = connect(config.local)
var Bcrypt = require('bcrypt');

module.exports = (req, reply) => {
    const username = req.payload.username
    const password = req.payload.password
    users.selectUser(client, username, (err, res) => {
        if (res.rowCount == 0) {
          console.log('1');
            reply({
                status: 'fail'
            })
        } else {
            Bcrypt.compare(password, res.rows[0].password, function(err, isMatch) {
                if (err) {
                    return console.error(err);
                } else {
                  if(isMatch){
                    reply({
                        status:'success',
                        text: 'welcome back'
                    });
                  }else{
                    reply({
                        status: 'fail'
                    })
                  }
                }

            });
        }
    })
}
