var test = require('tape');
var server = require ('../../server.js')
const requestDefaults = {
    method: 'POST',
    url: '/login',
};
test('endpoint test | POST/ | Right Request', t => {
    const request = Object.assign({}, requestDefaults,{
      payload:{
        email: 'shahenaz@abeer.com',
        password:'1121993'
      }
    });
    //this method is to re-write the same request with different parameters or payload instead of re-writting the same request a couple of times
    return server.inject(request)
        .then(response => {
          console.log(response.result);
            t.is(response.statusCode, 200, 'status code is 200');

            server.stop(t.end);
        });
});
test.onFinish(() => {
    process.exit(0)
});
