var client = require('./config.js')

function addUser(client, data, cb) {
    //data meanis {username,password,bio}
}

function selectUser(client, email, cb) {
    //select user by email or username
    //email or username is String
}

function updateUserData(client, data, cb) {
    //data meanis {username,password,bio}
}

module.exports = {
    addUser: addUser,
    selectUser: selectUser,
    updateUserData: updateUserData
}
