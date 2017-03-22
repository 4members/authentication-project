const signup = require('./handlers/signup.js')
const Joi = require('joi')
const validate = require('./services/validate.js')
const login =require('./handlers/login.js')


module.exports = [{
    method: 'GET',
    path: '/',
    handler:function (req,reply) {
      reply.view('index')
    }
},
{
  method:'POST',
  path:'/signup',
  handler: signup,
  config:{
    auth: false,
    payload : {}

  }
},
{
  method:'GET',
  path:'/login',
  handler: login,
  config:{
    auth: false,
  
}
  }]
