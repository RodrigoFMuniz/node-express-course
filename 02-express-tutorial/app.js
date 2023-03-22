const express = require('express');

const app = express();

const people = require('./routes/people');

// static asets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));

// parse jsons
app.use(express.json());

app.use('/api/people', people.router);

app.post('/login', (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Data wasn't provided");
  }
  return res.status(200).send(`<h1>Welcome ${req.body.name}</h1>`);
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});

