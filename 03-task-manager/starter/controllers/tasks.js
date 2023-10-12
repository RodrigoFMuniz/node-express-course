const Task = require('../models/Task')

const getAll = async (req, res) => {

    const name = req.query.name
    try {
        if (!name){
            const task = await Task.find({})
            return res.status(200).json({tasks: task});
        }
        const task = await Task.find({name:name})
        return res.status(200).json({tasks: task});
    }
    catch(error){
        return res.status(404).json({msg: error})
    }
}

const getById = async (req, res) => {
    try{
        const task = await Task.findOne({_id : req.params.id})
        if (!task) return res.status(404).json({msg: "No task"})
        console.log(task)
        return res.status(200).json({task });
    }
    catch(error){
        res.status(500).json({msg: error})
    }
    
}
const createTask = async (req, res) => {
    console.log(req.body)
    try{
        const task = await Task.create(req.body)
        console.log(task)
        return res.status(201).json({ task })
    }
    catch(err){
        return res.status(500).json({"details": err.errors.name.message})
    }
    
    
}
const updateTask = async (req, res) => {

    try{
        const { id } = req.params

        const { body } = req

        const task =  await Task.findByIdAndUpdate(id, body, {
            new:true, runValidators:true
        })

        if (!task) return res.status(404).json({msg: `task for id ${id} not found`})

        return res.status(200).json({task});

    }
    catch( error){
        return res.status(500).json({msg: error})
    }
    
}
const deleteTask = async (req, res) => {
    try{
        const { id } = req.params

        const task = await Task.findOneAndDelete({_id: id})

        if(!task) return res.status(404).json({msg: `Task for id ${id} not found`})

        return res.status(204).json([{ success: true, details: `Deleted this task ${id}` }]);
        // return res.status(200).json([{ task}]);

    }catch(error){
        res.status(500).json({msg: error})
    }
}
module.exports = { getAll, getById, createTask, updateTask, deleteTask }