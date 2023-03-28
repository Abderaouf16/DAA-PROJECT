import React from 'react'
import Header from '../components/Header/Header'
import home from '../components/CSS/Profile.css'
import { useAuthContext } from "../hooks/useAuthContext";
import {useState,useEffect} from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BeatLoader } from "react-spinners";
import AddingProjectPopup from '../components/ProjectsPage/addingProjectPopup'
import ProjectDetails from '../components/ProjectsPage/projectDetails'
import home1 from '../components/CSS/Projects1.css'
import UserInfo from '../components/ProfilePage/UserInfo'



export default function Profile() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const {user}= useAuthContext()
  
useEffect(() => {
  if (user) {
    fetch(`http://localhost:3001/api/projects/postedBy/${user._id}`)
      .then((response) => {
        
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
      
        return response.json();
        setLoading(true);
        
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((e) => console.log(e));
  }
}, [user]);


const [message, setMessage] = useState("");

const handleDelete = async (key) => {
  try {
    setLoading(true);
    const response = await fetch(`http://localhost:3001/api/projects/${key}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setMessage(data.message);
    // Refresh the page after successfully adding the project
    window.location.reload()
  } catch (error) {
    setMessage(error.message);
  }
};



 // check if user exists
  if (!user) {
    return
    <div className="flex items-center justify-center h-screen">
    <BeatLoader color={"#ffffff"} loading={loading} size={30} />:
  </div>;
  }
  const togglePopup = (projectId) => {
    // console.log(projectId)
    setShowPopup(!showPopup);
    setSelectedProjectId(projectId);
  };
  
  return (
    <>
    <Header/>
    <section >
    {loading ? (
    <div className="flex items-center justify-center h-screen">
      <BeatLoader color={"#ffffff"} loading={loading} size={30} />
    </div>
  ) : (
         <div className=' '>
           
          


           <div className="  h-3/5 w-9/12 m-auto py-10">
             <div className=" flex justify-center ">
             <h2 className='big-title font-bold text-3xl text-white text-left items-center  '> Projects Added </h2>
             </div>
             <div className="">
             
             <div className="flex flex-wrap  justify-center gap-8 text-black  " >
        {projects?.map((project) => (
  <div key={project._id} className="flex flex-wrap sm:justify-start justify-center gap-8">
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex"></div>
        <img src="" alt="" className='w-full h-full rounded-lg' />
      </div>
      <div className=" flex flex-col ">
        <p className=' p-2 font-semibold text-lg text-white truncate '>{project.ProjectName}</p>
      </div>
      <div className=" flex flex-col ">
        <p className=' p-2 font-semibold text-lg text-white truncate '>{project.description}</p>
      </div>
      <div className="flex   justify-around items-center ">
      <div className="  bg-white rounded-md w-6/12 flex justify-center items-center ">
        <button
         className='p-2 ' onClick={() => togglePopup(project._id)}>See more</button>
      </div>
         
      <div className="   rounded-md w-4/12 flex  justify-end items-center m-1 ">
      <FontAwesomeIcon onClick={togglePopup} className='p-1 mr-2' icon={faPenToSquare}  size="xl" />
      
        
      <FontAwesomeIcon icon={faTrash} size="xl"  onClick={() => handleDelete(project._id)}  />     
      </div>
      
    

      </div>
      {/* <p>{message}</p> */}
    </div>
  </div>


))}
                  
        </div>

           </div>
         </div>
         {showPopup && (

<ProjectDetails
togglePopup={togglePopup}
// handleAddProject={handleAddProject}
projectName={projectName}
setProjectName={setProjectName}
description={description}
setDescription={setDescription}
selectedProjectId={selectedProjectId} 
/>
   )}
         </div>
  )}
    </section>

    </>
  )
}