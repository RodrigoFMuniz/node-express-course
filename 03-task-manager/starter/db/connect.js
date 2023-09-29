const mongoose = require('mongodb')

const connectDB = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB