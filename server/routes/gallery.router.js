const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM gallery;';
  pool
    .query(sqlText)
    .then((result) => res.send(result.rows).status(201))
    .catch((err) => {
      console.error('Error:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
