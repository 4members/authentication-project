function addUser(client, data, cb) {
    var sqlQuery = `INSERT INTO usersdetails (
      email,
      username,
      password )
      VALUES (
        '${data.email}',
        '${data.username}',
        '${data.password}')`
    client.query(sqlQuery, (err, result) => {
        if (err) {
            throw (err)
        }
        cb(err, result)
    })
}

function selectUser(client, info, cb) {
    //select user by email or username for signin form
    var sqlQuery = `SELECT * FROM usersdetails WHERE email='${info}' OR username='${info}'`
    client.query(sqlQuery, (err, result) => {
        if (err) {
            throw (err)
        }
        cb(err, result)
    })
}

function selectUserByEmail(client, email, cb) {
    //select user by email for signup form
    var sqlQuery = `SELECT * FROM usersdetails WHERE email='${email}'`
    client.query(sqlQuery, (err, result) => {
        if (err) {
            throw (err)
        }
        cb(err, result)
    })
}

function selectUserByUsername(client, username, cb) {
    //select user by username for signup form
    var sqlQuery = `SELECT * FROM usersdetails WHERE username='${username}'`
    client.query(sqlQuery, (err, result) => {
        if (err) {
            throw (err)
        }
        cb(err, result)
    })
}

function updateUserData(client, data, cb) {
    //data meanis {username,password,bio}
    cb(null,true);
    var sqlQuery = `UPDATE usersdetails
          SET email='${data.email}',
          username='${data.username}',
          password='${data.password}',
          bio='${data.bio}'
          WHERE id='${data.id}';`

    client.query(sqlQuery, (err, result) => {
        if (err) {
            throw (err)
        }
        cb(err, result)
    })
}

module.exports = {
    addUser: addUser,
    selectUser: selectUser,
    selectUserByUsername: selectUserByUsername,
    selectUserByEmail: selectUserByEmail,
    updateUserData: updateUserData
}
