// Import the HTTP module
const http = require('http');

// Define the server port
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set the response header with a status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Get the request URL path
    const url = req.url;

    // Route handling
    if (url === '/') {
        res.write('Welcome to the Home Page!');
    } else if (url === '/about') {
        res.write('This is the About Page. Here you can learn more about us.');
    } else if (url === '/contact') {
        res.write('Welcome to the Contact Page. Reach out to us!');
    } else {
        // Handle unknown routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 - Page Not Found');
    }

    // End the response
    res.end();
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
