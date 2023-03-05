import React from 'react'
import logo from '../../assets/logo.png'
import footer from '../CSS/footer.css'

export default function Footer() {
  return (
    <div>
      <div className='main flex flex-col  '>
        <p>Fellow Us </p>
        
        <p className='footer-text'>
        This space is dedicated and exclusively managed by students.
        </p>
        
        <img src={logo} className='logo-daa' alt="" />
         <p> Made with ❤️ by KHAMOUM Abderaouf </p>
        
      </div>
    </div>
  )
}
