const http = require('http');

const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./jsonResponses');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/style.css': htmlHandler.getCSS,
  '/': htmlHandler.getIndex,
  index: htmlHandler.getIndex,
  notFound: jsonHandler.notFound,
};

const onRequest = (request, response) => {
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(request.url, `${protocol}://${request.headers.host}`);

  const handler = urlStruct[parsedUrl.pathname];
  if (handler) {
    handler(request, response);
  } else {
    urlStruct.notFound(request, response); // 404
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
