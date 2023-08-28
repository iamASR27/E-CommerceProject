import React, { useContext } from "react";
import Title from "../components/Title/Title";
import ProductList from "../components/Products/productList";
import CartContext from "../components/store/cart-context";

const StorePage = () => {
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext);

  const handleAddToCart = (product) => {
    const existingCartItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingCartItem) {
      updateQuantity(existingCartItem.id, existingCartItem.quantity + 1);
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };
  return (
    <>
      <Title />
      <ProductList onAddToCart={handleAddToCart} />
    </>
  );
};

export default StorePage;
