import React from 'react'
import './Header.css'
//import '../../assest/assest'
import { assest } from '../../assest/assest'

function Header() {
    return (
       <div>
        <header>
            <nav>
                <h1>🐍</h1>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Community</li>
                    <li>Support</li>
                </ul>

                <div className='btn'>
                <button className='btn1'>Login</button>
                <button className='btn2'>Register</button>
                </div>
                
            </nav>

        </header>
       </div>
    )
}

export default Header
