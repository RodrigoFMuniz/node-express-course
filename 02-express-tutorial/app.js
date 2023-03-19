const express = require('express');

const app = express();

const { people } = require('./data');

// static asets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

function compare(a, b) {
  if (a.id < b.id) {
    console.log('A<B: ', a, b);
    return -1;
  }
  if (a.id > b.id) {
    console.log('A>B: ', a, b);
    return 1;
  }
  // são idênticos
  console.log('A==B: ', a, b);
  return 0;
}


app.get('/api/people', (req, res) => {
  // const newPeople = people.sort((a, b) => (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0);
  const newPeople = people.sort(compare);
  console.log(newPeople);
  res.status(200).json({ success: true, data: newPeople });
});

app.post('/login', (req, res) => {
  if (!req.body.name) {
    return res.status(404).send("Data wasn't provided");
  }
  return res.status(200).send(`Welcome ${req.body.name}`);
});
app.post('/api/people', (req, res) => {
  console.log(req.body);
  if (!req.body.name) return res.status(400).json({ success: false, msg: 'please provide name value' });
  if (req.body.name.length < 3) return res.status(400).json({ success: false, msg: 'please provide a valid name' });
  if (!req.body.id) return res.status(400).json({ success: false, msg: 'Missing id' });
  const alreadyExists = people.some((p) => p.id === Number(req.body.id));
  if (alreadyExists) return res.status(400).json({ success: false, msg: 'Already exists' });
  people.push(req.body);
  return res.status(201).json({ success: true, person: req.body });
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));

  console.log(person);
  console.log(id);

  if (!person) return res.status(404).json({ success: false, msg: 'Person not found' });
  if (name === undefined || name === '' || name === false) return res.status(404).json({ success: false, msg: 'Please, provide a name' });
  person.name = name;
  return res.status(200).json({ success: true, msg: person });
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});

