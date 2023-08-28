import React from "react";
import { Link } from "react-router-dom"; 
import products from "./Products";
import "./ProductList.css";

const ProductList = ({ onAddToCart }) => {
 
  return (
    <div className="container">
      <div className="row product-list-container">
        {products.map((product) => (
          <div className="col-md-4 col-sm-6 product" key={product.id}>
           
            <Link to={`/product`}>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="product-image"
              />
            </Link>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
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
