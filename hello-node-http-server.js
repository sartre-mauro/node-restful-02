var httpModule = require('./modules/http-module');

var http = require('http');
var port = 8180;
var localhost = '127.0.0.1'



http.createServer(httpModule.handle_request).listen(port, localhost);

console.log('Started Node.js http server at http://' + localhost + ':' + port);
