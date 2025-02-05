import React from "react";
const veg = ["Onion","Garlic","brokli","karrot"]
function Veges(){
    return(
        <>
        {veg.map((v,i)=>{
            return(
         <h1>{v}-{i}</h1>)
        })}
        </>
    )
}
export default Veges;