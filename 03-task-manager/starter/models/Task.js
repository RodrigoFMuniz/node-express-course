const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{ 
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxlength: [20, 'name must have less than 20 chars']
    },
    completed:{
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)