const http = require('http')

const server = http.createServer((req, res)=>{
  console.log('Hello')
  res.end("Hello")
});

server.listen(5000, ()=> console.log("Listening on port 5000"))