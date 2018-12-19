/*
*Entry point for the application, also responsible for routing requests and handling errors
*/



const http = require('http');
const helloapp  =  require('./lib/helloapp');
const config =  require('./config');

var server  = http.createServer((req,resp)=>{
  console.log('url ' + req.url);
  if (helloapp.match(req.url)){
    helloapp.sayHello(req,resp);
  }else{
      handleError(req,resp);
  }

});

console.log("Listening on configured port " +config.port +" " );
server.listen(config.port);

function  handleError(req, resp) {
  resp.setHeader('Content-Type', 'text/html');
  resp.statusCode=201;
  var content = "<html><header/><body>";
  content += '<h2>Your request is invalid, please click <a href=\"' + helloapp.path+'\">here </a> for a warm welcome.<h2>';
  content+="</body></html>";
  resp.end(content);
}
