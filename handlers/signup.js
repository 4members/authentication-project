var users = require('../services/database/users.js')
var session = require('../services/database/session.js')
// var config = require('../services/database/config.js')
 var client = require('../services/database/connect.js')
//  var env = require('env2')
//  env('./config.env');
//  client =connect(config.local);
        var Bcrypt = require('bcrypt');

        module.exports = (req, reply) => {
            const username = req.payload.username
            const email = req.payload.email
            const password = req.payload.password
            users.selectUserByEmail(client, email, (err, res) => {
              console.log('1',res.command);
                if (res.rowCount > 0) {
                    reply({status:'fail'})
                } else {
                    users.selectUserByUsername(client, username, (err, res) => {
                      console.log('2',res.command);
                        if (res.rowCount > 0) {
                            reply({status:'fail'});
                        } else {
                            Bcrypt.hash(password,10, (err, hash)=> {
                                if (err) {
                                    return console.error(err)
                                } else {

                                    var data = Object.assign({}, req.payload, {
                                        password: hash
                                    });
                                    users.addUser(client, data, (err, res)=> {
                                      console.log('3',res.command);
                                          if (res) {
                                            reply({text:'you are successfuly added'});
                                        };
                                    });
                                }
                            });
                        }


                    });

                }
            });


        }
