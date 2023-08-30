import React, { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
import CartContext from "../components/store/cart-context";
import ProductReviews from "../components/Products/ProductReviews";
import productImages from "../components/Products/ProductImages";
import ImageModal from "./imageModal/ImageModal";
import "./ProductPage.css";

const ProductPage = () => {
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext);

  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalShow(true);
  };

  const handleAddToCart = (variation) => {
    const existingCartItem = cartItems.find((item) => item.id === variation.id);

    if (existingCartItem) {
      updateQuantity(existingCartItem.id, existingCartItem.quantity + 1);
    } else {
      addToCart({ ...variation, quantity: 1});
    }
  };

  return (
    <Container className="product-page text-center">
    {productImages.map((product) => (
      <div key={product.title} className="product-container">
        <h2 className="product-title">{product.title}</h2>
        <div className="variations-section">
          {product.variations.map((variation) => (
            <div key={variation.id} className="variation-card">
              <img
                src={variation.imageUrl}
                alt={`${product.title} ${variation.id}`}
                className="product-image-new"
                onClick={() => handleImageClick(variation.imageUrl)}
              />
              <p className="variation-title">{variation.title}</p>
              <ProductReviews reviews={variation.reviews} />
              <Button
                variant="primary"
                className="add-to-cart-button"
                onClick={() => handleAddToCart(variation)}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    ))}
       <ImageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageUrl={selectedImage}
      />
  </Container>
);
};


export default ProductPage;
