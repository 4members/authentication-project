var session = require('../database/session.js')
var config = require('../database/config.js')
 var connect = require('../database/connect.js')
 var client = connect(config.local)
module.exports =(decoded, request, callback) => {
    session.getSession(client,decoded.id,(err,result)=>{
      var session;
      if (result.rows[0]) {
        console.log("rowCount",result.rowCount);
          session = JSON.parse(result.rows[0].values);
      } else {
        console.log(err); // unable to find session in database ... reply is null
          return callback(err, false);
      }

      if (session.valid === true) {
          console.log('I\'m here');
          return callback(err, true);
      } else {
          return callback(err, false);
      }

    });

};
