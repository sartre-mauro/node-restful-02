function handle_GET_request(response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('GET action was requested');
}

function handle_POST_request(response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('POST action was requested');
}

function handle_PUT_request(response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('PUT action was requested');
}

function handle_HEAD_request(response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('HEAD action was requested');
}

function handle_DELETE_request(response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('DELETE action was requested');
}

function handle_bad_request(response) {
  response.writeHead(400, {
    'Content-Type': 'text/plain'
  });
  response.end('Bad request');
}

exports.handle_request = function (request, response) {
  switch (request.method) {
    case 'GET':
      handle_GET_request(response);
      break;
    case 'POST':
      handle_POST_request(response);
      break;
    case 'PUT':
      handle_PUT_request(response);
      break;
    case 'DELETE':
      handle_DELETE_request(response);
      break;
    case 'HEAD':
      handle_HEAD_request(response);
      break;
    default:
      handle_bad_request(response);
      break;
  }
  console.log('Request processing by http-module ended');
};
