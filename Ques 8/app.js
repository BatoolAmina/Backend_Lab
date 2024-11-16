const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Example route that may throw an error
app.get('/error', (req, res) => {
  throw new Error('This is a runtime error!');
});

// Example route that simulates a synchronous error
app.get('/sync-error', (req, res) => {
  const obj = null;
  console.log(obj.name); // This will throw an error
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
  });
});

// 404 handler (catch all for undefined routes)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
