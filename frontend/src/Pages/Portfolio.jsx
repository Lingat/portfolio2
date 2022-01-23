import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';




const PortfolioDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
min-height:100vh;
height: 100vh;
    background: #F78888;
    padding-top: 50px;

`
function Portfolio({scrollRef}) {
  return <PortfolioDiv>
    <h1> Portfolio </h1>
  </PortfolioDiv>;
}

Portfolio.propTypes = {};

export default Portfolio;
