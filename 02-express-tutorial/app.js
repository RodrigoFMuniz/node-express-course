const express = require('express')

const app = express()

const { people } = require('./data')

const { auth } = require('./assets/auth')


// midleware static assets

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use('/login', auth)
app.use(express.json())

app.post('/login', (req, res) => {
    // console.log(req.body)
    // const {name} = req.body
    // if( name.length === 0){
    //     res.status(404).redirect('/api/people')
    // }
    // else res.status(200).send(req.body.name)
    res.status(200).send(req.user.name)
})

// GET

app.get('/api/people', (req, res) => {
    return res.status(200).json({"success":true, data: people})
})

// POST


app.post('/api/people', (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(404).json({success: false, msg: "Please, provide a name"})
    }
    return res.status(201).json({ success: true, person: name })
})

app.put('/api/people/:personID', (req, res) =>{
    const {personID} = req.params
    const {name} = req.body

    const person = people.find((p) => p.id === Number(personID))

    if(!person){
        return res.status(404).json({success: false, msg: "Person not found"})
    }
    const newPeople = people.map()
    const newPerson = newPeople.find((p) => p.id === Number(personID))
    newPerson.name = name
    return res.status(200).json(newPeople)
})

app.delete('/api/people/:personID', (req, res) =>{
    const {personID} = req.params

    const person = people.find((p) => p.id === Number(personID))
    console.log(person)
    // console.log(people.indexOf(person))
    
    if(!person){
        return res.status(404).json({success: false, msg: "Person not found"})
    }
    const newPeople = people.map((person)=>{
        return person
    })
    const newPerson = newPeople.find((p) => p.id === Number(personID))
    console.log(newPeople.indexOf(newPerson))
    newPeople.splice(newPeople.indexOf(newPerson), 1)
    return res.status(200).json(newPeople)
})


app.listen(5000, () => console.log("server listening"))