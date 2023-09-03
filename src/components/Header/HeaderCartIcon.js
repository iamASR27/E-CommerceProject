import React, { useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { useHistory, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartOffcanvas from "../Cart/CartOffcanvas";
import "./HeaderCartIcon.css";
import CartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";

const HeaderCartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
    console.log("logged out");
  };

  const handleCartIconClick = () => {
    // console.log('clicked')
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* {showModal && <CartModal onHide={handleCloseModal} />} */}
      {!isLoggedIn && <Nav.Link as={NavLink} to="/login" className='text-white mx-3' style={{fontSize: '20px'}}>Login</Nav.Link>}
      {isLoggedIn && <Nav.Link as={NavLink} to="/password" className='text-white mx-3' style={{fontSize: '20px'}}>Change Password</Nav.Link>}
      {isLoggedIn && <Nav.Link onClick={logoutHandler} className='text-white mx-3' style={{fontSize: '20px'}}>Logout</Nav.Link>}
      <Nav className="ml-auto cart-size">
        <Nav.Link
          href="#cart"
          className="text-white mx-3"
          onClick={handleCartIconClick}
        >
          <FaShoppingCart />
          <span className="cart-icon-badge">{totalAmount}</span>
        </Nav.Link>
      </Nav>
      <CartOffcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} />
    </>
  );
};

export default HeaderCartIcon;
