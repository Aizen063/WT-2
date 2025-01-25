import React from "react";
function Clickevent(){
    const Event=()=> {
        console.log("Hello");
    }
return(
    <div>
    <button onClick={Event}>click me</button>
    </div>
);
}
export default Clickevent;  