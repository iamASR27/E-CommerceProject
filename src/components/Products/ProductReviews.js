import React from 'react';

const ProductReviews = ({ reviews }) => {
  return (
    <div className="product-reviews">
     
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.text}</p>
          <p>Rating: {review.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
