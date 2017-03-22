var test = require('tape');
var server = require ('../../server.js')
const requestDefaults = {
    method: 'POST',
    url: '/signup',
};
test('endpoint test | POST/ | Right Request', t => {
    const request = Object.assign({}, requestDefaults,{
      payload:{
        username: 'test',
        email: 'test@test.com',
        password:'11219dgdrgerg'
      }
    });
    //this method is to re-write the same request with different parameters or payload instead of re-writting the same request a couple of times
    return server.inject(request)
        .then(response => {
            t.equal(response.result.text, 'you are successfuly added', 'status code is 200');

            server.stop(t.end);
        });
});
test('endpoint test | POST/ | Bad Request with existed user', t => {
    const request = Object.assign({}, requestDefaults,{
      payload:{
        username: 'test',
        email: 'test@test.com',
        password:'11219dgdrgerg'
      }
    });
    //this method is to re-write the same request with different parameters or payload instead of re-writting the same request a couple of times
    return server.inject(request)
        .then(response => {
            console.log(response.result);
            t.is(response.result.status, 'fail', 'Sign up failed because user exists');

            server.stop(t.end);
        });
});

test('endpoint test | POST/ | Bad Request with wrong payload', t => {
    const request = Object.assign({}, requestDefaults,{
      payload:{
        username: 'test',
        email: 'test@test.com',
        password:'11'
      }
    });
    //this method is to re-write the same request with different parameters or payload instead of re-writting the same request a couple of times
    return server.inject(request)
        .then(response => {

         var found = response.result.message.indexOf('fails')
            t.notEqual(found,-1, 'Sign up failed for bad password');
            server.stop(t.end);
        });
});
