
const auth = (req, res, next) =>{
    console.log(req.body)
    const {name} = req.body
    if(name ==='Rodrigo'){
        req.user = "Rodrigo"
        next()
    }
    else{
        res.status(404).redirect('/api/people');
    }
}

module.exports = { auth }