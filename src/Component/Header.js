import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <>
    <header>
        <nav>
            <ul className='active'>
              <NavLink to='/'> <li>Home</li></NavLink> 
              <NavLink to='/About'> <li>About</li></NavLink> 
              <NavLink to ='/Contact'> <li>Contact</li></NavLink> 
            </ul>
        </nav>
    </header>
</>
  )
}
