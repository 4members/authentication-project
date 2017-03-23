const signup = require('./handlers/signup.js')
const Joi = require('joi')
const root = require('./handlers/root.js');
const validate = require('./services/validate.js')
const login = require('./handlers/login.js')
const logout = require('./handlers/logout.js')
const profile = require('./handlers/profile.js')


module.exports = [
 {
    method: 'POST',
    path: '/signup',
    handler: signup,
    config: {
      auth:false,
        validate: {
            payload: validate.signup
        }
    }
}, {
    method: 'POST',
    path: '/login',
    handler: login,
    config: {
        auth:false
    }
}, {
    method: 'GET',
    path: '/user',
    handler: profile,
    config: {
        auth:'jwt'
    }
},{
    method: 'GET',
    path: '/logout',
    handler: logout,
    config: {
        auth:'jwt'
    }
}]
