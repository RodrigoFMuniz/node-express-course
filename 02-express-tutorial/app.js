const app = require('express')()

const { people } = require('./data')
// GET

app.get('/', (req, res) => {
    return res.status(200).json({"success":true, data: people})
})

app.listen(5000, () => console.log("server listening"))