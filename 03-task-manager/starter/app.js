const express = require('express')

const app = express()

const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')

require('dotenv').config()

const {notFound} = require('./middleware/not-found')

const errorHandlerMiddleware = require('./middleware/error-handler')

// middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes 

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

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