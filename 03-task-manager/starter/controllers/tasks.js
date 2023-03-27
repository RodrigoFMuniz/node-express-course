const Task = require('../models/tasks')

const getTasks = (req,res) =>{
    res.status(200).json({msg: 'get all tasks'})
}
const createTask = async (req,res) =>{
    try{
        console.log(req.body)
        const task = await Task.create(req.body)
        res.status(201).json({detail: task})
    } catch(err){
        res.status(500).json({msg: err.message})
    }
}
const getTaskById = (req,res) =>{
    const {id} = req.params
    res.status(200).json({msg: `get a specific task with id ${id}`})
}
const updateTask = (req,res) =>{
    const {id} = req.params
    res.status(200).json({msg: `update a task with id ${id}`})
}
const deleteTask = (req,res) =>{
    const {id} = req.params
    res.status(204).json({msg: `delete a task with id ${id}`})
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}