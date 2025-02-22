import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDemo from './useeffect'
import Cal from './Cal'

function App() {
  const [data, setData] = useState("")
  return (
    <>

        <UseEffectDemo />
        <Cal/>
    </>
  )
}

export default App
