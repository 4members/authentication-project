function createSession(client,id,values,userid,cb) {
  //value meanis {session object contain all values}
  var sqlQuery = `INSERT INTO sessions(id, values, userid)
    VALUES ('${id}','${values}','${userid}')`
  client.query(sqlQuery, (err, result) => {
      if (err) {
          throw (err)
      }
      cb(err, result)
  })
}

function getSession(client, id,cb) {
  var sqlQuery = `Select * FROM sessions WHERE
      id='${id}'`

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
