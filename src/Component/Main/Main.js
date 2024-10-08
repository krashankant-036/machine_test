import React from 'react'
import './Main.css'
import { assest } from '../../assest/assest'

function Main() {
    return (
        <div className='main'>

            {/* ----------------------------------------------------------page1==================================== */}

            <div className='main1'>
                <div className='overLay'>
                    {/* <h2>Welcome to our PlateForm</h2> */}
                    <h1>Welcome to largest community</h1>
                    <button className='btn1'>Join Now</button>
                </div>
                <img src={assest.banner1} alt='ban1' />
            </div>

            {/* -----------------------------------mainn2----------------- */}
            <div className='main2'>
                <h2>Snap photo like and share like <br /> never before</h2>
            </div>
            {/* ----------------------------------------------container------------------------------------ */}

            <div className='contained'>
                <div className='container1'>
                    <h3>Sed ut Persipediciat</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</p>
                    <button className='btn1'>Learn more</button>
                </div>
                <div className='container1'>
                    <h3>Sed ut Persipediciat</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</p>
                    <button className='btn1'>Learn more</button>
                </div>
                <div className='container1'>
                    <h3>Sed ut Persipediciat</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</p>
                    <button className='btn1'>Learn more</button>
                </div>
                <div className='container1'>
                    <h3>Sed ut Persipediciat</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."</p>
                    <button className='btn1'>Learn more</button>
                </div>
            </div>

            <hr></hr>
            <br style={{ backgroundColor: "gray" }}></br>
            <br></br>
            {/*============== ==============================page2--------------------------------------- */}
            <hr></hr>
            <div className='main2'>

                <div className='main2-first'>


                    <h1>Have you ever posted any photo on social media ?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>

                <div className='main2-sec'>

                    <div className='sec1'>
                        <h3>Lorem ipsum dollar</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                        <h3>Lorem ipsum dollar</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                        <h3>Lorem ipsum dollar</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
                        <br />
                    </div>

                    <div className='sec1'>
                        <img src={assest.hero} alt='img-1' />
                    </div>
                </div>


            </div>
            <hr></hr>
            <br></br>
            <br></br>
            <hr></hr>
            {/* =================================================page3================================ */}

            <div className='main3'>

                <div className='main3-first'>
                    <h1>Make your photo more stylish ?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>


                <div className='cards'>
                    <div className='card1'>
                        <img src={assest.card1} alt='' />
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='card2'>
                        <img src={assest.card2} alt='' />
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className='card3'>
                        <img src={assest.card3} alt='' />
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>

                </div>
            </div>

            <hr></hr>
            <br />
            <br />
            <hr />
            {/* ===========================================page4-===================================== */}

            <div className='main4'>

                <div className='main4-first'>
                    <h1>Ready to Take a free trial</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                </div>

                <div className='boxing'>
                    <div className='boxes'>

                        <h1>Sign up for a free account</h1>
                        <div className='fname'>
                        <input type='text' placeholder='Firstname' required></input>
                        <input type=' text' placeholder='"LastName' required></input>
                        <input type='email' placeholder='abc@gmail.com' required/>
                        <input type='number' placeholder='Phone Number' required/>
                        <input type='password' placeholder='Create Password' className='password'/>
                        </div>
                     
                      <button className='btn1'>Register
                        </button>  
  
                    </div>

                </div>


            </div>





        </div >
    )
}

export default Main




// --------------------------------------------------------chatgpt----------------------


// import React from 'react';
// import './Main.css';
// import { assest } from '../../assest/assest';

// function Main() {
//   return (
//     <div className='main'>
//       <div className='main1'>
//         {/* <div className='overlay'>
//           <h2>Welcome to Our Platform</h2>
//           <p>Join us now and be part of our amazing community!</p>
//           <button className='join-btn'>Join Now</button>
//         </div> */}
//         <img src={assest.banner1} alt='ban1' />
//       </div>
//     </div>
//   );
// }

// export default Main;
