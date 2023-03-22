const { people } = require('../data');

const getPeople = (req, res) => {
    const newPeople = people.sort((a, b) => (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0);
    res.status(200).json({ success: true, data: newPeople });
  }

const createPerson = (req, res) => {
    console.log(req.body);
    if (!req.body.name) return res.status(400).json({ success: false, msg: 'please provide name value' });
    if (req.body.name.length < 3) return res.status(400).json({ success: false, msg: 'please provide a valid name' });
    // if (!req.body.id) return res.status(400).json({ success: false, msg: 'Missing id' });
    // const alreadyExists = people.some((p) => p.id === Number(req.body.id));
    // if (alreadyExists) return res.status(400).json({ success: false, msg: 'Already exists' });
    const nameAlreadyExists = people.some((p) => p.name === req.body.name);
    if (nameAlreadyExists) return res.status(400).json({ success: false, msg: 'Name Already exists' });
    people.push(req.body);
    return res.status(201).json({ success: true, person: req.body });
}


const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = people.find((p) => p.id === Number(id));
  
    console.log(person);
    console.log(id);
  
    if (!person) return res.status(404).json({ success: false, msg: 'Person not found' });
    if (name === undefined || name === '' || name === false) return res.status(404).json({ success: false, msg: 'Please, provide a name' });
    person.name = name;
    return res.status(200).json({ success: true, msg: person });
}

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((p) => p.id === Number(id));
  
    console.log(person);
    if (!person) return res.status(404).json({ sucess: false, msg: 'Person not found' });
  
    console.log(people.splice(person.id - 1, 1));
  
    return res.status(204).json({ success: true, msg: 'Person deleted' });
}

module.exports = { 
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
};