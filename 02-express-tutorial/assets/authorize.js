const authorized = (req, res, next) => {
    if(req.query.name === "rodrigo"){
        console.log(req)
        req.user = {name:'Rodrigo', surname: 'Muniz'}
        console.log('Authorized')
        next()
    }
    else{
        console.log('Unauthorized')
        return res.status(401).json({"Details": "Unauthorized"})
    }
}

module.exports = {authorized}