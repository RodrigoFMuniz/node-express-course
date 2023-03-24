const express = require('express');

const app = express();

const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')

require('dotenv').config()

const PORT = 3000;

// middlewares

app.use(express.json())

// routes

app.use('/api/v1/tasks', tasks)


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

    } catch (error) {
        console.log(error.message, error.code, error.codeName)
    }
}


start()