var JWT = require('jsonwebtoken');
var users = require('../services/database/users.js')
var connect = require('../services/database/connect.js')
var config = require('../services/database/config.js');
var client = connect(config.local)

module.exports = (req , reply)=>{
  var token = JWT.verify(req.state.token, process.env.JWT_SECRET);
  if (token.valid) {
    users.selectUserBySessionId(client,token.id,(err, result)=>{
      reply(result.rows[0])
    })
  }else {
    reply('your session was ended')
  }
}
