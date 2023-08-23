import React from "react";
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from 'react-icons/fa';
import './HeaderCartIcon.css';

const HeaderCartIcon = () => {
  return (
    <Nav className="ml-auto cart-size">
      <Nav.Link href="#cart" className="text-white mx-3">
        <FaShoppingCart />
      </Nav.Link>
    </Nav>
  );
};

export default HeaderCartIcon;