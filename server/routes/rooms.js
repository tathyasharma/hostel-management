const express = require('express');
const router = express.Router();
const db = require('../db');

// GET ALL ROOMS
router.get('/', (req, res) => {
  db.query('SELECT * FROM rooms', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// ADD ROOM
router.post('/', (req, res) => {
  const { room_no, block, floor, type, capacity } = req.body;
  db.query('INSERT INTO rooms (room_no, block, floor, type, capacity, status) VALUES (?, ?, ?, ?, ?, "Vacant")',
    [room_no, block, floor, type, capacity], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Room added', id: result.insertId });
    });
});

// ALLOCATE ROOM
router.post('/allocate', (req, res) => {
  const { room_id, student_id } = req.body;
  db.query('INSERT INTO room_allocations (room_id, student_id, allocated_date) VALUES (?, ?, NOW())',
    [room_id, student_id], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      db.query('UPDATE rooms SET status = "Occupied" WHERE id = ?', [room_id]);
      res.json({ message: 'Room allocated', id: result.insertId });
    });
});

// UPDATE ROOM
router.put('/:id', (req, res) => {
  const { status } = req.body;
  db.query('UPDATE rooms SET status = ? WHERE id = ?',
    [status, req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Room updated' });
    });
});

// DELETE ROOM
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM rooms WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Room deleted' });
  });
});

module.exports = router;