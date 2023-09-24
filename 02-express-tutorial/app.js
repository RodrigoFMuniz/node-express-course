const express = require('express')

const app = express()

const { people } = require('./data')

const { auth } = require('./assets/auth')


// midleware static assets

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use('/login', auth)

// GET

app.get('/api/people', (req, res) => {
    return res.status(200).json({"success":true, data: people})
})

// POST

app.post('/login', (req, res) => {
    // console.log(req.body)
    // const {name} = req.body
    // if( name.length === 0){
    //     res.status(404).redirect('/api/people')
    // }
    // else res.status(200).send(req.body.name)
    res.status(200).send(req.body.name)
})

app.listen(5000, () => console.log("server listening"))