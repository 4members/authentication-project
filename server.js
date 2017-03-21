var hapi = require('hapi');
var hapiAuthJWT = require('hapi-auth-jwt2');
var routes = require('./routes.js');
var config = require('./config.js');
config = config.local;
var connect = require('./services/database/connect.js');



var server = new hapi.Server();
server.connection({
    port: 8080
});
var client = connect(config);

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
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("listen to 8080");
});
