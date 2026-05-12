const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

console.log(`Starting server on port ${PORT}`);

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files (HTML, CSS, JS, images) from the root directory
app.use(express.static(path.join(__dirname)));

// Catch-all route — serve index.html for any unmatched path (SPA support)
app.get('*', (req, res) => {
  console.log(`Catch-all: serving index.html for ${req.url}`);
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(`ERROR ${req.method} ${req.url}:`, err.message);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
