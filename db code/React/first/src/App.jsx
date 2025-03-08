import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './class_component'
import './second'
import './props'
import'./map'
import Class_component from './class_component'
import Second from './second'
import Demo from './props'
import Clickevent from './button' 
import IsDisplay from './isDisplay'
import Veges from './map'
import Feculty from './feculty'
import Student from './student'
import Product from './product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Class_component />
       <Second/>
       <Demo/>
       <Clickevent/>
       <IsDisplay isdisplay={true}/>
       <Home/> 
       <Veges/>  */}
        {/* <Feculty/>    */}
        {/* <Student/> */}
       <Product/>
    </>
  )
}

export default App
