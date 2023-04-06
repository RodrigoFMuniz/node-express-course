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
const updateTask = async (req,res) =>{
    const {id: taskID} = req.params
    const body = req.body
    console.log(taskID, body)

    try{
        const task = await Task.findByIdAndUpdate({_id: taskID}, body )
        console.log(task)
        if(!task) res.status(404).json({msg:`No tasks with id ${taskID}`})
        return res.status(200).json(task)
    }
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}
const deleteTask = async (req,res) =>{

    const {id: taskID} = req.params
    try {  
        const task = await Task.findOneAndDelete({_id: taskID})
        console.log(task)
        if(!task){
            return res.status(404).json(`No tasks with id ${taskID}`)
        }
        return res.status(200).json(task)
    }catch(err){
        return res.status(500).json({msg: err.message})
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