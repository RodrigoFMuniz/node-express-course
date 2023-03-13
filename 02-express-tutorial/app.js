// const express = require('express');

// const app = express();

// const { readFileSync } = require('fs');
const http = require('http');
const { retrieveData } = require('./models');

const PORT = 5000;
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
//   console.log(req.headers.host);
//   console.log(req.headers.connection);
//   console.log(req.headers['accept-language']);
//   console.log(req.headers.referer);
//   console.log(req.headers['accept-patch']);
//   const homeIndex = readFileSync('.\\navbar-app\\index.html');
//   const homeStyles = readFileSync('.\\navbar-app\\styles.css');
//   const homeLogo = readFileSync('.\\navbar-app\\logo.svg');
//   const homeBrowserJs = readFileSync('.\\navbar-app\\browser-app.js');
//   const projects = readFileSync('.\\index.html');

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(retrieveData('.\\navbar-app\\index.html').file);
    res.end();
  }
  else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(retrieveData('.\\navbar-app\\styles.css').file);
    res.end();
  }
  else if (req.url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(retrieveData('.\\navbar-app\\logo.svg').file);
    res.end();
  }
  else if (req.url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(retrieveData('.\\navbar-app\\browser-app.js').file);
    res.end();
  }
  else if (req.url === '/projects.html') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(retrieveData('.\\index.html').file);
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
