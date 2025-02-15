import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <h1>Count: {count}</h1>
            {/* <h1>Decress: {count}</h1> */}
            <button onClick={() => setCount(count + 1)}>Increment</button><br></br><hr></hr>
            <button onClick={() => setCount(count -1)}>Decress</button><br></br><hr></hr>
            <button onClick={() => setCount(0)}>reset</button><br></br><hr></hr>
            <button onClick={() => setCount(count + 5)}>5 Increment</button><br></br><hr></hr>
            <button onClick={() => setCount(count - 5)}>5 dencrement</button><br></br><hr></hr>
    </>
  )
}

export default App
