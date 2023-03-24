import React, { useState,useEffect } from 'react';
import home1 from '../components/CSS/Projects1.css'
import { FaSearch } from "react-icons/fa"; 
import ProjectsCard from '../components/ProjectsPage/ProjectsCard'
import Header from '../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from "../hooks/useAuthContext";
import axios from 'axios'


export default function Projects() {

  const {user}= useAuthContext()
  
  const displayFooter= true
  
  const [showPopup, setShowPopup] = useState(false);

  const [buttonPopup, setButtonPopup]= useState(false)

  const [projects, setProjects] = useState([]);
 
  
  const [projectName, setProjectName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');


  const handleAddProject = async (event) => {
    event.preventDefault();
  
    if (!description || !projectName ) {
      alert('Please fill all the fields');
      return;
    }
  
    const formData = new FormData();
    formData.append('description', description);
    formData.append('ProjectName', projectName);
    formData.append('postedBy', user._id);
  
    try {
      const response = await axios.post('http://localhost:3001/api/projects', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        }
      });
      if (response.status < 200 || response.status >= 300) {
        throw new Error('adding project: server responded with status ' + response.status);
      }
    } catch (error) {
      console.error(error);
      alert('error out side' + error.message);
    }
  };



// const handleAddProject = async (event) => {
//   event.preventDefault();

//   const addingInfo = {
//     description: description,
//     ProjectName: projectName,
//     postedBy:user._id
//   };

//   if (description && projectName) {
//     const response = await fetch('http://localhost:3001/api/projects', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${user.token}`
//       },
//       body: JSON.stringify(addingInfo)
//     })

//     if (!response.ok) {
//       throw new Error('Error adding project');
//     }
//     alert('Project added successfully!');
//   } else {
//     alert('Error adding project');
//   }
// }

//   try {
//     const response = await fetch('http://localhost:3001/api/projects', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${user.token}`
//       },
//       body: JSON.stringify(addingInfo)
//     })

//     if (!response.ok) {
//       throw new Error('Error adding project');
//     }

//     alert('Project added successfully!');
//   } catch (error) {
//     console.error(error);
//     alert('Error adding project');
//   }
// };








   
  useEffect(() => {
    fetch("http://localhost:3001/api/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
        
        
      })
      .then((data) => {
        setProjects(data);
   
      })
      .catch((e) => console.log(e));
  }, []);

  // async function handleLoginSubmit(e) {
  //   e.preventDefault();

  //   await Projects(projectName, description)
  // }

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return(
  <>
  <Header/>
<div className=" father flex justify-center ">
<div className=' flex flex-col  w-full items-center  '>
        <div className='w-full flex justify-center items-center  mt-4   py-6  '>
         <h2 className='big-title font-bold text-3xl text-white text-left items-center  '> Search and browse projects of your taste </h2>
        </div>
        <div className=""></div>
        <div className=" inputContainer w-5/12 h-[48px] rounded-3xl bg-white m-5 flex  justify-end my-4">
          <form action="" className='flex  w-11/12  '>
            <input  type="search" placeholder='search..' className='placeholder-black text-black bg-transparent w-full outline-none text-xl  ' />
            <button className='mr-2'> <FaSearch className=' text-black  text-xl  '/> </button>
          </form>
        </div>
          
      {user && (

        <div className="">
          <button className=' bg-white text-black  my-4 rounded-lg px-12' onClick={togglePopup}>Add Project</button>         
        </div>   
      )}

       {showPopup && (
        <div className="popup  ">
          <div className="popup-iner flex  flex-col  ">
            <div className=" flex justify-end">
            <FontAwesomeIcon className='  text-xl   ' icon={faTimes} onClick={togglePopup} />
            </div>
            
            <main className=' abdou123 flex  justify-center   '>
      <form action="" className='   '>
        <h2 className='text text-lg p-3'> Project name</h2>
        <div className="">
            <input required value={projectName} onChange={(e) => setProjectName(e.target.value)} type="text" className='bg-white my-2 p-2 text-black w-10/12 ml-4  rounded-md ' />
        </div>
        <h2 className='text text-lg p-3'>description</h2>
        <div className="">
        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='bg-white  my-2 text-black  w-10/12 p-2 ml-4   rounded-md'/>
        </div>
        <h2 className='text text-lg p-3'>Upload Photos</h2>
        <div className="">
        <input
         onChange={(e) => {
            setImage(e.target.files[0]);
          }}
           required type="file" name="fileToUpload" id="fileToUpload" class=" p-2 rounded-md w-11/12 ml-4 text-sm "/>         
        </div>
        <div className=" flex justify-around mt-6">
        <div className="   border-[1px] ">
          <button onClick={togglePopup}> cancel</button>
        </div>
        <div className="    border-white   border-[1px] ">
          <button onClick={handleAddProject} type='submit'>Add project </button>
          {/* {error && (
              <p className="text-red-500 font-bold p-3 text-sm">{error.msg}</p>
            )} */}
        </div>
        

        </div>
        </form>  
    </main>
          </div>
         
        </div>
       )}    





        <div className="flex flex-wrap  justify-center gap-8 text-black  " >
        {projects?.map((project) => (
  <div className="flex flex-wrap sm:justify-start justify-center gap-8">
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex"></div>
        <img src="" alt="" className='w-full h-full rounded-lg' />
      </div>
      <div className="mt-4 flex flex-col">
        <p className='font-semibold text-lg text-white truncate'>{project.description}</p>
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