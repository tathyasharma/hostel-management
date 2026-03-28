const express = require('express');
const router = express.Router();
const db = require('../db');

// GET ALL USERS
router.get('/', (req, res) => {
  db.query('SELECT id, name, email, role FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// GET USER BY ID
router.get('/:id', (req, res) => {
  db.query('SELECT id, name, email, role FROM users WHERE id = ?',
    [req.params.id], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results[0]);
    });
});

// DELETE USER
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'User deleted' });
  });
});

module.exports = router;