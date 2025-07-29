import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import './Contact.css';
const Contact = () => {
  return (
    
      <div className="Contact-section ">
        {/* About Us Button */}
        <button className=" b1"><NavLink
          to="/about"
          
        >
          About Us
        </NavLink> </button>

        {/* WhatsApp Button */}
        
      </div>
   
  );
};

export default Contact;

  // <a
  //         href= // Replace with correct WhatsApp number
  //         target="_blank"
  //         rel="noopener noreferrer"
          
  //       >
         
  //       </a>