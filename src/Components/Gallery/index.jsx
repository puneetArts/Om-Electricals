// src/Components/GalleryCard.js

import React from 'react';
import './GalleryCard.css';

function GalleryCard({ image, highlight }) {
  return (
    <div className={`gallery-card ${highlight ? 'highlight-card' : ''}`}>
      <img src={image} alt="gallery item" className="gallery-image" />
    </div>
  );
}

export default GalleryCard;
