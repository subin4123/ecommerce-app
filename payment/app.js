const express = require('express');
const client = require('prom-client');
const app = express();
const port = process.env.PORT || 3000;
client.collectDefaultMetrics();
app.get('/', (req, res) => res.send('Hello from payment service'));
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
app.listen(port, () => console.log('Running on port', port));
