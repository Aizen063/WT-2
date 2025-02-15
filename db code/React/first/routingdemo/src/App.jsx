import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Faculty_d from './feculty'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Student from './student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/Fecultycard'element={<Faculty_d/>}/>
                <Route path='/Studentcard'element={<Student/>}/>

              </Route>
            </Routes>
            </BrowserRouter>
            <Faculty_d/>
            <Outlet/>
    </>
  )
}

export default App
