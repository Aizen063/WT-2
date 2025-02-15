import React from "react";
const Feculty = [{
    name:"abc",
    branch:"cse",
    email:"abc@gmail.com"
},{
    name:"xyz",
    branch:"cse",
    email:"ac@gmail.com"
}
]
function Faculty_d(){
    return(
        <div className="container" >
            <div className="row">
        {Feculty.map((fec,i)=>{
            return<div className="card col-3" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{fec.name}</h5>
              <p className="card-text">{fec.branch}</p>
              <p className="card-text">{fec.email}</p>
            </div>
          </div>
        })}
        </div>
        </div>
    )
}
export default Faculty_d;