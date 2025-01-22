const express = require('express');
const app = express();

app.get('/student', (req, res) => {
  res.send('Home');
});
app.get('/student/about', (req, res) => {
    res.send('About');
  });
  app.get('/student/contect', (req, res) => {
    res.send('Contect');
  });
  app.get('/student/feedback', (req, res) => {
    res.send('feedback');
  });
  app.get('/student/Enroll', (req, res) => {
    res.send('enroll page');
  });
app.listen(3001, () => {
  console.log('Server is running on port 3000');
});