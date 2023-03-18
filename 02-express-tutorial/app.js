const express = require('express');

const app = express();

const { people } = require('./data');

const func = (req, res, next) => {
  console.log('Hello')
  req.value = { name: 'World' };
  next();
}

app.get('/:uid', func, (req, res) => {
  if (req.params.uid === '2') return res.status(200).json({ success: true, data: people });
  return res.status(404).send('Unauthorized');
});
app.get('/', func, (req, res) => {
  if (req.query.uid === '2') return res.status(200).json({ success: true, data: people });
  return res.status(404).send('Unauthorized');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
