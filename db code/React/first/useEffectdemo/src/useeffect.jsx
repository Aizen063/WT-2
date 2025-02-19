import React, { useEffect, useState } from 'react'
function UseEffectDemo(){
const [data, setData] = useState("")
  useEffect(()=>{
    setTimeout(()=>{
      setData("Data Facthed")
    },3000)
  },[])
  return(
    <div>
    <h1>Data is coming after 3 sec</h1>
      <h1>{data}</h1>
    </div>
  )
}
export default UseEffectDemo;