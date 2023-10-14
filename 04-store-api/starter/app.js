require('dotenv').config()

const notFoundMiddleware = require('./middleware/not-found')

const errorMiddleare = require('./middleware/error-handler')

const port = process.env.PORT || 5000

const express = require('express')

const app = express()

//middleware

app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('<h1>Hello Store API</h1><a href = "/api/v1/products"> products route </a>')
})

// products route

app.use(notFoundMiddleware)
app.use(errorMiddleare)

const start = async () => {
    try{
        app.listen(port, () => console.log('Listening'))
    }catch(error){

    }
}

start()