const express = require('express');
const pool = require('./config/db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Auth system running...');
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error("FULL ERROR:", err);   // 👈 important
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});