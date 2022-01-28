import React from 'react';
import CardComponent from './CardComponent';
import { slideInUp, fadeIn, zoomIn} from 'react-animations';

import styled, { keyframes } from 'styled-components';
const fadeAnimation = keyframes`${fadeIn}`;

let projects = [{
    title: "Project 1",
    description: "Some quick example text to build on"
    + "the card title and make up the bulk of the card's content.",
    img: "./elipseman.png",
    tags: [["JS", "primary"], ["React", "secondary"], ["Airtable", "info"], ["Spotify API", "success"]],
    link: "https://musicrankings.web.app/"
},

{
    title: "Project 2",
    description: "Some quick example text to build on"
    + "the card title and make up the bulk of the card's content.",
    img: "./elipseman.png",
    tags: [["JS", "primary"], ["React", "secondary"], ["Airtable", "info"], ["Spotify API", "success"]],
    link: "https://musicrankings.web.app/"
},

{
    title: "Project 3",
    description: "Some quick example text to build on"
    + "the card title and make up the bulk of the card's content.",
    img: "./elipseman.png",
    tags: [["JS", "primary"], ["React", "secondary"], ["Airtable", "info"], ["Spotify API", "success"]],
    link: "https://musicrankings.web.app/"
},

]

const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    animation: 3s ${fadeAnimation};
    opacity: 0;
    animation-delay: 2s;
    animation-fill-mode: forwards;


`

function PortfolioCards() {
  return <CardDiv>
      {projects.map((p) => 
        <CardComponent info={p}></CardComponent>
      )
        }
    </CardDiv>;
}

export default PortfolioCards;
