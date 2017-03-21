const signup = require('./handlers/signup.js')
const Joi = require('joi')
const validate = require('./services/validate.js')
const login =requir('./handlers/login.js')


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
    payload:validate.signup

  }
},
{
  method:'GET',
  path:'/login',
  handler: ,
  config:{
    auth: false,
    payload:validate.login

  }


]
