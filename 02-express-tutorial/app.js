const http = require('http');

const server = http.createServer((req, res) => {

  if(req.url === '/'){
    console.log(req.url)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Text</h1>')
    res.end("olá");
  }
  else if (req.url === '/about'){
    console.log(req.url)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>About</h1>')
    res.end();
  }
  else{
    console.log(req.url)
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Not Found</h1>')
    res.end();
  }
});

server.listen(5000, () => console.log('Listening on port 5000'));