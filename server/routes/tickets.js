const express = require('express');
const router = express.Router();
const db = require('../db');

// GET ALL TICKETS
router.get('/', (req, res) => {
  db.query('SELECT * FROM tickets ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// GET TICKETS BY STUDENT
router.get('/student/:id', (req, res) => {
  db.query('SELECT * FROM tickets WHERE student_id = ? ORDER BY created_at DESC',
    [req.params.id], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
});

// CREATE TICKET
router.post('/', (req, res) => {
  const { title, category, priority, description, student_id, room_id } = req.body;
  db.query('INSERT INTO tickets (title, category, priority, description, student_id, room_id, status) VALUES (?, ?, ?, ?, ?, ?, "Pending")',
    [title, category, priority, description, student_id, room_id], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Ticket created', id: result.insertId });
    });
});

// UPDATE TICKET STATUS
router.put('/:id/status', (req, res) => {
  const { status } = req.body;
  db.query('UPDATE tickets SET status = ? WHERE id = ?',
    [status, req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Status updated' });
    });
});

// ADD COMMENT
router.post('/:id/comment', (req, res) => {
  const { text, author_id } = req.body;
  db.query('INSERT INTO comments (ticket_id, text, author_id) VALUES (?, ?, ?)',
    [req.params.id, text, author_id], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Comment added', id: result.insertId });
    });
});

// GET COMMENTS
router.get('/:id/comments', (req, res) => {
  db.query('SELECT * FROM comments WHERE ticket_id = ? ORDER BY created_at ASC',
    [req.params.id], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
});

module.exports = router;