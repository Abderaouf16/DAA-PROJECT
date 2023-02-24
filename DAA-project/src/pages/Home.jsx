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

    <section className='father'>
    <Header/>
      <div className="  h-full w-full flex justify-center items-center ">
        <div className="  h-3/5 w-3/5 flex-1 flex sm:flex-row   flex-col  justify-center items-center ">
            <div className=" flex  flex-col m-4  text-5xl md:text-7xl  font-bold  ">
            <h1 className='mt-4   '>Harmony </h1>
            <h1 className='mt-4  md:ml-20 ml-7 '> Elegance  </h1>
            <h1 className='mt-4  md:ml-32 ml-12 '>Simplicity</h1>
             
        </div>
        
        <div className=" flex-1 justify-end items-center flex ">
           <div className="justify-center items-center flex">
            <button type='button' className='flex   bg-slate-500 w-2/4 py-3 m-3 justify-center rounded-lg px-24 '>
            <span className=' text-sm text-white '> EXPLORE MORE</span>
           </button>
           </div>
        </div>
        </div>
      </div>
    </section>
  

</>

  )

}
