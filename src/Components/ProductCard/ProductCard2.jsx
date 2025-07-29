// src/Components/ProductCard.js

import React from 'react';
import './ProductCard2.css'; // Optional for styles

function ProductCard2({ image, title, desc }) {
  return (
    <div className="product-card2">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-desc">{desc}</p>
    </div>
  );
}


export default ProductCard2;