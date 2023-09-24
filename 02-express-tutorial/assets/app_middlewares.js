const express = require('express');

const app = express()

const { logger } = require('./logger')

const { authorized } = require('./authorize')

// middlewares

app.use('/api', [authorized, logger ])

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/api/about', (req, res) => {
    // console.log(req)
  res.send('api/about');
});

app.get('/api/next', (req, res) => {
  res.send('/api/next');
});

app.listen(5000, () => console.log('Listening on port 5000'))