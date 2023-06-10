import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onActiveUpdateLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`} sticky={scrolled ? 'top' : 'top'}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          Mashal.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto connect navbar-text" style={{marginLeft:"auto"}}>
            <NavLink
              to="/"
              exact
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onActiveUpdateLink('home')}
              style={{ color: 'black', padding: '0px 8px' }}
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              exact
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onActiveUpdateLink('skills')}
              style={{ color: 'black', padding: '0px 8px' }}
            >
              Skills
            </NavLink>
            <NavLink
              to="/project"
              exact
              className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onActiveUpdateLink('project')}
              style={{ color: 'black', padding: '0px 8px' }}
            >
              Projects
            </NavLink>
          </Nav>
          <span className=" connect" style={{ color: '#ffffff' }}>
            <div className="social-icon">
              <a href="http://" style={{ padding: '0px 5px' }}>
                <FontAwesomeIcon icon={faLinkedin} size="xl" className="icon-white" />
              </a>
              <a href="http://" style={{ padding: '0px 5px' }}>
                <FontAwesomeIcon icon={faFacebookSquare} size="xl" className="icon-white" />
              </a>
              <a href="http://" style={{ padding: '0px 5px' }}>
                <FontAwesomeIcon icon={faInstagramSquare} size="xl" className="icon-white" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => console.log('connect')}
              style={{ marginTop: '3px' }}
            >
              <span className="connect vvd" style={{ marginTop: '3px' }}>
                Let's connect
              </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
