import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button><br></br><hr></hr>
            <button onClick={() => {
              if(count==0){
                setCount(0)  
              }
              else{
                setCount(count - 1)
              }
            }}>Decrement</button><br></br><hr></hr>
            <button onClick={() => setCount(0)}>reset</button><br></br><hr></hr>
            <button onClick={() => setCount(count + 5)}>5 Increment</button><br></br><hr></hr>
            <button onClick={() => {
            if(count<=5){
              
              setCount(0)
                
              }
              else {
                setCount(count - 5)
              }}}>5 dencrement</button><br></br><hr></hr>
    </>
  )
}

export default App
