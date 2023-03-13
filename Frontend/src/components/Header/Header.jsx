import React, { useState, useEffect, useRef } from 'react';
import header from '../CSS/header.css'
import {NavLink} from 'react-router-dom'
import {useLogout} from '../../hooks/useLogout'
import {useAuthContext } from '../../hooks/useAuthContext'


const header_links=[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'projects',
    display:'Projects'
  },
  {
    path:'login',
    display:'Login'
  },
  {
    path:'signup',
    display:'Signup'
  },
  

]


export default function Header() {

  const {user}= useAuthContext()
 
                                // FOR UPDATING THE STATE "LOGOUT"

  const {logout} = useLogout()
  const handleClick =()=>{
    logout()
}
                          // FOR CLOSING THE DROPDOWN WHEN WE LOGOUT
const handleLogout = () => {
handleClick();
toggleDropdown();
}
 
                         //FOR THE DROPDOWN

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


                                                       // FOR CLOSING THE DROPDOWN WHEN WE PRESS AWAY
    const dropdownRef = useRef(null);
    useEffect(() => {
      // add event listener to detect clicks outside of the dropdown
      function handleClickOutside(event) {
        // Check if the clicked element is outside of the dropdown using the contains method on the dropdown reference
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false); // Close the dropdown if the clicked element is outside of the dropdown
        }
      }
      document.addEventListener('click', handleClickOutside);
      // cleanup function to remove event listener when component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [dropdownRef]);


                                                         // FOR THE SIDE BAR SMALL DEVICES
    const [active, setActive] = useState("nav__menu");
    const [icon ,setIcon] = useState("nav__toggler");
    const navToggle = () => {
     active === "nav__menu" ?
        setActive("nav__menu nav__active")
      : setActive("nav__menu");

      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    
    
  return (
<>

    <nav className='nav flex items-center justify-around p-10 bg-transparent'>
        <a className= ' title  text-white font-bold ' href='/home'> Archi World</a>
        <ul className={active}>
            <li><a href="/home">Home</a></li>
             <li className=''><a href="/projects">Projects</a></li>
            {!user && (
               <>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
              </>

             )}
        </ul>
        {user && ( 
          <>
        <div ref={dropdownRef} className="flex gap-2 border border-grey-300 rounded-full py-2 px-4 bg-white p-2">
        <div className="text-black"  >
          <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-6 h-6 ' onClick={toggleDropdown}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
          </div>
        
          
          {isOpen && ( 
                <div className=" dropeDown flex flex-col border-black border-2">
                <ul className=' cursor-pointer'>
                  <li className='my-1 '>profile</li>
                  {user && ( 
                    <button onClick={handleLogout}  className='p-0'>logout</button>
                  )}
                </ul>
              </div>
            )}
      
      
      <div className=" px-4">
        <h2 className='text-black text-md font-bold '>{user.username}</h2>
      </div>

        <div className=" bg-gray-500 rounded-full  ">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 relative top-1'>
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
        
        </div>
        </>
      )}

        <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    
    </nav>
        
        </>
  )
}
