// src/Components/ExploreRange.js
import React from "react";
import "./ExploreRange.css";
import { FaFan, FaLightbulb, FaShower, FaBolt, FaTools } from "react-icons/fa";

const categories = [
  { id: "fans", label: "Fans", icon: <FaFan /> },
  { id: "lights", label: "Lights", icon: <FaLightbulb /> },
  { id: "heaters", label: "Water Heaters", icon: <FaShower /> },
  { id: "wires", label: "Wires", icon: <FaBolt /> },
  { id: "tools", label: "Tools", icon: <FaTools /> },
];

const ExploreRange = () => {
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore Our Range</h2>
      <div className="icon-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="icon-item" onClick={() => handleClick(cat.id)}>
            <div className="icon">{cat.icon}</div>
            <p>{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreRange;
