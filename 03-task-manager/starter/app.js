const express = require('express')

const app = express()

const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')

require('dotenv').config()

const {notFound} = require('./middleware/not-found')

const errorHandlerMiddleware = require('./middleware/error-handler')

const port = process.env.PORT || 3000

// middlewares
app.use(express.static('./public'))
app.use('/notfound', express.static('./assets/404'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes a

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

// Launch server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Listening on port ${port} task manager`))
    } catch (error) {
        console.log(error)
    }
}

start()