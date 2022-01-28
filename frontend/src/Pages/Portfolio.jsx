import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router';
import { slideInUp, fadeIn, zoomIn} from 'react-animations';
import Button from 'react-bootstrap/Button';
import PortfolioCards from '../Components/PortfolioCards';




const slideAnimation = keyframes`${zoomIn}`;
const fadeAnimation = keyframes`${fadeIn}`;

const PortfolioDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height:100vh;
    height: 100vh;
    background: #A8D0E6;
    padding-top: 100px;
    animation: 1s ${fadeAnimation};
    
 


`

const AnimatedDiv = styled.div`
  animation: 3s ${fadeAnimation};
  opacity: 0;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 20px;
  margin-bottom: 30px;


`

function Portfolio({scrollRef}) {
 

  return <PortfolioDiv  ref={scrollRef}>
    <AnimatedDiv>
    <h1 style={{fontSize: "45px"}}> Portfolio </h1>
    </AnimatedDiv>

    <PortfolioCards>

    </PortfolioCards>

  </PortfolioDiv>;
}


Portfolio.propTypes = {};

export default Portfolio;
