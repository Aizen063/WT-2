const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url=='/home'){
        res.statusCode =600;
        res.writeHead='Hello';
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Home Page</h1>');
    }

    
});
server.listen(3457, () => {
    console.log("Server is running at port 3457");
});