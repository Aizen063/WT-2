const fs = require('fs')
const less= fs.readFileSync('student.txt', 'utf8')
if(less<5){
    console.log("your spi is less then 5")
}
else{
    console.log("your spi is greater then 5")
}
