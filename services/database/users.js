var client = require('./config.js')

function addUser(client, data, cb) {
    //data meanis {username,password,bio}
    cb(null,true);
}

function selectUser(client, email, cb) {
    //select user by email or username
    //email or username is String
    cb(null,true);
}

function updateUserData(client, data, cb) {
    //data meanis {username,password,bio}
    cb(null,true);
}

module.exports = {
    addUser: addUser,
    selectUser: selectUser,
    updateUserData: updateUserData
}
