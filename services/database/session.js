
function createSession(client,values,userid,cb) {
  console.log('create session');
  //value meanis {session object contain all values}
  var sqlQuery = `INSERT INTO sessions(values,userid)
    VALUES ('${values}','${userid}')`
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
