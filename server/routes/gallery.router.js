const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const sqlText = 'UPDATE gallery SET likes=likes+1 WHERE id=$1;';
  pool
    .query(sqlText, [req.params.id])
    .then(() => {
      console.log('Processing PUT request');
      res.sendStatus(200);
    })
    .catch((err) => res.sendStatus(500));
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM gallery ORDER BY id;';
  pool
    .query(sqlText)
    .then((result) => {
      console.log('Processing GET request');
      res.send(result.rows).status(201);
    })
    .catch((err) => {
      console.error('Error:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
