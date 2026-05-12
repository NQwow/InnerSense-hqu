const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint for monitoring
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files (HTML, CSS, JS, images) from the root directory
app.use(express.static(path.join(__dirname), { index: 'index.html' }));

// SPA fallback — for any route that doesn't match a real file, serve index.html
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.path);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      // File exists — let express.static handle it (shouldn't normally reach here)
      res.sendFile(filePath);
    } else {
      // No matching file — serve index.html for SPA client-side routing
      const indexPath = path.join(__dirname, 'index.html');
      fs.access(indexPath, fs.constants.F_OK, (indexErr) => {
        if (indexErr) {
          console.error('index.html not found');
          res.status(404).send('Not Found');
        } else {
          res.sendFile(indexPath);
        }
      });
    }
  });
});

// Global error handler — prevents unhandled errors from crashing the server
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ERROR ${req.method} ${req.url}:`, err.message);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
