module.exports = (client, cb) => {
    var usersquery = client.query(`CREATE TABLE IF NOT EXISTS usersdetails(
    id SERIAL PRIMARY KEY,
    username varchar(225) UNIQUE,
    email varchar(225) UNIQUE,
    gend varchar(10),
    password varchar(225),
    bio varchar(500),
    dob date)`, function(err, result) {
        if (err) {
            throw err;
        }
        cb(err, result);
    });

    var postsquery = client.query(`CREATE TABLE IF NOT EXISTS sessions(
      id SERIAL PRIMARY KEY,
      userid integer REFERENCES usersdetails(id),
      value varchar(500)
    )`, function(err, result) {
        if (err) {
            throw err;
        }
        cb(err, result);

    });

}
