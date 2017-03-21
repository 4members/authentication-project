var users = require('../services/database/users.js')
var session = require('../services/database/session.js')
var config = require('../services/database/config.js'
var client = require('../services/database/connect.js')
var Bcrypt = require('bcrypt');

        module.exports = (req, reply) => {
            users.selectUserByEmail(client, req.email, (err, res) => {
                if (res) {
                    reply('you already have an account')
                } else {
                  users.selectUserByUsername(client,req.username,(err,res)=>{
                    if(res){
                      reply('choose different username')
                    }
                    else{
                      Bcrypt.hash(req.password, (err, hash) {
                          if (err) {
                              return console.error(err)
                          } else {
                              console.log(hash);
                              var data = Object.assign({}, req.payload, {
                                  password: hash
                              });
                              users.addUser(client, data, (err, res) {
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
