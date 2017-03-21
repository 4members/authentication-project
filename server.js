var hapi = require('hapi');
var hapiAuthJWT = require('hapi-auth-jwt2');
var routes = require('./routes.js')

var server = new hapi.Server();
server.connection({
    port: 8080
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
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log("listen to 8080");
});
