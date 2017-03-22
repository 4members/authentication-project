
module.exports = (client, cb) => {
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

    var postsquery = client.query(`CREATE TABLE IF NOT EXISTS sessions(
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
