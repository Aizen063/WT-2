const fs = require('fs');

const studentdetails= fs.writeFileSync("student.txt","studentID = 01 \n  studentName=xyz\n studentEnrollment =101\n studentMobileNumber=1234567890\n studentDept=CSE\n studentspi=9.12\n","utf-8")
console.log(studentdetails);
