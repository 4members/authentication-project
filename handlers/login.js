var users = require('../services/database/users.js')
var session = require('../services/database/session.js')
var client = require('../services/database/connect.js')
var Bcrypt = require('bcrypt');

module.exports = (req,reply)=>{

  selectUser(client,req.username,(err,res){
    if(res.length == 0){
      reply('you are not a user')
    }
    else{
      Bcrypt.compare(req.password, res[0].password , function(err, isMatch) {
                        if(err) {
                                return console.error(err);
                        }

                        console.log('do they match?', isMatch);
                })
              )
    }
  })

}
