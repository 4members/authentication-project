var session = require('../services/database/session.js')
var session = require('../services/database/session.js')
var connect = require('../services/database/connect.js')
var config = require('../services/database/config.js');
var client = connect(config.local)
var JWT = require('jsonwebtoken');
var aguid = require('aguid');
var cookie_options = require('../services/jwt/cookie-options.js');
module.exports = (req, reply) => {
    console.log('it here');
    var token = JWT.verify(req.state.token, process.env.JWT_SECRET);
    console.log("token", token);

    session.getSession(client, token.id, (err, result) => {
        console.log(result.rows[0]);
        var sessionval = JSON.parse(result.rows[0].values);
        sessionval.valid = false;
        sessionval.ended = new Date().getTime();
        session.setSession(client, result.rows[0].id, JSON.stringify(sessionval), (err, result) => {
            return reply({
                    text: 'You have been logged out'
                })
                .unstate('token', cookie_options);
        })
    })
    token.valid = false;
    token.exp = new Date().getTime();
    // session.setSession(client, reply.rows[0].id, token, )
}
