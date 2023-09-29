const express = require('express')

const app = express()

const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')

require('dotenv').config()

// middlewares

app.use(express.json())

//routes 

app.use('/api/v1/tasks', tasks)

// Launch server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT} task manager`))
    } catch (error) {
        console.log(error)
    }
}

start()