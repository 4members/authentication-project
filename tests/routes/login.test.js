var test = require('tape');
var server = require ('../../server.js')
const requestDefaults = {
    method: 'POST',
    url: '/login',
};
test('endpoint test | POST/login | Right Request', t => {
    const request = Object.assign({}, requestDefaults,{

        payload:{
          username: 'test',
          password:'11219dgdrgerg'
        }

    });
    //this method is to re-write the same request with different parameters or payload instead of re-writting the same request a couple of times
    return server.inject(request)
        .then(response => {
          console.log(response.result);
            t.equal(response.result.status, 'success', 'login is successfully');

            server.stop(t.end);
        });
});

test('endpoint test | POST/ | Bad request', t => {
    const request = Object.assign({}, requestDefaults,{
      payload:{
        username: 'test',
        password:'1121993'
      }
    });
    //this method is to re-write the same request with different parameters or payload instead of re-writting the same request a couple of times
    return server.inject(request)
        .then(response => {
            t.equal(response.result.status, 'fail', 'Fiald to login with wrong password');

            server.stop(t.end);
        });
});
test.onFinish(() => {
    process.exit(0)
});
