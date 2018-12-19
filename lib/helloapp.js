/*
* helloapp.js is responsible for generating a json hello message and returning an http response
*/
const welcome_msg = {
  'msg':"Welcome dear guest, we do hope you enjoy your visit",
  'time': new Date()
};


var lib = {};
lib.path = '/hello';
lib.sayHello = function(req,resp){
  resp.statusCode = 200;
  // resp.setHeader('Content-Type', 'text/html');
  resp.setHeader('Content-Type', 'application/json');
  resp.end(JSON.stringify(welcome_msg));

};
lib.match = function(path){
  return lib.path==path;
}
module.exports =  lib;
