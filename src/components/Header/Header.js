import React from 'react';
import HeaderCartIcon from './HeaderCartIcon';
import HeaderNavigationLinks from './HeaderNavigationLinks';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';


const Header = () => {
    return (
        <Navbar className="bg-dark">
        <Container /*className="d-lg-flex flex-lg-row"*/>
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