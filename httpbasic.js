const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello, world!");
});

server.listen(8000,()=>{
    console.log("Server is running on port 8000")
});