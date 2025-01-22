const cp = require("child_process")

cp.exec("echo hello", (err, stdout, stderr)=>{
    console.log(stdout)
})