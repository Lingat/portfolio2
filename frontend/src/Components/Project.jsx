import React from 'react';

function Project({ proj }) {
    return (
        <>
            <div
                className='project'
                onClick={() => {
                    window.open(proj.link, '_blank');
                }}
            >
                <div>
                    <h2 className='projectTitle'>{proj.name}</h2>
                    <h5 className='projectDescription'>{proj.description}</h5>
                    <hr></hr>
                    <h6>{proj.date}</h6>
                    <img
                        className='projectImage'
                        src={proj.image}
                        alt={proj.description}
                    ></img>
                </div>
                {/*
                <div
                    className='hoverOutline'
                    onClick={() => {
                        window.open(proj.link, '_blank');
                    }}
                >
                    <p>Check it out</p>
                </div>
                 */}
            </div>
        </>
    );
}

export default Project;
