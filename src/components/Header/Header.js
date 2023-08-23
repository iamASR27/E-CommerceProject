import React from 'react';
import HeaderCartIcon from './HeaderCartIcon';
import HeaderNavigationLinks from './HeaderNavigationLinks';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FaShoppingCart } from 'react-icons/fa';



const Header = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
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