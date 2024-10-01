import React from 'react'
//import Header from './Component/Header'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Contact() {
  const abhi = useNavigate();
  const GoHome =()=>{
    abhi('/');
  }

  return (
    <>
   
   <section>
  <h1> Contact Page</h1>
  <button onClick={GoHome}>go to home</button>

   </section>
  <Outlet/>  
    </>
  )
}
