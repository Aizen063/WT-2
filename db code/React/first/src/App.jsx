import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './class_component'
import './second'
import './props'
import Class_component from './class_component'
import Second from './second'
import Demo from './props' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Class_component />
       <Second/>
       <Demo/>
    </>
  )
}

export default App
