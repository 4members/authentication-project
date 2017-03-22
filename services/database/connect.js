var pg = require('pg')
const node_env = process.env.NODE_ENV
var config = require('./config.js');
const dbconfig = node_env === 'test' ? config.test : config.local;

const pool = new pg.Pool(config.test);


const query = (text,cb) => pool.connect((err,client,done) =>{
  console.log('client',client);
  if(err){
    throw err;
  }
  client.query(text,(err,result) =>{
    done();
    cb(err,result);
  });
});

const client = {
  query: query
}
 module.exports = client;
