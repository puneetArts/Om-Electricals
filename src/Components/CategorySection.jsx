import React from 'react';
import './CategorySection.css';
import electImg from '../assets/images/elect.png';
import solarImg from '../assets/images/solar.png';
import cctvImg from '../assets/images/cctv.png';
import upsImg from '../assets/images/ups.png';



const categories = [
  { id: 'earthing-services', image: electImg },
  { id: 'solar-panels', image: solarImg},
  { id: 'cctv-camera', image: cctvImg },
  { id: 'ups', image: upsImg},
];



const CategorySection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="category-section">
      <h4 style={{ color:'white'}}>Explore </h4>
      <h1 style={{ color:'#e64920'}}><b>Our Range</b></h1>
      <div className="category-icons">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="category-btn"
            onClick={() => scrollToSection(cat.id)}
          >
            <div className="icon">
              <img src={cat.image} alt={cat.label} />
            </div>
            <div className="label">{cat.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
