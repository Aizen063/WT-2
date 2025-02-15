import React from "react";
const Feculty = [{
    name:"abc",
    branch:"cse",
    enroll:112346,
    email:"abc@gmail.com"
},{
    name:"xyz",
    branch:"cse",
    enroll:123456,
    email:"ac@gmail.com"
},
{
    name:"xyz",
    branch:"cse",
    enroll:123456,
    email:"ac@gmail.com"
},
{
    name:"xyz",
    branch:"cse",
    enroll:123456,
    email:"ac@gmail.com"
},
{
    name:"xyz",
    branch:"cse",
    enroll:123456,
    email:"ac@gmail.com"
}
]
function Student(){
    return(
        <div className="container" >
            <div className="row">
        {Feculty.map((stu,i)=>{
            return<div className="card col-5" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{stu.name}</h5>
              <p className="card-text">{stu.branch}</p>
              <p className="card-text">{stu.enroll}</p>
              <p className="card-text">{stu.email}</p>
            </div>
          </div>
        })}
        </div>
        </div>
    )
}
export default Student;