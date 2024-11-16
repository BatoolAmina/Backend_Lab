// index.js
const express = require('express');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Use the logger middleware
app.use(logger);

// Define some routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
