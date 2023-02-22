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
      <div className=" bg-white  h-full flex justify-center items-center">
        <div className=" bg-slate-600 h-3/5 w-3/5 flex  items-center flex-col   mr-96">
            <div className="flex flex-col items-center mt-44  ">
            <h1 className=' text-6xl mt-10  font-bold  '></h1>
             <h4 className=' m-5 font-normal'> DISCOVER THE LARGEST PROJECTS LIBERARY ON THE INTERNET </h4>
        </div>
        </div>
      </div>
    </section>

</>

  )

}
