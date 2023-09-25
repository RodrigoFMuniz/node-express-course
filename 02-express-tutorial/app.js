const express = require('express')

const app = express()

const people = require('./routes/people')


const auth = require('./routes/auth')

// midleware static assets

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use('/login', auth)
app.use(express.json())


app.use('/api/people', people)

app.listen(5000, () => console.log("server listening"))