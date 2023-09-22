const http = require('http');
const { readFileSync } = require('fs')


// get all files

const homePage = readFileSync('./navbar-app/index.html')
const homeCss = readFileSync('.\\navbar-app\\styles.css')
const homeLogo = readFileSync('.\\navbar-app\\logo.svg')
const homeJs = readFileSync('.\\navbar-app\\browser-app.js')

// start the server
const server = http.createServer((req, res) => {

  const url = req.url
  // HTML page
  if(url === '/'){
    console.log(url)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(homePage)
    res.end();
  }
  //CSS resource
  else if (url === '/styles.css'){
    console.log(url)
    res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
    res.write(homeCss)
    res.end();
  }
  else if (url === '/logo.svg'){
    console.log(url)
    res.writeHead(200, { 'Content-Type': 'image/svg+xml; charset=utf-8' });
    res.write(homeLogo)
    res.end();
  }
  else if (url === '/browser-app.js'){
    console.log(url)
    res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
    res.write(homeJs)
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