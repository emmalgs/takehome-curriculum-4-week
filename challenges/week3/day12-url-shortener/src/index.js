const express = require('express');
const app = express();
app.use(express.json());

const store = {}; // { shortCode: originalUrl }

// POST /shorten  body: { url }  returns: { shortCode, shortUrl }
app.post('/shorten', (req, res) => {
  // TODO: validate url, generate shortCode, store, return response
  // Tip: Math.random().toString(36).slice(2, 8) gives a 6-char code
});

// GET /:shortCode  → 302 redirect or 404
app.get('/:shortCode', (req, res) => {
  // TODO
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));
