const http = require('http');

const PORT = 5000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end('<h1>Home page</h1>');
});

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
