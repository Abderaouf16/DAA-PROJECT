import React from 'react'
import Footer from '../components/Footer/Footer'
import home1 from '../components/CSS/Projects1.css'
import { FaSearch } from "react-icons/fa"; 
import ProjectsCard from '../components/ProjectsPage/ProjectsCard'


export default function Projects() {

  const displayFooter= true
  
  
  return(
  <>
<div className=" flex justify-center ">
<div className=' flex flex-col bg-white w-11/12 h-screen rounded-3xl  items-center  '>
        <div className='w-full flex justify-center items-center sm:flex-row flex-col mt-4   '>
         <h2 className='big-title font-bold text-3xl text-black text-left items-center  '> Search and browse projects of your taste </h2>
        </div>
        <div className=" w-5/12 h-[48px] rounded-3xl bg-black m-5 flex  justify-end">
          <form action="" className='flex  w-11/12  '>
            <input type="search" placeholder='search..' className='bg-transparent w-full  text-white outline-none text-xl  ' />
            <button className='mr-2'> <FaSearch className='   text-xl  '/> </button>
          </form>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8 text-black" >
            {[1,2,3,4,5,6,7,8,9].map((song,i) =>(
                <h1>iiii</h1>
            ))}
        </div>
         </div>
    </div>
    
    
  </>
  )
}
