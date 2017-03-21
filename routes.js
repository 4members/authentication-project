var login = require('./handlers/login.js')

module.exports = [{
    method: 'GET',
    path: '/',
    handler: login
}]
