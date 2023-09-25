const express = require('express');

const router = express.Router();

const {
  getAllPeople,
  postPeople,
  updatePeople,
  deletePeople,
} = require('../controllers/people');

// GET

// router.get('/', getAllPeople);
router.route('/').get(getAllPeople);

// POST

// router.post('/', postPeople);
router.route('/').post(postPeople);

// PUT

// router.put('/:personID', updatePeople);
router.route('/:personID').put(updatePeople);

// DELETE

// router.delete('/:personID', deletePeople);
router.route('/:personID').delete(deletePeople);

module.exports = router;
