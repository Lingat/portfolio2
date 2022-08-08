import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router';
import './index.scss';
function About() {
    const navigate = useNavigate();
    const [fade, setFade] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setFade(true);
        }, 500);
    }, []);
    return (
        <>
            <div className={'aboutMain ' + (fade ? 'fadeIn' : '')}>
                <img className='aboutImg' src='profile.png' alt='me'></img>
                <div className='aboutText'>
                    <h1 className='text-success'>About me</h1>
                    <h2>Pierre Lingat</h2>
                    <p>
                        I'm a student at UNSW currently pursuing a double degree
                        in Computer Science and Arts. I have over 4 years of
                        experience developing personal projects with JavaScript
                        and HTML/CSS and ~6 months working on websites as a
                        freelance full-stack web developer. I am currently
                        working an IT position at Eagle Vale Highschool where I
                        am responsible for helping staff members with
                        tech-related issues and also assisting in developing
                        software that automates paper processes.
                    </p>
                    <p>
                        In the Summer of 2022/23, I'll be starting as an
                        Software Developer Intern at{' '}
                        <a
                            href='https://www.atlassian.com/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Atlassian.
                        </a>
                    </p>
                    <Button
                        variant='outline-secondary'
                        onClick={() => {
                            window.location.href = 'mailto:lingat917@gmail.com';
                        }}
                        className='homeBtns'
                    >
                        Contact
                    </Button>{' '}
                    <Button
                        variant='outline-success'
                        onClick={() => {
                            window.open(
                                'https://portfolio-1d637.web.app/resume.pdf',
                                '_blank'
                            );
                        }}
                        className='homeBtns'
                    >
                        Resume
                    </Button>{' '}
                </div>
            </div>
        </>
    );
}

export default About;
