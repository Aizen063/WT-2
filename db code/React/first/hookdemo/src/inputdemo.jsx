import React from "react";
import { useState } from "react";
function InputDemo() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
}
// function Input2(){
//     const[v1,setV1]=useState("");
//     return(
//         <>
//         <input type="text" />
//         <button onClick={()=>{
//             if(v1==""){
//                 setV1("hell0")
//             }
//             else{
//                  {v1}
//             }
            
//         }}>click</button>
//         </>
//     )
// }
export default InputDemo;
// export { Input2 };

