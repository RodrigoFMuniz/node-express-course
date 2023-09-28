const express = require('express');

const router = express.Router();

const {getAll, getById, createTask, updateTask, deleteTask} = require('../controllers/tasks')
 
// GET ALL  / Create a task
router.route('/').get(getAll).post(createTask)

// GET By ID / update / delete

router.route('/:id').get(getById).patch(updateTask).delete(deleteTask)

module.exports = router;
