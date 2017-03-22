var hapi = require('hapi');
var hapiAuthJWT = require('hapi-auth-jwt2');
var env = require('env2')
env('./config.env');
var routes = require('./routes.js');

var client = require('./services/database/connect.js');

var createtables = require('./services/database/createtables.js');


var server = new hapi.Server();
server.connection({
    port: 8080
});
createtables(client, (err, result) => {
    if (err) {
        throw err
    }
    console.log('session',result);

});

server.register([hapiAuthJWT, require('inert'), require('vision')
        // no options required
    ],
    function(err) {
        if (err) {
            throw err;
        }

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
