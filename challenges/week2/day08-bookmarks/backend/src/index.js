const express = require('express');
const cors = require('cors');
const bookmarkRoutes = require('./routes/bookmarks');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/bookmarks', bookmarkRoutes);

app.listen(3000, () => console.log('API running on http://localhost:3000'));
