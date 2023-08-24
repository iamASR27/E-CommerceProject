import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './HeaderNavigationLinks.css';

const HeaderNavigationLinks = () => {
  return (
    <Nav className="me-auto size">
      <Nav.Link href="#home" className='text-white mx-3'>Home</Nav.Link>
      <Nav.Link href="#store" className='text-white mx-3'>Store</Nav.Link>
      <Nav.Link href="#about" className='text-white mx-3'>About</Nav.Link>
    </Nav>
  );
}

export default HeaderNavigationLinks;
