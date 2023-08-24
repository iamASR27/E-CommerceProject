import React, { useState, useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from 'react-icons/fa';
import CartOffcanvas from "../Cart/CartOffcanvas";
import './HeaderCartIcon.css';
import CartContext from "../store/cart-context";

const HeaderCartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  
  // useEffect(() => {
  //   // Check if URL contains "#cart" when the component mounts
  //   if (window.location.hash === "#cart") {
  //     setShowOffcanvas(true);
  //   }
  // }, []);

  const handleCartIconClick = () => {
    // console.log('clicked')
    setShowOffcanvas(true);
  }

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  }

  return (
    <>
    {/* {showModal && <CartModal onHide={handleCloseModal} />} */}
    
    <Nav className="ml-auto cart-size">
      <Nav.Link href="#cart" className="text-white mx-3" onClick={handleCartIconClick}>
        <FaShoppingCart />
        <span className="cart-icon-badge">{cartItems.length}</span>
      </Nav.Link>
    </Nav>
    <CartOffcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} />
     
     </>
  );
};

export default HeaderCartIcon;