var users = require('../services/database/users.js')
var session = require('../services/database/session.js')
var connect = require('../services/database/connect.js')
var config = require('../services/database/config.js');
var client = connect(config.local)
var JWT = require('jsonwebtoken');
var aguid = require('aguid');
var cookie_options = require('../services/jwt/cookie-options.js');
module.exports = (req, reply) => {
  console.log('it here');
    var token = JWT.verify(req.state.token, process.env.JWT_SECRET);
    users.selectUser(client,reply.payload.username,(err, result)=>{
      console.log(result);
    })
    token.valid = false;
    token.exp = new Date().getTime();
    // session.setSession(client, reply.rows[0].id, token, )
}
