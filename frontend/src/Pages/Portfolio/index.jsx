import React from 'react';
import Project from '../../Components/Project';
import './index.scss';

const dummyProjects = {
    projects: [
        {
            name: 'Hello World College',
            image: 'projects/helloworld.png',
            description:
                'A freelance project I worked on for a tutoring website.',
            link: 'https://helloworld.college/',
            date: '20/02/2021',
        },
        {
            name: 'Music Rankings',
            image: 'projects/musicrankings.png',
            description: 'A site for ranking your favourite albums.',
            link: 'https://musicrankings.web.app/',
            date: '15/01/2022',
        },
        {
            name: 'Artist Popularity',
            image: 'projects/popularity.png',
            description: 'Finding how popular your favourite artists are.',
            link: 'https://artist-popularity.web.app/',
            date: '28/12/2022',
        },
        {
            name: 'Recycling Game',
            image: 'projects/recycler.png',
            description: 'A fun recycling game I made in highschool.',
            link: 'https://recycler-f322f.web.app/',
            date: '07/05/2018',
        },
    ],
};
function Portfolio({ scrollRef }) {
    return (
        <>
            <div className='portfolioMain'>
                <div className='projects'>
                    {dummyProjects.projects.map((project) => {
                        return <Project proj={project}></Project>;
                    })}
                </div>
            </div>
        </>
    );
}

export default Portfolio;
