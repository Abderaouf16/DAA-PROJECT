import React from "react";

function ProjectForm({ project }) {
  return (
    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
        <div className="relative w-full h-56 group">
          <div className="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex"></div>
          <img src="" alt="" className='w-full h-full rounded-lg' />
        </div>
        <div className=" flex flex-col ">
          <p className=' p-2 font-semibold text-lg text-white '>{project.ProjectName}</p>
        </div>
        <div className=" flex flex-col ">
          <p className=' p-2 font-semibold text-lg text-white truncate'>{project.description}</p>
        </div>
        <div className="flex justify-center items-center m-2">
        <div className="  bg-white rounded-md w-6/12 flex justify-center items-center ">
          <button className='p-2 '>See more</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;