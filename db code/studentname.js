const mongoose = require('mongoose');
const student = require('./student');
const express = require('express');
const bodyParser = require('body-parser');
const atlasurl = "mongodb+srv://vr06:Vaibhav%4006@vaibhav.1qryv.mongodb.net/";
mongoose.connect(atlasurl).then(()=>{
    console.log("Connected to DB Server")});
    const app = express();

    app.use(bodyParser.json())

    app.use('/studentname',(req,res,next)=>{
        console.log("Middleware");
        next(); 
    })
    app.get("/studentname/get",async (req,res)=>{
        const data = await student.find();
        res.send(data);
    });
    app.delete("/studentname/:id", async (req,res)=>{
        const data = await student.deleteOne({_id:req.params.id});
        res.send(data)
    });
    app.post("/studentname", async (req,res)=>{
        const obj = new student({
            StudentName:req.body.StudentName,
            StudentMobile:req.body.StudentMobile,
            StudentEmail: req.body.StudentEmail,
        });
        const data = await obj.save();
        res.send(data);

    });
    app.patch("/student/:id", async (req,res)=>{
        let stu = await student.findOne({_id:req.params.id});
        stu.studentName = req.body.studentName;
        stu.studentEmail = req.body.studentEmail;
        stu.studentMobile = req.body.studentMobile;
        const data = await stu.save();
        res.send(data);
    });
    app.listen(3456,()=>{
        console.log("Web server started @ 3456");
    });