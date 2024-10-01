import React from 'react'
//import Header from './Component/Header'
import { Outlet, useNavigate } from 'react-router-dom'

export default function About() {
      const navigate = useNavigate();
      const gotoContact =()=>{
        navigate("/Contact")
      }
    

    return (
        <>
            <section>
                <h1> About Page</h1>
               <button onClick={()=>gotoContact()}>Go to contact</button>
               <button onClick={()=>{navigate(-1)}}>Go Back</button>
            </section>
            <Outlet />
        </>
    )
}
