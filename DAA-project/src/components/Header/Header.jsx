import React, { useState } from 'react'
import header from '../CSS/header.css'
import {NavLink} from 'react-router-dom'

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


    <nav className='nav flex items-center justify-around p-10'>
        <a className= ' title  text-white font-bold ' href=''> Archi World</a>
        <ul className={active}>
            {
              header_links.map((item)=>(
                <li className=''>
                  <NavLink to={item.path}
                  className=''
                   >{item.display}</NavLink>
                </li>
              ))
            }
            <div className=""></div>
        </ul>

        <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    
    </nav>
  )
}
