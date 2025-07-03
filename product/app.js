// app.js
const express = require('express');
const app = express();

// ✅ Health check
app.get('/health', (req, res) => {
  res.send('OK');
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Hello from product service!');
});

// ✅ Example API route (optional)
app.get('/api', (req, res) => {
  res.json({ message: 'API works!' });
});

// ✅ Metrics (optional for Prometheus)
app.get('/metrics', (req, res) => {
  res.send('# Prometheus metrics go here\n');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`product service running on port ${PORT}`);
});

