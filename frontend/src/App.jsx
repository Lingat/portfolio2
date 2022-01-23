import './App.css';
import React from 'react';
import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'



function App() {
   const portfolioRef = useRef(null);
   const contactRef = useRef(null);

   const portfolioScroll = () => portfolioRef.current.scrollIntoView({behavior: "smooth"})
   const contactScroll = () => contactRef.current.scrollIntoView({behavior: "smooth"})  
  return (
 
    <>

  <Home portfolioScroll={portfolioScroll} contactScroll={contactScroll} ></Home>

    </>  
  );
}

export default App;
