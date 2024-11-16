// Import the Express module
const express = require('express');

// Initialize the Express app
const app = express();

// Define the server port
const PORT = 3000;

// Sample data to simulate a database
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Jim Smith', email: 'jim@example.com' }
];

// GET route to fetch all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET route to fetch a single user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === userId);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
