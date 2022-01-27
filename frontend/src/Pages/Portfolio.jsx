import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router';
import { slideInUp, fadeIn} from 'react-animations';


const slideAnimation = keyframes`${slideInUp}`;
const fadeAnimation = keyframes`${fadeIn}`;

const PortfolioDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height:100vh;
    height: 100vh;
    background: #F78888;
    padding-top: 50px;
    animation: 1s ${slideAnimation};
 


`

const AnimatedDiv = styled.div`
  animation: 3s ${fadeAnimation};
  opacity: 0;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 45px;

`

function Portfolio({scrollRef}) {
 

  return <PortfolioDiv  ref={scrollRef}>
    <AnimatedDiv>
    <h1> Portfolio </h1>
    </AnimatedDiv>

  </PortfolioDiv>;
}


Portfolio.propTypes = {};

export default Portfolio;
