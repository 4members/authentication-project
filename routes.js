const signup = require('./handlers/signup.js')

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
  handler: signup
}
]
