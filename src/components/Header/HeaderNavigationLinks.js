import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './HeaderNavigationLinks.css';

const HeaderNavigationLinks = () => {
  return (
    <Nav className="me-auto size">
      <Nav.Link as={NavLink} to="/home" className='text-white mx-3'>Home</Nav.Link>
      <Nav.Link as={NavLink} to="/" className='text-white mx-3'>Store</Nav.Link>
      <Nav.Link as={NavLink} to="/about" className='text-white mx-3'>About</Nav.Link>
      <Nav.Link as={NavLink} to="/contact" className='text-white mx-3'>Contact Us</Nav.Link>
    </Nav>
  );
}

export default HeaderNavigationLinks;
