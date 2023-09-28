const express = require('express')

const app = express()

const tasks = require('./routes/tasks')

app.use(express.json())

app.use('/api/v1/tasks', tasks)


// // POST
// app.post('/api/v1/tasks', (req, res) => {
//     res.send('HOME')
// })

// // PATCH
// app.patch('/api/v1/tasks/:id', (req, res) => {
//     res.send('HOME')
// })

// // DELETE
// app.delete('/api/v1/tasks/:id', (req, res) => {
//     res.send('HOME')
// })


app.listen(5000, () => console.log('Listening on port 5000 task manager'))