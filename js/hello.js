// The following example creates a web server that listens for any kind of HTTP request on the URL

//http://127.0.0.1:8000/ - when request is recieved, the script will respond with the string: "Hello World"

//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 8000;

//Create HTTP Module
const server = http.createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { "content-Type": "text/plain"})
    // Send the response body "Hello World"
    res.end("hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function (){
    console.log(`Server running at http://${hostname}:${port}/`);
});