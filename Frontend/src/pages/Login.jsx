import React from 'react'
import home from '../components/CSS/login.css'
import  wood from '../assets/wood.jpg'
import { FcGoogle } from 'react-icons/fc';
import Header from '../components/Header/Header'

import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import {useLogin} from '../hooks/useLogin'





export default function Login() {

  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {login, isLoading, error} = useLogin()
  
  

  async function handleLoginSubmit(e) {
    e.preventDefault();

    await login(email, password)
  }

  return (
    <>
    <section >
      <Header/>
      <div className="body1">
    <form action="" className='login-from flex flex-col items-center rounded-lg  '  onSubmit={handleLoginSubmit}>
      <h1 className='font-serif    text-xl'> Login  </h1>
      <div className="form-input-material flex flex-col">
        <label value={email} htmlFor='email'  className='p-2'>email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"
         placeholder='' className='form-control-material' required className=' rounded-sm' />
      </div>
      
      <div className="form-input-material flex flex-col">
        <label htmlFor='password ' className='p-2'>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password"
         placeholder='' className='form-control-material  rounded-sm ' required />
      </div>
         <button disabled={isLoading}  type='submit' className='btn bg-white text-black  rounded-md ' > Login</button>

    </form>
    </div>
    </section>
    </>
  )
}
