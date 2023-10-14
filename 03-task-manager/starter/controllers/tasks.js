const Task = require('../models/Task')

const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-errors')

const getAll = asyncWrapper(async (req, res) => {

    const name = req.query.name
    if (!name) {
        const task = await Task.find({})
        return res.status(200).json({ tasks: task });
    }
    const task = await Task.find({ name: name })
    return res.status(200).json({ tasks: task });

})

const getById = asyncWrapper(async (req, res) => {
        const task = await Task.findOne({_id : req.params.id})
        if (!task) return res.status(404).json({msg: "No task"})
        console.log(task)
        return res.status(200).json({task });
    })

const createTask = asyncWrapper(async (req, res) => {
    console.log(req.body)
    // try{
    const task = await Task.create(req.body)
    console.log(task)
    return res.status(201).json({ task })
    // }
    // catch(err){
    //     return res.status(500).json({"details": err.errors.name.message})
    // }
})

const updateTask = asyncWrapper (async (req, res, next) => {
    // try{
    const { id } = req.params

    const { body } = req

    const task = await Task.findByIdAndUpdate(id, body, {
        new: true, runValidators: true
    })

    if (!task) {
        return next(createCustomError(`task for id ${id} not found`, 404))

        // return res.status(404).json({ msg: `task for id ${id} not found` })
    }

    return res.status(200).json({ task });

    // }
    // catch( error){
    //     return res.status(500).json({msg: error})
    // }
    
})

const deleteTask = asyncWrapper(async (req, res) => {
    // try{
    const { id } = req.params

    const task = await Task.findOneAndDelete({ _id: id })

    if (!task) {
        return next(createCustomError(`task for id ${id} not found`, 404))
    }

    return res.status(204).json([{ success: true, details: `Deleted this task ${id}` }]);
        // return res.status(200).json([{ task}]);

//     }catch(error){
//         res.status(500).json({msg: error})
//     }
})
module.exports = { getAll, getById, createTask, updateTask, deleteTask }