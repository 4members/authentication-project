var client = require('../../services/database/connect.js');
function migrate(client, cb) {

    var usersquery = client.query(`CREATE TABLE IF NOT EXISTS usersdetails(id SERIAL PRIMARY KEY,
    username varchar(225) UNIQUE,
    email varchar(225) UNIQUE,
    password varchar(225),
    bio varchar(500))`, function(err, result) {

        if (err) {

            throw err;
        }
        cb(err, result);
    });

    var sessionsquery = client.query(`CREATE TABLE IF NOT EXISTS sessions(
      id SERIAL PRIMARY KEY,
      values varchar(500),
      userid integer REFERENCES usersdetails(id)

    )`, function(err, result) {

        if (err) {

            throw err;
        }
        cb(err, result);

    });

}
migrate(client,(err,result) =>{
  if(err) throw err

});
