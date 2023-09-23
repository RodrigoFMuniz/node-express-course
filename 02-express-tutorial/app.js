const path = require('path');

const express = require('express');

const app = express();

// setup static middleware
app.use(express.static('./public'));

// app.get

//First method, just leaving the index.html file inside of express.static folder.

// Second method to load all static files. Usinf middleware express.static
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// third method to browse all static files. One by One
// app.get('/', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });
// app.get('/styles.css', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/styles.css'));
// });
// app.get('/logo.svg', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/logo.svg'));
// });
// app.get('/browser-app.js', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/browser-app.js'));
// });

app.get('/about', (req, res) => {
  res.status(200).send('ABOUT');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1 style ="color: #f00";>Not Found</h1>');
});
// app.post
// app.put
// app.delete
// app.all
// app.use



// app.listen
app.listen(5000, ()=> console.log('starting the server'))