const express = require('express');

const app = express();

const morgan = require('morgan');

const { logger } = require('./logger');

// const authorize = require('./authorize');

app.use(morgan('tiny'));
// app.use('/about', [logger, authorize]);

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  console.log(req.user);
  // res.send(`About logged ${req.user.name}`);
  res.send('About logged Rodrigo');
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
