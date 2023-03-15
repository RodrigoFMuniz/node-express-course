const express = require('express');

const app = express();
const {products} = require('./data.js')
// const path = require('path');

// app.use(express.static('./public'));

app.get('/', (req, res) => {
  // res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
  res.status(200).json(products);
});


app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found<h1>');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
