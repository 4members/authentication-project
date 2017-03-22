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
    validate: {
    payload:validate.signup
  }
}
},
{
  method:'POST',
  path:'/login',
  handler: login,
  config:{
    payload : {}
}
  },
{
  method:'GET',
  path:'/login{user}',
  handler:()=>{},
  
}]
