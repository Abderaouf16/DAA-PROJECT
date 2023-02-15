import React from 'react'
import home from '../components/CSS/login.css'
import  wood from '../assets/wood.jpg'
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  return (
    <>
  
    <div className="abdou1">
  <div className="mino1 ">
    <div className=" container-left2 ">
    </div>
    <div className="container-right bg-white">
    <div className=" container ">
      <h2 className='_h2'> Log In</h2>
      <div className="big container ">
        <div className="  my-7">
          <div className="">
           <div className="email">
            <div className="">
                  <label htmlFor="" className='flex '>
                    <span className='flex text-email text-sm text-black m-2 '> Username:</span>
                  </label>
                     <div className="flex flex-row m-1 ">
                         <input type="text" className=' bg-white text-black m-2  cursor-pointer w-11/12 py-1 rounded-md border border-black' />
                     </div>
            </div>
           </div>
           <div className="pasword">
            <div className="">
              <label htmlFor="" className='flex text-email text-sm text-black m-2'>
                <span className='flex'> Password:</span>
              </label>
            </div>
            <div className=" flex flex-row m-1  ">
              <input type="password" className=' bg-white m-2 text-black cursor-pointer w-11/12 py-1 rounded-md border border-black' />
            </div>
            <div className="flex text-xs text-black  m-1 px-2 pb-2">
            Min 6 characters, numbers & letters
            </div>
           </div>
           <div className=" flex ">        
            <button type='button' className='flex bg-slate-600  w-11/12 py-3 m-3 justify-center rounded-sm '>
            <span className=' text-sm '> Log In</span>
           </button>
           </div>
           <div className=" text-black text-sm m-2"> Or</div>
          <div className=" ">
            
            <button className='flex-1 flex-row m-2 py-3 px-2 bg-slate-600 w-11/12  justify-center rounded-sm  '>
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
        <p className='text-black text-xs'>By logging in to Archi-World, I confirm that I have read and agree to the Archi-World Terms of Service, Privacy Policy, and to receive emails and updates.</p>
      </div>
      <div className="">
  
      </div>
    </div>
    </div>
    
  </div>
      </div>
    </>
  )
}
