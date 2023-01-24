const { readFileSync } = require('fs');
const http = require('http');

const PORT = 5000;
const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.headers.host);
  // console.log(req.headers.connection);
  // console.log(req.headers['accept-language']);
  // console.log(req.headers.referer);
  // console.log(req.headers['accept-patch']);
  const home = readFileSync('.\\index.html');

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(home);
    res.end();
  }
  if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About page</h1>');
    res.end();
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Not Found</h1>');
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
