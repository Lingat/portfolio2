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
    padding: 10px;
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

const TextDiv = styled.div`
  justify-self: end;
  margin-top: 50px;

`


function Home({portfolioScroll, contactScroll}) {
  const navigate = useNavigate();
  return <MainDiv>
  <TopDiv
  style={{background: "#A8D0E6"}}
  >
      
  <TopDiv style={{height: "70%", display: "flex", flexDirection: "column",   alignItems: "center",}}>
    <img style={{ width: "300px", height: "300px"}} src = "elipseman.png"></img>
  </TopDiv>
  
  <TextDiv>
  <h2 className="link" onClick={() => navigate("/portfolio")}>Portfolio</h2>
  <p> Things I've worked on in the past. </p>
  </TextDiv>

  </TopDiv>


  <BottomDiv>
    <ContainedDiv style={{background: "#24305E"}}>
        <TopDiv style={{ display: "flex", flexDirection: "column",   alignItems: "center",}}>
    <img style={{ width: "300px", height: "300px"}} src = "elipseman.png"></img>
  </TopDiv>
        <TextDiv>
        <h2 className="link"> Resume </h2>
        <p> Check out my work experience! </p>
        </TextDiv>
    </ContainedDiv>
    <ContainedDiv style={{background: "#F76C6C"}}>
        <TopDiv style={{ display: "flex", flexDirection: "column",   alignItems: "center",}}>
    <img style={{  width: "300px", height: "300px"}} src = "elipseman.png"></img>
  </TopDiv>
        <TextDiv>
        <h2 className="link" onClick={contactScroll}>  Contact </h2>
        <p> Interested? Let's work together. </p>
        </TextDiv>
    
    </ContainedDiv>
  </BottomDiv>
  </MainDiv>;
}

export default Home;
