var JWT = require('jsonwebtoken');
var session = require('../services/database/session.js')

module.exports = (req, reply) => {
  reply.view('index.html');
}
