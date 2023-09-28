const getAll = (req, res) => {
    return res.status(200).json([{ success: true, details: 'Get all' }]);
}

const getById = (req, res) => {
    const { id } = req.params
    // if() {
    //     return res.status(404).json({ success: false, details: "task not found" })
    // }

    return res.status(200).json([{ success: true, details: `Found this task ${id}` }]);
    
}
module.exports = { getAll, getById }