import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { slideInDown, slideInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const slAnimation = keyframes`
from {top: 0px;}
to {top: -40px;}
`;

const Title = styled.div`
    left: 10px;

    top: 20px;


`

function NavbarMain(props) {
  const navigate = useNavigate();
  return <>
  <Title onClick={()=> navigate("/") } className="title">
  <h1 >P
  <span className="fullName">ierre</span>
  L<span className="fullName">ingat</span>
  </h1>
  </Title>
  
  </>;
}

NavbarMain.propTypes = {};

export default NavbarMain;
