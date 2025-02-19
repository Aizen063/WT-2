import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDemo from './useeffect'

function App() {
  const [data, setData] = useState("")
  return (
    <>

        <UseEffectDemo />
    </>
  )
}

export default App
