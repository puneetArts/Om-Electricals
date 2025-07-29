import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';

const images = [banner1, banner2, banner3, banner4];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt="Slide" className="slider-image" />
       <button className="nav-button left" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="nav-button right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
