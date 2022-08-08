import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router';

function NavbarMain() {
    const navigate = useNavigate();
    return (
        <div className='navbarWrapper'>
            {[false].map((expand) => (
                <Navbar key={expand} bg='light' expand={expand}>
                    <Container fluid>
                        <div className='titleWrapper'>
                            <h3
                                className='title'
                                onClick={() => {
                                    navigate('/');
                                }}
                            >
                                LINGAT
                            </h3>
                        </div>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            className='navbarToggle'
                        />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement='end'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Pierre Lingat
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <p
                                        className='link text-primary'
                                        onClick={() => {
                                            window.open('/', '_self');
                                        }}
                                    >
                                        Home
                                    </p>
                                    <p
                                        className='link text-secondary'
                                        onClick={() => {
                                            window.open('/about', '_self');
                                        }}
                                    >
                                        About
                                    </p>
                                    <p
                                        className='link text-warning'
                                        onClick={() => {
                                            window.open('/portfolio', '_self');
                                        }}
                                    >
                                        Portfolio
                                    </p>

                                    <p
                                        className='link text-danger'
                                        onClick={() => {
                                            window.location.href =
                                                'mailto:lingat917@gmail.com';
                                        }}
                                    >
                                        Contact
                                    </p>
                                    <p
                                        className='link text-success'
                                        onClick={() => {
                                            window.open(
                                                'https://portfolio-1d637.web.app/resume.pdf',
                                                '_blank'
                                            );
                                        }}
                                    >
                                        Resume
                                    </p>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
}

export default NavbarMain;
