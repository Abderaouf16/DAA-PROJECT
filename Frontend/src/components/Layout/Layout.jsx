import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Header/Header'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup' 
import Projects from '../../pages/Projects'


import '../../scss/main.scss'
export default function 
() {
  return (
    <>
       
       <section>
        
    
  <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    
  </Routes>
  
  </section>
  
   </>
  )
}
