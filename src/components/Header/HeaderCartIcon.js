import React, { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from 'react-icons/fa';
import CartModal from "../Cart/CartModal";
import './HeaderCartIcon.css';

const HeaderCartIcon = () => {
  const [showModal, setShowModal] = useState(false);

  
  useEffect(() => {
    // Check if URL contains "#cart" when the component mounts
    if (window.location.hash === "#cart") {
      setShowModal(true);
    }
  }, []);

  const handleCartIconClick = () => {
    // console.log('clicked')
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
    {/* {showModal && <CartModal onHide={handleCloseModal} />} */}
    
    <Nav className="ml-auto cart-size">
      <Nav.Link href="#cart" className="text-white mx-3" onClick={handleCartIconClick}>
        <FaShoppingCart />
      </Nav.Link>
    </Nav>
    <CartModal show={showModal} onHide={handleCloseModal} />
     
     </>
  );
};

export default HeaderCartIcon;