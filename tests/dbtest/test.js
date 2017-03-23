var test = require('tape')
var shot = require('shot')
var env = require('env2')
env('./config.env');
var config = require('../../services/database/config.js')
var user = require('../../services/database/users.js')
var session = require('../../services/database/session.js')
config = config.test;
var connect = require('../../services/database/connect.js')
var client = connect(config);
var aguid = require('aguid');
var createtesttables = require('../scripts/migrate.js');
var data_id;

createtesttables(client, (err, res) => {
    console.log("test tables created");
});

var data = {
    email: 'muh@ms.co',
    username: 'muhushtaha',
    password: 'muh123muh',
}

var insertedValues = {
    valid: true,
    id: aguid(),
    exp: new Date().getTime() + 30 * 60 * 1000
}

var resetQuery = `DELETE FROM sessions`
client.query(resetQuery, (err, result) => {
    if (err) {
        throw (err)
    }
    var resetQuery = `DELETE FROM usersdetails`
    client.query(resetQuery, (err, result) => {
        if (err) {
            throw (err)
        }
        test('function addUser should insert the data to database', (t) => {
            user.addUser(client, data, (err, result) => {
                if (err) {
                    throw err
                }
                var sqlQuery = `SELECT * FROM usersdetails WHERE email='${data.email}' OR username='${data.username}'`
                client.query(sqlQuery, (err, result) => {
                    if (err) {
                        throw (err)
                    }
                    const resData = result.rows[0];
                    t.equal(data.email, resData.email, 'email is match');
                    t.equal(data.username, resData.username, 'username is match');
                    t.equal(data.password, resData.password, 'password is match');

                    data_id = resData.id;
console.log('gfhgfhdghh',data_id);
                    t.end();
                })
                test('function selectUserByEmail ok ', (t) => {
                    user.selectUser(client, data.username, (err, result) => {
                        if (err) {
                            throw err
                        }
                        const resData = result.rows[0];
                        t.equal(data.email, resData.email, 'email is match');
                        t.equal(data.username, resData.username, 'username is match');
                        t.equal(data.password, resData.password, 'password is match');
                        t.end();
                    })
                })
                test('function selectUserByUsername ok', (t) => {
                    user.selectUser(client, data.username, (err, result) => {
                        if (err) {
                            throw err
                        }
                        const resData = result.rows[0];
                        t.equal(data.email, resData.email, 'email is match');
                        t.equal(data.username, resData.username, 'username is match');
                        t.equal(data.password, resData.password, 'password is match');
                        t.end();
                    })
                })

                test('function createSession ok', (t) => {
                    values = JSON.stringify(insertedValues);
                    var id  = parseInt(JSON.parse(values).id);

                    session.createSession(client,id, values,data_id, (err, result) => {
                        if (err) {
                            throw err
                        }
                        var sqlQuery = `SELECT * FROM sessions WHERE userid =${data_id};`
                        client.query(sqlQuery, (err, result) => {
                            if (err) {
                                throw (err)
                            }
                            var resData = result;
                            t.equal(values.valid, resData.valid, 'value is match');
                            t.equal(values.id, resData.id, 'username is match');
                            t.equal(values.exp, resData.exp, 'password is match');
                            t.end()
                        })
                    })
                })
                test('function getSession should return the session', (t) => {
                  values = JSON.stringify(insertedValues);
                  var id  = parseInt(JSON.parse(values).id);
                    session.getSession(client, id, (err, result) => {
                        if (err) {
                            throw err;
                        }

                        var resData = result.rows[0];
                        var topValues = JSON.stringify(insertedValues);
                        var resValues = resData.values;
                        t.equal(topValues, resValues, 'value is match');
                        t.end()

                    })
                })
            })
        })
    })
})
