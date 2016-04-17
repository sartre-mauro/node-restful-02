var http = require('http');
var port = 8180;

function handle_request(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  response.end('Hello Node - Are u restless to go restful?\n');
  console.log('Requested');
}

http.createServer(handle_request).listen(port, '127.0.0.1');

console.log('Started Node.js http server at http://127.0.0.1:' + port);
