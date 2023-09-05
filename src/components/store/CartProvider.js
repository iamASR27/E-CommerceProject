import React, { useState, useContext, useEffect, useCallback } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const authCtx = useContext(AuthContext);

  // const userEmail = authCtx.userEmail.replace(/[@.]/g, "");
  const userEmail = authCtx.userEmail ? authCtx.userEmail.replace(/[@.]/g, "") : "";


  //   const addToCart = (item) => {
  //     setCartItems([...cartItems, item]);

  //     if(authCtx.isLoggedIn){
  //       fetch(`https://crudcrud.com/api/1bccbc030bff43c785d914091ca47b31/cart${userEmail}`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(item),
  //     }
  //       )
  //   }
  // };

  const addToCart = async (item) => {
    try {
      setCartItems([...cartItems, item]);
    // try {
    //   const existingCartItemIndex = cartItems.findIndex(
    //     (cartItem) => cartItem._id === item._id
    //   );
  
    //   if (existingCartItemIndex !== -1) {
    //     const updatedCart = [...cartItems];
    //     updatedCart[existingCartItemIndex].quantity++;
    //     setCartItems(updatedCart);
    //   } else {
    //     setCartItems([...cartItems, { ...item, quantity: 1 }]);
    //   }
  

      if (authCtx.isLoggedIn) {
        const response = await fetch(
          `https://crudcrud.com/api/0d8dec34cf4a4db690ad4968f3daf142/cart${userEmail}`,
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

      // await fetchCartItems();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const fetchCartItems = useCallback(async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/0d8dec34cf4a4db690ad4968f3daf142/cart${userEmail}`
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

  useEffect(() => {
    if(authCtx.isLoggedIn) {
      fetchCartItems();
    }
  }, [fetchCartItems, authCtx.isLoggedIn])
  




  const removeFromCart = (id, _id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);

    if (authCtx.isLoggedIn) {
      fetch(
        `https://crudcrud.com/api/0d8dec34cf4a4db690ad4968f3daf142/cart${userEmail}/${_id}`,
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
    removeFromCart,
    fetchCartItems,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
