var test = require('tape')
var shot = require('shot')
var env = require('env2')
env('./config.env');
var config = require('../../services/database/config.js')
var user = require('../../services/database/users.js')
config = config.test;
var connect = require('../../services/database/connect.js')
var client = connect(config);

test('function addUser should insert the data to database', (t) => {
    var data = {
        email: 'muh@ms.co',
        username: 'muhushtaha',
        password: 'muh123muh',
    }
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
            t.equal(data.email, resData.email,'email is match');
            t.equal(data.username, resData.username,'username is match');
            t.equal(data.password, resData.password,'password is match');
            t.end();
        })
    })
})
