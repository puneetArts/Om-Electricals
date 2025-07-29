import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.css';
import ImageSlider from '../../Components/ImageSlider';
import CategorySection from '../../Components/CategorySection';
import ProductCard from '../../Components/ProductCard';
import GalleryCard from '../../Components/Gallery';
import Contact from '../../Components/Contact/Contact';
// 🌞 Solar Images
import solar1 from '../../assets/images/solar1.jpg';
import solar2 from '../../assets/images/solar2.jpeg';
import solar3 from '../../assets/images/solar3.jpeg';

// 📹 CCTV Images
import cctv1 from '../../assets/images/cctv1.jpeg';
import cctv2 from '../../assets/images/cctv2.jpeg';
import cctv3 from '../../assets/images/cctv3.jpeg';

// 🔋 UPS Images
import ups1 from '../../assets/images/ups1.jpeg';
import ups2 from '../../assets/images/ups2.jpeg';
import ups3 from '../../assets/images/ups3.jpeg';

import earth1 from '../../assets/images/earth1.jpeg';
import earth2 from '../../assets/images/earth2.jpeg';
import earth3 from '../../assets/images/earth3.png';
import { FaWhatsapp } from 'react-icons/fa';


import G1 from '../../assets/images/gallary/G1.jpg';
import G2 from '../../assets/images/gallary/G2.jpg';
import G3 from '../../assets/images/gallary/G3.jpg';
import G4 from '../../assets/images/gallary/G4.jpg';
import G5 from '../../assets/images/gallary/G5.jpg';
import G6 from '../../assets/images/gallary/G6.jpg';
import G7 from '../../assets/images/gallary/G7.jpg';
import G8 from '../../assets/images/gallary/G8.jpg';
import G9 from '../../assets/images/gallary/G9.jpg';
import G10 from '../../assets/images/gallary/G10.jpg';
import G11 from '../../assets/images/gallary/G11.jpg';



function Home() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scrollGallery = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  const arrowStyle = {
    background: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '50%',
    fontSize: '24px',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  return (
    <div>
      <ImageSlider />


     
   
    <Contact /> 

      <CategorySection />

      {/* 🌍 Earthing / Electrode */}
      <div id="earthing-services" style={{ background: '#fff', padding: '40px' }}>
        <h2 className='sectionHead' style={{ fontSize: '24px', marginBottom: '20px' }}>Earthing & Electrodes</h2>
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <ProductCard
            image={earth1}
            title="Copper Earthing Rod"
            desc="High-conductivity copper electrode for safety."
          />
          <ProductCard
            image={earth2}
            title="GI Pipe Electrode"
            desc="Durable and corrosion-resistant grounding rod."
            highlight
          />
          <ProductCard
            image={earth3}
            title="Chemical Earthing Kit"
            desc="Maintenance-free earthing system."
          />
        </div>
      </div>

      {/* 🌞 Solar Panels */}
      <div id="solar-panels" style={{ background: '#fff', padding: '40px' }}>
        <h2 className='sectionHead' style={{ fontSize: '24px', marginBottom: '20px' }}>Solar Panels</h2>
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <ProductCard image={solar1} title="6-Panel Setup" desc="Efficient solar solution for rooftops." />
          <ProductCard
            image={solar2}
            title="Portable Solar Kit"
            desc="Compact and easy-to-install units."
            highlight
          />
          <ProductCard image={solar3} title="Industrial Solar Grid" desc="High-output system for businesses." />
        </div>
      </div>

      {/* 📹 CCTV Cameras */}
      <div  id="cctv-camera" style={{ background: '#fff', padding: '40px' }}>
        <h2 className='sectionHead' style={{ fontSize: '24px', marginBottom: '20px' }}>CCTV Cameras</h2>
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <ProductCard image={cctv1} title="360° Dome Camera" desc="Full HD rotating surveillance camera." />
          <ProductCard
            image={cctv2}
            title="Bullet Camera"
            desc="Outdoor camera with night vision."
            highlight
          />
          <ProductCard image={cctv3} title="Wireless IP Camera" desc="Easy to install, remote access enabled." />
        </div>
      </div>

      {/* 🔋 UPS Systems */}
      <div id="ups" style={{ background: '#fff', padding: '40px' }}>
        <h2 className='sectionHead' style={{ fontSize: '24px', marginBottom: '20px' }}>UPS Systems</h2>
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <ProductCard image={ups1} title="Home UPS" desc="Reliable backup for residential needs." />
          <ProductCard
            image={ups2}
            title="Industrial UPS"
            desc="Heavy-duty solution for factories."
            highlight
          />
          <ProductCard image={ups3} title="Online UPS" desc="Continuous power with double conversion." />
        </div>
      </div>

      {/* 📸 Gallery Section */}
      <div id="gallery" style={{ background: '#fff', padding: '40px', minHeight: '600px' }}>
        <h2 className='sectionHead' style={{ fontSize: '24px', marginBottom: '20px' }}>Gallery</h2>

        <div style={{ position: 'relative', width: '100%' }}>
          {/* Left Scroll Button */}
          <button
            onClick={() => scrollGallery(-1000)}
            style={{
              ...arrowStyle,
              position: 'absolute',
              left: '-10px',
              top: '40%',
              zIndex: 2,
            }}
          >
            ‹
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            style={{
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              padding: '10px 20px',
            }}
          >
            {/* Image Cards Row */}
            <div
              style={{
                display: 'flex',
                gap: '40px',
                padding: '10px 0',
                justifyContent: 'flex-start',
                flexWrap: 'nowrap',
              }}
            >
              <GalleryCard image={G1} />
              <GalleryCard image={G6} />
              <GalleryCard image={G8} />
              <GalleryCard image={G7} />
              <GalleryCard image={G2} />
              <GalleryCard image={G3} />
              <GalleryCard image={G4} />
              <GalleryCard image={G5} />
              <GalleryCard image={G9} />
              <GalleryCard image={G10} />
              <GalleryCard image={G11} />

              {/* <GalleryCard image={solar3} />
              <GalleryCard image={earth2} />
              <GalleryCard image={earth3} />
              <GalleryCard image={cctv1} />
              <GalleryCard image={solar1} />
              <GalleryCard image={earth3} />
              <GalleryCard image={cctv2} />
              <GalleryCard image={solar2} /> */}
            </div>
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scrollGallery(1000)}
            style={{
              ...arrowStyle,
              position: 'absolute',
              right: '-10px',
              top: '40%',
              zIndex: 2,
            }}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
