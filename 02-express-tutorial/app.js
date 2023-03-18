const express = require('express');

const app = express();

const {logger} = require('./logger');

app.use('/about', logger)

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/product', (req, res) => {
  res.send('Product');
});
app.get('/items', (req, res) => {
  res.send('items');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
