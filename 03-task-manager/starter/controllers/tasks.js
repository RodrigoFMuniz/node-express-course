const getAll = (req, res) => {
    return res.status(200).json([{ success: true, details: 'Get all' }]);
}

const getById = (req, res) => {
    const { id } = req.params
    // if() {
    //     return res.status(404).json({ success: false, details: "task not found" })
    // }

    return res.status(200).json({ success: true, details: `Found this task ${id}` });
    
}
const createTask = (req, res) => {
    const { id, task } = req.body
    // if() {
    //     return res.status(404).json({ success: false, details: "task not found" })
    // }

    return res.status(201).json({ success: true, details: {id, task} });
    
}
const updateTask = (req, res) => {
    const { id } = req.params
    // if() {
    //     return res.status(404).json({ success: false, details: "task not found" })
    // }

    return res.status(200).json([{ success: true, details: `Updated this task ${id}` }]);
    
}
const deleteTask = (req, res) => {
    const { id } = req.params
    // if() {
    //     return res.status(404).json({ success: false, details: "task not found" })
    // }

    return res.status(204).json([{ success: true, details: `Deleted this task ${id}` }]);
    
}
module.exports = { getAll, getById, createTask, updateTask, deleteTask }