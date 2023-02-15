import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Link} from 'react-router-dom'
import home from '../components/CSS/home.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


export default function Home() {


  const displayFooter= true
  

  return ( 
     <>

  <Helmet title={'home'}></Helmet>

  <div className="">
    <div className="">
      <div className="left">
        <div className="">
          <h1></h1>
          <h3></h3>
          <button></button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  </div>
{displayFooter && <Footer/>}
</>

  )

}
