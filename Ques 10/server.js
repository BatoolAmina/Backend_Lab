// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from 'public' directory
app.use(express.static('public'));

// Store online users
let onlineUsers = 0;

// Socket.io logic for connection, messages, and disconnection
io.on('connection', (socket) => {
    onlineUsers++;
    console.log('A user connected');
    io.emit('user connected', `A new user has joined the chat. Users online: ${onlineUsers}`);

    // Listen for incoming chat messages
    socket.on('chat message', (msg) => {
        console.log('Message: ' + msg);
        io.emit('chat message', msg);
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        onlineUsers--;
        console.log('User disconnected');
        io.emit('user disconnected', `A user has left the chat. Users online: ${onlineUsers}`);
    });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
