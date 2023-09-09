import React, { useState, useContext, useEffect, useCallback } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.userEmail ? authCtx.userEmail.replace(/[@.]/g, "") : "";

  const addToCart = async (item) => {
    try {
      setCartItems([...cartItems, item]);

      if (authCtx.isLoggedIn) {
        const response = await fetch(
          `https://crudcrud.com/api/ee32549710d442ceacd3cbb53a92c35b/cart${userEmail}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add item to cart.");
        }
      }

      
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/ee32549710d442ceacd3cbb53a92c35b/cart${userEmail}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }
      const data = await response.json();

      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, [userEmail]);

  const clearCart = () => {
    setCartItems([]); 
  };

  useEffect(() => {
    if(authCtx.isLoggedIn) {
      fetchCartItems();
    } else {
      clearCart();
    }
  }, [fetchCartItems, authCtx.isLoggedIn])
  




  const removeFromCart = (id, item) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

    if (authCtx.isLoggedIn) {
      fetch(
        `https://crudcrud.com/api/ee32549710d442ceacd3cbb53a92c35b/cart${userEmail}/${item._id}`,
        {
          method: "DELETE",
        }
      );
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    fetchCartItems,
    removeFromCart,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
