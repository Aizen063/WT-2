const fs = require('fs');

const data = fs.readFileSync("demo.txt", "utf8");
console.log(data)
console.log("Hello, world!")

const v = fs.writeFileSync("demo.txt","Welcome to my soul socity!", "utf8");

console.log(v)
console.log("Hello, world!")

// fs.readFile("demo.txt","utf8",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });

// console.log("Hello, world!")

// fs.writeFile("demo.txt","Hado no. 99", (err) => {
//    if (err) {
//     throw err;
//    }
// });

// console.log("Hello, world! yo ")


const e =fs.appendFileSync("demo.txt","\nYokoso sakasama no sekhai")
console.log(e)

console.log("Hello, world! yo yo")
