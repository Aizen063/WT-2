const ev= require("events")

class RV extends ev{}

const VR = new RV();

VR.on("domain expanstion",()=>{
    console.log("Mello wrent shine")
});

setInterval(() => {
    VR.emit("domain expanstion");
},1000);