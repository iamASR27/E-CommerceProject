import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: 0,
});


export default CartContext;
