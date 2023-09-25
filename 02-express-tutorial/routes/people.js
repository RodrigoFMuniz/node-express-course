const express = require('express')
const router = express.Router()

const { people } = require('../data')

// GET

router.get('/', (req, res) => {
    return res.status(200).json({"success":true, data: people})
})

// POST


router.post('/', (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(404).json({success: false, msg: "Please, provide a name"})
    }
    return res.status(201).json({ success: true, person: name })
})

router.put('/:personID', (req, res) =>{
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

router.delete('/:personID', (req, res) =>{
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


module.exports = router