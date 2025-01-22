const express = require('express');
const fs = require('fs');
const app = express();
app.get('/student', (req, res) => {
    const data = fs.readFileSync("word.txt","utf-8");
  res.send(data);
});
app.get('/student/about', (req, res) => {
    const data = fs.readFileSync("demo.txt","utf-8");
  res.send(data);
});
app.get('/student/contect', (req, res) => {
    const data = fs.readFileSync("student.txt","utf-8");
  res.send(data);
});
app.get('/student/feedback', (req, res) => {
    const data = fs.readFileSync("feedback.txt","utf-8");
  res.send(data);
  
});
app.get('/student/Enroll', (req, res) => {
    const data = fs.readFileSync("enroll.txt","utf-8");
  res.send(data);
   
});
app.listen(6320, () => {
  console.log('Server is running on port 6320');
});