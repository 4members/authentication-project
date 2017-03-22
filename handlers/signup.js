var users = require('../services/database/users.js')
var session = require('../services/database/session.js')
var config = require('../services/database/config.js')
        var client = require('../services/database/connect.js')
        var Bcrypt = require('bcrypt');

        module.exports = (req, reply) => {
            const username = req.payload.username
            const email = req.payload.email
            const password = req.payload.password
            users.selectUserByEmail(client, email, (err, res) => {
                if (res.rowCount > 0) {
                    reply('you already have an account')
                } else {
                    users.selectUserByUsername(client, username, (err, res) => {
                        if (res.rowCount > 0) {
                            reply('choose different username')
                        } else {
                            Bcrypt.hash(password, (err, hash)=> {
                                if (err) {
                                    return console.error(err)
                                } else {
                                    console.log(hash);
                                    var data = Object.assign({}, req.payload, {
                                        password: hash
                                    });
                                    users.addUser(client, data, (err, res)=> {
                                        if (res) {
                                            reply('you are successfuly added');
                                        };
                                    });
                                }
                            });
                        }


                    });

                }
            });


        }
