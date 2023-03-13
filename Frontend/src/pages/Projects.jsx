import React, { useState } from 'react';
import Footer from '../components/Footer/Footer'
import home1 from '../components/CSS/Projects1.css'
import { FaSearch } from "react-icons/fa"; 
import ProjectsCard from '../components/ProjectsPage/ProjectsCard'
import Header from '../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Projects() {

  const displayFooter= true
  
  const [showPopup, setShowPopup] = useState(false);

  const [buttonPopup, setButtonPopup]= useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return(
  <>
  <Header/>
<div className=" flex justify-center ">
<div className=' flex flex-col bg-white w-11/12  rounded-3xl  items-center  '>
        <div className='w-full flex justify-center items-center sm:flex-row flex-col mt-4   '>
         <h2 className='big-title font-bold text-3xl text-black text-left items-center  '> Search and browse projects of your taste </h2>
        </div>
        
        <div className=" w-5/12 h-[48px] rounded-3xl bg-black m-5 flex  justify-end">
          <form action="" className='flex  w-11/12  '>
            <input type="search" placeholder='search..' className='bg-transparent w-full  text-white outline-none text-xl  ' />
            <button className='mr-2'> <FaSearch className='   text-xl  '/> </button>
          </form>
        </div>
          
        <div className="">
          <select name="Select year" id="" className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
            <option value="">1 CPA</option>
            <option value="">2 CPA</option>
            <option value=""> 3 CPA</option>
          </select>
        </div>
       

        <div className='w-11/12  flex flex-col justify-center  items-center'>
          <div className="">
      <button className=' bg-black  my-4 rounded-lg px-12' onClick={togglePopup}>Add Project</button>
          
          </div> 
              
      {showPopup && (
          <div className="   ">
          <div className="popup flex  justify-center ">
          <div className="popup-content bg-black  rounded-md p-3    ">
            <FontAwesomeIcon className='  text-xl   ' icon={faTimes} onClick={togglePopup} />
          <div>
           
    <main>
      <form action="">
        <h2 className='text '> Project name</h2>
        <div className="">
            <input type="text" className='bg-white my-2 w-9/12 py-1 ' />
        </div>
        <h2 className='text'> Dercriprion</h2>
        <div className="">
        <input type="text" className='bg-white  my-2 w-9/12 py-1'/>
        </div>
        <h2 className='text-'>Upload Photos</h2>
        <div className="">
        <input type="file" name="fileToUpload" id="fileToUpload" className='bg-white rounded-md my-2 w-9/12 '/>         
        </div>
        </form>  
    </main>

            </div>
    
            
          </div>
        </div>
          </div>
      )}
    </div>
        
        <div className="flex flex-wrap  justify-center gap-8 text-black" >
            {[1,2,3,4,5,6,7,8,9].map((song,i) =>(
                <div className="flex flex-wrap sm:justify-start justify-center gap-8">

                  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
                    <div className="relative w-full h-56 group">
                      <div className="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex">

                      </div>
                      <img src="" alt="" className='w-full h-full rounded-lg' />
                    </div>
                    <div className="mt-4 flex flex-col">
                      <p className='font-semibold text-lg text-white truncate'> bfgfb</p>
                    </div>
                  </div>
                </div>
            ))}
        </div>
         </div>
    </div>
    
    
  </>
  )
}