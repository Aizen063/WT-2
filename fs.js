const fs = require('fs');
fs.exists ("demo.txt",(exists)=>{
    console.log(exists);
})
fs.stat ("demo.txt",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})

fs.rename ("demo.txt","vaibhav.txt",(err)=>{
    if(err){
        throw err;
    }
});

fs.writeFile("vaibhav.txt","Yokoso sakasama no sekhai",(err)=>{
    if(err){
        throw err;
    }
});


fs.readFile("vaibhav.txt","utf8",(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data);
});

fs.unlink("vaibhav.txt",(err)=>{
    if(err){
        throw err;
    }
});

fs.access("vaibhav.txt",(err)=>{
    if(err){
        console.log("file does not exist");
    }else{
        console.log("file exists");
    }
})