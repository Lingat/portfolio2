import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';




const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height:100vh;
    height: 100vh;
    background: #90CCF4;
    padding-top: 50px;

`
function Contact({scrollRef}) {
  return <ContactDiv ref ={scrollRef}>
    <h1> Contact </h1>
  </ContactDiv>;
}

Contact.propTypes = {};

export default Contact;
