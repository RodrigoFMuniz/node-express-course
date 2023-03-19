const express = require('express');

const app = express();

const { people } = require('./data');

// static asets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/login', (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Data wasn't provided");
  }
  return res.status(200).send(`Welcome ${req.body.name}`);
});
app.post('/api/people', (req, res) => {
  console.log(req.body)
  if (!req.body.name) return res.status(400).json({ success: false, msg: 'please provide name value' });
  return res.status(201).json({ success: true, person: req.body.name });
});


app.listen(5000, () => {
  console.log('Listening on port 5000');
});
