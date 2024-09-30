const users = {
  name: 'Joe',
  age: 12,
};

// Returns a JSON response
const respond = (request, response, content, status) => {
  let body = {};
  if (content) {
    body = content;
  }

  console.log(request.method);

  // set status code and content
  response.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body, 'utf8'),
  });

  // Exclude bodiless requests
  if (request.method !== 'HEAD' || status !== 204) {
    response.write(body);
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

const badRequest = (request, response) => {
  const responseObj = {
    message: 'Bad Request!',
    id: 'badRequest',
  };
  const status = 400;

  const responseString = JSON.stringify(responseObj);
  return respond(request, response, responseString, status);
};

const getUsers = (request, response) => {
  const responseJson = {
    users,
  };

  return respond(request, response, JSON.stringify(responseJson), 200);
};

const addUser = (request, response) => badRequest(request, response);

module.exports = {
  notFound,
  addUser,
  badRequest,
  getUsers,
};
