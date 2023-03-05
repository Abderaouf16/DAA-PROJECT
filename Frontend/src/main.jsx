import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import dotenv from 'dotenv'

// require("dotenv").config();


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  

    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>
  
)
