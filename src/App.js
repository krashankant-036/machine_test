//import logo from './logo.svg';
import './App.css';
//import {useState} from React
//import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div><Home /></div>} >
            <Route path='/About' element={<div><About /></div>} />
            <Route path='/Contact' element={<div><Contact /></div>} />
            <Route path='*' element={<div><Error /></div>} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>

  );
}

export default App;
