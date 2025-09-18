import React from "react";
import './AboutUs.css';

import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import founder from '../../assets/images/DrAjeetSenSingh.png';

function About() {
  return (
    <div className="about-us-page">
      <Container className="py-5">

<section className="about-us-header text-center mb-5">
  <h1 className="about-us-title">Welcome to Om Electricals</h1>
  <p className="about-us-subtitle">
    Your trusted partner for reliable and efficient electrical solutions, from earthing and lighting to solar and UPS systems.
  </p>
</section>

        <section className="mission-vision-section mb-5">
          <Row className="row g-5">
            {/* Added info-card class */}
            <Col md={6} className="info-card">
              <h2 className="section-title">Our Mission</h2>
              <p>
                To deliver high-quality electrical products with exceptional service that empowers our customers to build safe and efficient environments.
              </p>
            </Col>
             {/* Added info-card class */}
            <Col md={6} className="info-card">
              <h2 className="section-title">Our Vision</h2>
              <p>
                To be the foremost electrical solutions provider recognized for innovation, trust, and community support.
              </p>
            </Col>
          </Row>
        </section>

        {/* --- Founder Section --- */}
        <section className="founder-section mb-5">
          <Row className="align-items-center g-4">
            <Col md={4} className="text-center">
              <Image
                src={founder}
                alt="Dr. Ajeet Sen Singh, Founder"
                className="founder-image"
                fluid
              />
            </Col>
            <Col md={8}>
                <h2 className="section-title">Meet Our Founder</h2>
                <p className="founder-quote">
                    "With years of experience and a deep commitment to quality, we lead with dedication to serve you better. Our goal is to ensure every client receives the safest and most reliable electrical solutions available."
                </p>
                <p className="founder-name"><strong>- Dr. Ajeet Sen Singh</strong></p>
            </Col>
          </Row>
        </section>

        {/* --- Contact / CTA Section --- */}
        <section className="text-center mt-5">
           <h2 className="section-title">Get in Touch</h2>
           <p>Have a question or need a consultation? We're here to help.</p>
          <NavLink
            to="https://wa.me/919936460308"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            <span>Contact Us on WhatsApp</span>
          </NavLink>
        </section>

      </Container>
    </div>
  );
}

export default About;