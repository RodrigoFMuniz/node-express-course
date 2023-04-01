const Task = require('../models/tasks')

const getTasks = async (req,res) =>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks: tasks})
    }catch(err){
        res.status(404).json({msg: err})
    }
}
const createTask = async (req,res) =>{
    try{
        console.log(req.body)
        const task = await Task.create(req.body)
        res.status(201).json({detail: task})
    } catch(err){
        res.status(500).json({msg: err})
    }
}
const getTaskById = async (req,res) =>{
    const {id} = req.params
    try {
        // const query = Task.where({_id: id})
        // const task = await query.findOne()
        const task = await Task.findOne({_id: id})
        // const task = await Task.findById(id)
        if(!task){
           return  res.status(404).json({msg: `No tasks with id ${id}`})
        }
        return res.status(200).json({task})
    }catch( err){
        return res.status(500).json({msg: err})
    }
}
const updateTask = (req,res) =>{
    const {id} = req.params
    res.status(200).json({msg: `update a task with id ${id}`})
}
const deleteTask = async (req,res) =>{

    const {id: taskID} = req.params
    const task = await Task.findOne({_id: taskID})
    try {  
        console.log(task)
        return res.status(200).json(task)
    }catch(err){
        return res.status(404).json(`No tasks`)
    }


    
    

    // const {id} = req.params
    // console.log(id)
    // const task = await Task.findOne({_id: id})
    // if(!task){
    //     return res.status(404).json({msg:`No task with id ${id}`})
    // }
    // const deleted = await Task.deleteOne({_id: id})
    // console.log(deleted.deletedCount)
    // if(deleted.deletedCount === 1) return res.status(200).json(task)
    // return res.status(404).json({msg:`No deleted item`})
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}