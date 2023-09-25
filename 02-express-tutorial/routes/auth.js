const express = require('express')

const router = express.Router()

const { auth } = require('../assets/auth')

router.use('/', auth)

router.post('/', (req, res) => {
    // console.log(req.body)
    // const {name} = req.body
    // if( name.length === 0){
    //     res.status(404).redirect('/api/people')
    // }
    // else res.status(200).send(req.body.name)
    res.status(200).send(req.user.name)
})

console.log(router)

module.exports = router