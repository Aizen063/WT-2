const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/home') {
        res.end("home page");
    }
    else if (req.url == '/about') {
        res.end("about page");
    }   
    else if (req.url=='/contct'){
        res.end("contact page");
    }
    else if (req.url=='/gallary'){
        res.end("gallary page");
    }
    else if (req.url=='/myself'){
        res.end("my self page");
    }
});

server.listen(9000, () => {
    console.log("Server is running at port 9000");
});