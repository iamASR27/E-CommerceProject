import React, { useContext } from "react";
import "./ProductList.css";
import CartContext from "../store/cart-context";

const products = [
  {
    id: "c1",

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "c2",

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "c3",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "c4",

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductList = () => {
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
    <div className="container">
      <div className="row product-list-container">
        {products.map((product) => (
          <div className="col-md-4 col-sm-6 product" key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="product-image"
            />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
