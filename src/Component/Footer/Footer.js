import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



function Footer() {
    return (
        <div className='foots'>

            <footer>




                <h1>Logo</h1>

                <ul><h4>Mobile App</h4>
                    <li>Feature</li>
                    <li>live share</li>
                    <li> video</li>
                </ul>


                <ul><h4>Community</h4>
                    <li>Feature Artists</li>
                    <li>The Portal</li>
                    <li>Live Event</li>
                </ul>


                <ul><h4>Company</h4>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>History</li>
                </ul>


                <div className='btn1'>
                    <button className='login'>Login</button>
                    <button className='reg'>Register</button>

                </div>


            </footer>
           


            <div className='phons'>
                <p>photo, inc 2019 we love our user</p>
                <span>
                    <p>
                        follow us: 
                   
                    <FontAwesomeIcon icon={faFacebook} className="icon"/>
                    <FontAwesomeIcon icon={faTwitter} className="icon"/>
                    <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    </p>
                </span>

            </div>
        </div>
    )
}

export default Footer
