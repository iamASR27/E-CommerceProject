import React from 'react';
import HeaderCartIcon from './HeaderCartIcon';
import HeaderNavigationLinks from './HeaderNavigationLinks';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


const Header = () => {
    return (
        <Navbar className="bg-dark fixed-top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
           <HeaderNavigationLinks />
           <HeaderCartIcon />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    }


export default Header;