module.exports = (client, cb) => {
    client.query(`
      CREATE TABLE IF NOT EXISTS usersdetails(
        id SERIAL PRIMARY KEY,
        username varchar(225) UNIQUE,
        email varchar(225) UNIQUE,
        password varchar(225),
        bio varchar(500))
        `, function(err, result) {
        if (err) {
            throw err;
        }
        cb(err, result);
    });

    client.query(`
      CREATE TABLE IF NOT EXISTS sessions(
        id uuid PRIMARY KEY,
        values varchar(500),
        userid integer REFERENCES usersdetails(id)

      )`, function(err, result) {
        if (err) {
            throw err;
        }
        cb(err, result);

    });

}
