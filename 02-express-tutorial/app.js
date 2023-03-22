const express = require('express');

const app = express();

const people = require('./routes/people');

const auth = require('./routes/auth');

// static asets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));

// parse jsons
app.use(express.json());

app.use('/api/people', people.router);

app.use('/login', auth);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
