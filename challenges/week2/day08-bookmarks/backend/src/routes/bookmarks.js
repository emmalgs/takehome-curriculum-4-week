const express = require('express');
const router = express.Router();

// In-memory store
let bookmarks = [];
let nextId = 1;

// GET /bookmarks  (optional ?tag= filter)
router.get('/', (req, res) => {
  // TODO
});

// POST /bookmarks  body: { url, title, tags: [] }
router.post('/', (req, res) => {
  // TODO: validate url and title, assign id, push to bookmarks
});

// DELETE /bookmarks/:id
router.delete('/:id', (req, res) => {
  // TODO: remove by id or 404
});

module.exports = router;
