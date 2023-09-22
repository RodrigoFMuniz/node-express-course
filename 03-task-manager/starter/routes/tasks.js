const express = require('express')
const router = express.Router()
const { getTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/tasks')

// router.get('/', getTasks)
// router.post('/', createTask)
// router.get('/:id', getTaskById)
// router.patch('/:id', updateTask)
// router.delete('/:id', deleteTask)

// router.route('/').get(getTasks)
// router.route('/').post(createTask)
// router.route('/:id').get(getTaskById)
// router.route('/:id').patch(updateTask)
// router.route('/:id').delete(deleteTask)



router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask)


module.exports = router
