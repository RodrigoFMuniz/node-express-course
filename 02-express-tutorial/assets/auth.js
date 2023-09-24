const {people} = require('../data')

const auth = (req, res, next) =>{
    // console.log(req.body)
    const {name} = req.body
    
    const user = people.find((person) => person.name === name)
    
    if(user) {
        req.user = user
        next()
    }
    else{
        res.status(404).redirect('/api/people');
    }
}

module.exports = { auth }