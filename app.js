// Import required Node.js modules
const express = require('express'); // Express framework for creating web applications
const dns = require('dns');         // DNS module for DNS-related functionality

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ('/') that serves an HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Send the HTML file located in the 'public' directory
});

// Define a route for '/api/whoami' that returns JSON data
// with IP address, language, and software information
app.get('/api/whoami', (req, res) => {
    let head = req.headers; // Get the HTTP request headers

    let myData = {
        "ipaddress": dns.getServers().toString(),   // Get and convert DNS servers to a string
        "language": head['accept-language'],        // Extract 'accept-language' from request headers
        "software": head['user-agent']              // Extract 'user-agent' from request headers
    }

    res.json(myData);                               // Send the 'myData' object as JSON response
});

// Define the port number to listen on
const PORT = process.env.PORT || 3000;

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);     // Log a message indicating that the server is running
});
