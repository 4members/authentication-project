var aguid = require('aguid') // https://github.com/ideaq/aguid

module.exports = () => {
    return {
        valid: true, // this will be set to false when the person logs out
        id: aguid(), // a random session id
        exp: new Date().getTime() + 30 * 60 * 1000 // expires in 30 minutes time
    }
}
