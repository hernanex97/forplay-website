import React from 'react';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../../assets/img/nav-icon1.svg';
require('./NavBar.css');

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    },
        [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    var forplay_text = "ForPlay";
    return (
        <section id="home">
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Brand className="navbarbrand" href="#home">
                        <p className="logo-text-1">{forplay_text}</p>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/forplay-community-432b34195/" target="_blank" rel="noreferrer noopener"><img src={navIcon1} alt="" ></img></a>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#business" className={activeLink === 'business' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('business')}>Our Offer</Nav.Link>
                            <Nav.Link href="#vision" className={activeLink === 'vision' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('vision')}>Our Vision</Nav.Link>
                            <Nav.Link href="#community" className={activeLink === 'community' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('community')}>Invest</Nav.Link>
                            <Nav.Link href="#roadmap" className={activeLink === 'roadmap' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('roadmap')}>Forplay Roadmap</Nav.Link>
                            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Let's Connect</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    )
}

export default NavBar;