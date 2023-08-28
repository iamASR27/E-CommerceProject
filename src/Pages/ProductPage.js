import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import CartContext from "../components/store/cart-context";
import ProductReviews from "../components/Products/ProductReviews";
import productImages from "../components/Products/ProductImages";
import "./ProductPage.css";

const ProductPage = () => {
//   const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

//   const productDetails = productImages[0];

  const handleAddToCart = (product) => {
   
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    
  };

 

  return (
    <Container className="product-page text-center">
    {productImages.map((product) => (
      <div key={product.id}>
        <h2 className="product-title">{product.title}</h2>
        <img
          src={product.imageUrl}
          alt={`${product.title} ${product.id}`}
          className="product-image"
        />
        <p className="product-price">${product.price}</p>
        <Button variant="primary" onClick={() => handleAddToCart(product)}>
          Add to Cart
        </Button>
        <ProductReviews reviews={product.reviews} />
      </div>
    ))}
  </Container>
  );
};

export default ProductPage;
