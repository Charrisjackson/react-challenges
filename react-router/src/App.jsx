import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes,Route,  Router} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
 

    </Routes>
   
    </>
  )
}

export default App
