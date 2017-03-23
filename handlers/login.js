var users = require('../services/database/users.js')
var session = require('../services/database/session.js')
var connect = require('../services/database/connect.js')
var config = require('../services/database/config.js');
var JWT = require('jsonwebtoken');
var aguid = require('aguid');
var client = connect(config.local)
var Bcrypt = require('bcrypt');
var cookie_options = require('../services/jwt/cookie-options.js');
var generatesession  = require('../services/jwt/sessionvalue.js');

module.exports = (req, reply) => {
    const username = req.payload.username || req.payload.email
    const password = req.payload.password
    users.selectUser(client, username, (err, res) => {
        if (res.rowCount == 0) {
          console.log('1');
            reply({
                status: 'fail'
            }).code(400)
        } else {
            Bcrypt.compare(password, res.rows[0].password, function(err, isMatch) {
                if (err) {
                    return console.error(err);
                } else {
                  if(isMatch){
                  var userid = res.rows[0].id;
                  var sessionvalue = generatesession();
                  console.log(sessionvalue);
                    session.createSession(client, sessionvalue.id, JSON.stringify(sessionvalue),userid,(err,result)=>{
                      var token = JWT.sign(sessionvalue, process.env.JWT_SECRET);
                      reply({
                          status:'success',
                          text: 'welcome back'
                      }).header("Authorization", token)
                      .state("token", token, cookie_options).code(200);
                    });
                  }
                  else{
                    reply({
                        status: 'fail',
                        text:'Wrong password'
                    }).code(200)
                  }
                }

            });
        }
    })
}
