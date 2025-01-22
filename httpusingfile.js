const http = require('http')
const fs = require('fs')

const data = fs.readFileSync("word.txt","utf-8");
console.log(data);

const server = http.createServer((req, res) => {
    res.end(data);
});

server.listen(3456, () => {
    console.log("Server is running at port 3456");
});