// Returns a JSON response
const respond = (request, response, content, status) => {
  // set status code and content
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });

  // Exclude bodiless requests
  if (request.method !== 'HEAD' || status !== 204) {
    response.write(content);
  }
  response.end();
};

const notFound = (request, response) => {
  const responseObj = {
    message: 'The page you are looking for was not found!',
    id: 'notFound',
  };
  const status = 404;

  const responseString = JSON.stringify(responseObj);
  return respond(request, response, responseString, status);
};

module.exports = {
  notFound,
};
