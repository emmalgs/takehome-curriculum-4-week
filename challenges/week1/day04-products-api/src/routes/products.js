const express = require('express');
const router = express.Router();
const { products } = require('../data');

// GET /products  (optional ?category= filter)
router.get('/', (req, res) => {
  // TODO
});

// GET /products/:id
router.get('/:id', (req, res) => {
  // TODO: return product or 404 JSON
});

module.exports = router;
