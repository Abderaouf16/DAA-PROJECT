
import React from 'react'
import home from '../components/CSS/login.css'
import  wood from '../assets/wood.jpg'
import { FcGoogle } from 'react-icons/fc';
import Header from '../components/Header/Header'

export default function Login2() {
  return (
    <>
  <section>
    <Header/>
    <div className="flex  justify-center items-center h-[650px]  mt-4 ">
   <div className="  w-11/12 h-full flex justify-center items-center father_container ">
    <div className=" container-left2 ">
    </div>
    <div className=" bg-white w-11/12 h-full  rounded-2xl flex container-right2">

    <div className="    ">
      <h2 className='_h2 flex  justify-center py-4 '> Log In</h2>
      <div className="big container  ">
        <div className="  ">
          <div className="">
           <div className="email">
            <div className="">
                  <label htmlFor="" className='flex m-2 '>
                    <span className='flex text-email  text-md text-black m-2 px-2  '> Username:</span>
                  </label>
                     <div className="flex flex-row m-1 justify-center ">
                         <input type="text" className=' bg-white text-black m-2  cursor-pointer w-11/12 py-1 rounded-md border border-black' />
                     </div>
            </div>
           </div>
           <div className="pasword">
            <div className="">
              <label htmlFor="" className='flex text-email text-md text-black m-2'>
                <span className='flex text-email  text-md text-black m-2 px-2 '> Password:</span>
              </label>
            </div>
            <div className=" flex flex-row m-1  justify-center ">
              <input type="password" className=' bg-white m-2 text-black cursor-pointer w-11/12 py-1 rounded-md border border-black flex ' />
            </div>
            <div className="flex text-xs text-black text-md px-6 pb-2 m-2" >
            Min 6 characters, numbers & letters
            </div>
           </div>
           <div className=" flex justify-center ">        
            <button type='button' className='flex bg-slate-600  w-11/12 py-3 m-3  rounded-sm  justify-center'>
            <span className=' text-sm '> Log In</span>
           </button>
           </div>
           <div className=" text-black text-sm m-2 flex  items-center justify-center"> Or</div>
           
          <div className=" flex justify-center">
            <button  type='button'  className='flex-1 flex-row m-2 py-3  bg-slate-600 w-11/12  justify-center rounded-sm   '>
             <div className=" flex align-center">
              <FcGoogle className='flex align-center m-1 '/>
              <div className=" flex-1 flex-row justify-center align-middle">
               <span> Continue with Google</span>
              </div>
              </div>
      
            </button>
           </div>
           </div>
        </div>
        <div className="  p-5">
        <h4 className='text-black text-xs '>By logging in to Archi-World, I confirm that I have read and agree to the Archi-World Terms of Service, Privacy Policy, and to receive emails and updates.</h4>

        </div>
      </div>
    </div>
    </div>
     
   </div>
   </div>
  </section>
  </>
    
  )
}
