const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        minlength: [3, 'Name must have more than 2 characters'],
        maxLength: [40, 'Name must have less than 41 characters']
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)