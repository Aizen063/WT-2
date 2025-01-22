const fs = require('fs');
fs.copyFile('student.txt','demo.txt',(err)=>{
    if(err) console.log(err);
    console.log('File copied');
})