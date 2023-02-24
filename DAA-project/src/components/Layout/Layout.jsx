import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Login2 from '../../pages/Login2'
import Signup from '../../pages/Signup' 
import Signup2 from '../../pages/Signup2'
import Projects from '../../pages/Projects'

export default function 
() {
  return (
    <>
       
       <section>
        
        
  <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/login' element={<Login2/>} />
    <Route path='/signup' element={<Signup2/>} />
  </Routes>
  
  </section>
  
   </>
  )
}
