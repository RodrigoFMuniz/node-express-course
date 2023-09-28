const express = require('express');

const router = express.Router();

const {getAll, getById} = require('../controllers/tasks')
 
// GET ALL 
router.route('/').get(getAll)

// GET By ID

router.route('/:id').get(getById)

module.exports = router;
