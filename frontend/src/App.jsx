import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';

const someAnimation = keyframes`${tada}`;

const BouncyDiv = styled.div`
  animation: 2s ${someAnimation};
  text-align: center

`;


function App() {
  return (
 
 <div>
  <BouncyDiv>
       <h1>Portfolio!</h1>
       <h2> Hello </h2>
    </BouncyDiv>
    </div>
      
  );
}

export default App;
