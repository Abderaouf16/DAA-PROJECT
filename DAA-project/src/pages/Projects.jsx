import React from 'react'
import Footer from '../components/Footer/Footer'
import home1 from '../components/CSS/Projects1.css'
import { FaSearch } from "react-icons/fa"; 


export default function Projects() {

  const displayFooter= true
  
  
  return(
  <>

  <div className="father-container">
    <div className="big-container ">
      <div className="big-title">
        <h1>Search and Browse projects of your taste</h1>
      </div>
      <div className="search_Container">
        
        <form action="" className='search_Container2'>
      <input type="search" id="search-input" placeholder="Search..." className="search1" />
      <button type="submit" aria-label="Submit search" className=' '>
      <FaSearch/>
      
      </button>
    </form>
      </div>
      <div className="projects">

      </div>
    </div>
  </div>

    
    
    
  </>
  )
}
