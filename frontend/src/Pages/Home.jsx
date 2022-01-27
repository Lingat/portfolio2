import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeIn, bounceIn, bounceInLeft } from 'react-animations';
import { useNavigate } from 'react-router';

const bilAnimation = keyframes`${bounceInLeft}`;
const fadeAnimation = keyframes`${fadeIn}`;


/*
  Should I change this?
*/
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height:100vh;
    height: 100vh;
`
const TopDiv = styled.div`
    padding: 5px;
    height: 60%;
    animation: 1s ${fadeAnimation};

`
const BottomDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 40%;
    animation: 3s ${bilAnimation};

`

const ContainedDiv = styled.div`
    width: 50%;
    padding: 10px;
    display: flex;
    flex-direction: column;
`


function Home({portfolioScroll, contactScroll}) {
  const navigate = useNavigate();
  return <MainDiv>
  <TopDiv
  style={{background: "#F78888"}}
  >
      
  <TopDiv style={{height: "70%", display: "flex", flexDirection: "column",   alignItems: "center",}}>
    <img style={{ width: "310px", height: "300px"}} src = "ManVespa.png"></img>
  </TopDiv>
  
  <div >
  <h2 className="link" onClick={() => navigate("/portfolio")}>Portfolio</h2>
  <p> Things I've worked on in the past. </p>
  </div>

  </TopDiv>


  <BottomDiv>
    <ContainedDiv style={{background: "#F3D250"}}>
        <TopDiv style={{ display: "flex", flexDirection: "column",   alignItems: "center",}}>
    <img style={{ width: "300px", height: "300px"}} src = "elipseman.png"></img>
  </TopDiv>
        <div>
        <h2 className="link"> Resume </h2>
        <p> Check out my work experience! </p>
        </div>
    </ContainedDiv>
    <ContainedDiv style={{background: "#90CCF4"}}>
        <TopDiv style={{ display: "flex", flexDirection: "column",   alignItems: "center",}}>
    <img style={{ paddingTop: "60px", width: "150px", height: "150px"}} src = "email.png"></img>
  </TopDiv>
        <div>
        <h2 className="link" onClick={contactScroll}>  Contact </h2>
        <p> Interested? Let's work together. </p>
        </div>
    
    </ContainedDiv>
  </BottomDiv>
  </MainDiv>;
}

export default Home;
