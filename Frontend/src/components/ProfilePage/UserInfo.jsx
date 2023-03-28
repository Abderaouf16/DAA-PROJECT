import React from 'react'

export default function UserInfo() {
  return (
    <>
    <div className=' '>
           <div className=" bg-blue-500 h-3/5 w-9/12 m-auto flex flex-col  ">
            <div className="flex justify-center w-full  text-2xl items-center ">
              <div className="">
              <h1 className='py-10'>Persenal informations</h1>
              </div>
            </div>
            <div className="big-father flex py-10 ">
              <div className=" bg-violet-500 flex-1 ">
                <div className="">
                <h2 className='p-5'> UserName</h2>
                </div>
                       <div className="">
                         <h2 className='p-5'>{user.username}</h2>
                       </div>
                <div className="">
                  <h2 className='p-5'>Your Email</h2>
                </div>
              </div>
              <div className=" bg-lime-500 flex-1 ">
                 <div className="">
                  <h2 className='p-5'>Change Password</h2>
                 </div>
                 <div className="">
                  <h2 className='p-5'>Your Curent password</h2>
                 </div>
                 <div className="">
                  <h2 className='p-5'>New password</h2>
                 </div>
                 <div className="">
                  <h2 className='p-5'>Confirm password</h2>
                 </div>
              </div>
            </div>
            <div className="flex justify-evenly  ">
                   <div className=" ">
                    <button className='bg-black rounded-none'>Cancel</button>
                  </div>
              <div className="">
                <button className='bg-black rounded-none'>submit</button>
              </div>
                  
            </div>
           </div>
           </div>
           </>
  )
}
