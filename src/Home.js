import React from 'react'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
   <Header/>
{/* 
   <section>
    <h1>Home Page</h1>
   </section> */}
   
    <Outlet/>
   </>
  )
}
