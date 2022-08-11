import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <Navbar bg="light" expand="lg" className='navbar'>
                <Container className='container'>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-links" as={Link} to="">Home</Nav.Link>
                            <Nav.Link className="nav-links" href="#about">About</Nav.Link>
                            <Nav.Link className="nav-links" as={Link} to="#contact">Contact</Nav.Link>
                            {/* <Nav.Link className="nav-links" href="/services">Services</Nav.Link> */}
                            <Nav.Link className="nav-links" href="#blog">Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
