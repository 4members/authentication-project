const Joi =require('joi')

function login() {
  username: Joi.string()
  password: Joi.string()
}

function signup() {
    username: Joi.string().alphanum().min(3).max(30).required()
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(8).max(15)
    email: Joi.string().email()
}

module.exports = {
    loginValidate: loginValidate,
    signupValidate: signupValidate
}
