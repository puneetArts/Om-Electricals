// src/Components/ProductCard.js

import React from 'react';
import './ProductCard.css'; // Optional for styles

function ProductCard({ image, title, desc,highlight  }) {
  return (
        <div className={`product-card ${highlight ? 'highlight-card' : ''}`}>

      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-desc">{desc}</p>
    </div>
  );
}


export default ProductCard;
