const express = require('express');
const app = express();
 
app.use('/student',(req,res,next)=>{
    console.log("Middle wear called")
    next()
})

app.get('/student/api',(req,res)=>{
    res.send("hello")
})
app.get('/api/student',(req,res)=>{
    res.send("hello")
})
app.get('/student/123',(req,res)=>{
    res.send("World")
})
app.listen(3000,()=>{
    console.log("server is started")
})