import React from "react";
import home1 from '../CSS/Projects1.css'

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaSearch } from "react-icons/fa"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react'


export default function ProjectDetails(props) {
  const { togglePopup, projectName, setProjectName, description, setDescription, selectedProjectId } = props;
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/projects/${selectedProjectId}`);
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        const data = await response.json();
        setProjectDetails(data);
      } catch (e) {
        console.log(e);
      }
    };

    if (selectedProjectId) {
      fetchProjectDetails();
    }
  }, [selectedProjectId]);

  return (
    <div className="popup ">
      <div className="popup-inerd flex flex-col">
        <div className="flex justify-end">
          <FontAwesomeIcon className='text-xl' icon={faTimes} onClick={togglePopup} />
        </div>

        <main className=' w-full flex'>
      
          <form action='' className='flex-1 w-6/12'>
            <h2 className='text text-lg p-3'> Project name:</h2>
            <div className=" ml-5 flex flex-col   bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg ">
              <h1 className='  px-3 py-3 overflow-hidden break-words'>{projectDetails?.ProjectName}</h1>
            </div>
            <h2 className='text text-lg p-3 '>Description:</h2>
            <div className=" ml-5 flex flex-col  bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg ">
            <h1 className='px-3 py-3 overflow-hidden break-words '>{projectDetails?.description}</h1>
            </div>
            <div className='flex justify-evenly mt-6'>
            </div>
          </form>
          <div className="flex-1 m-5 bg-black">
            <h1>xxx</h1>
          </div>
          
        </main>
        <div className="flex justify-center mt-5">
        <div className='border-[1px] w-3/12 flex justify-center   '>
                <button onClick={togglePopup}>Cancel</button>
              </div>
        </div>
      </div>
    </div>
  );
}
