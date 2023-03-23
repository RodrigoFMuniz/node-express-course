const express = require('express');

const app = express();

const tasks = require('./routes/tasks')

const PORT = 3000;

// middlewares

app.use(express.json())

// routes

app.use('/api/v1/tasks', tasks)



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));