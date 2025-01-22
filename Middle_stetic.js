const express = require('express');
const app = express();
app.use('/img', express.static("demo"))
app.use('/html', express.static("demo"))
app.listen(3000,()=>{
    console.log("Sever is started")
})