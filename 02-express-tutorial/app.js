const http = require('http');

const PORT = 5000;
const server = http.createServer((req, res) => {
  res.end(`${req.url} , ${req.statusCode}`);
});

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
