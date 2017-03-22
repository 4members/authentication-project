var hapi = require('hapi');
var hapiAuthJWT = require('hapi-auth-jwt2');
var env = require('env2')
env('./config.env');
var routes = require('./routes.js');
var config = require('./services/database/config.js');
config = config.local;
var connect = require('./services/database/connect.js');
var client = connect(config);
var createtables = require('./services/database/createtables.js');
const validate = require('./services/jwt/validate.js')


var server = new hapi.Server();
server.connection({
    port: 8080
});
createtables(client, (err, result) => {
    if (err) {
        throw err
    }

});

server.register([hapiAuthJWT, require('inert'), require('vision')
        // no options required
    ],


    function(err) {
        if (err) {
            throw err;
        }
          server.auth.strategy('jwt', 'jwt', true, {
              key: process.env.JWT_SECRET,
              validateFunc: validate,
              verifyOptions: {
                  ignoreExpiration: true,
                  algorithms: ['HS256']
              }
          });

        server.route(routes);

        server.views({
            engines: {
                html: require('handlebars')
            },
            relativeTo: __dirname,
            path: 'views'
        });

    });

if (!module.parent) {
  server.start(function() {
    console.log("server running at localhost:8080");
  });
}
module.exports = server;
