function createSession(client,id ,values, cb) {
  //value meanis {session object contain all values}
  var sqlQuery = `INSERT INTO sessions(id,values)
    VALUES ('${id}','${values}')`
  client.query(sqlQuery, (err, result) => {
      if (err) {
          throw (err)
      }
      cb(err, result)
  })
}

function getSession(client, userId,cb) {
  var sqlQuery = `Select * FROM sessions WHERE
      userid='${userId}'`

  client.query(sqlQuery, (err, result) => {
          if (err) {
              throw (err)
          }
          cb(err, result)
      })
    }


function setSession(client,userid,values,cb) {
  var sqlQuery = `UPDATE sessions
        SET values='${values}'
        WHERE userid='${userid}';`

  client.query(sqlQuery, (err, result) => {
          if (err) {
              throw (err)
          }
          cb(err, result)
      })

}

module.exports = {
  createSession: createSession,
  getSession: getSession,
  setSession:setSession
}
