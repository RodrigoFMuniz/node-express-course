const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body.name) {
      return res.status(404).send("Data wasn't provided");
    }
    return res.status(200).send(`<h1>Welcome ${req.body.name}</h1>`);
  });

module.exports = router;
