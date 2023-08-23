import React from 'react';
import './ProductList.css';

const products = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

    const ProductList = () => {
        return (
          <div className="container">
            <div className="row product-list-container">
              {products.map((product, index) => (
                <div className="col-md-4 col-sm-6 product" key={index}>
                  <img src={product.imageUrl} alt={product.title} />
                  <h2>{product.title}</h2>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }

export default ProductList;
    

    
    
    