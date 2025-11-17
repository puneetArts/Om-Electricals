import React from "react";
import "./ConsumerCare.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ConsumerCare() {
  return (
    <div className="consumer-care-page">
      <Container className="py-5">

        {/* Header Section */}
        <section className="consumer-header text-center mb-5">
          <h1 className="consumer-title">Consumer Care</h1>
          <p className="consumer-subtitle">
            At Om Electricals, we’re committed to providing you with exceptional support, quick assistance, and lasting satisfaction.
          </p>
        </section>

        {/* Support Section */}
        <section className="support-section mb-5">
          <Row className="g-5">
            <Col md={6} className="info-card">
              <h2 className="section-title">Customer Support</h2>
              <p>
                Our dedicated support team is here to resolve any queries or technical issues you may face with our products and services.
              </p>
              <ul className="custom-list">
                <li>24x7 Assistance</li>
                <li>Installation & Setup Guidance</li>
                <li>Product Troubleshooting</li>
              </ul>
            </Col>
            <Col md={6} className="info-card">
              <h2 className="section-title">Warranty & Returns</h2>
              <p>
                We stand behind the quality of our products. For warranty claims, replacements, or returns, please reach out with your invoice or purchase details.
              </p>
              <ul className="custom-list">
                <li>Hassle-free Claim Process</li>
                <li>Original Parts Replacement</li>
                <li>Quick Turnaround</li>
              </ul>
            </Col>
          </Row>
        </section>

        {/* Service Centers Section */}
        <section className="service-centers-section mb-5 text-center">
          <h2 className="section-title">Our Service Centers</h2>
          <p>
            Visit any of our authorized service centers for repairs, maintenance, or expert consultation.
          </p>
          <Row className="justify-content-center mt-4">
            <Col md={4} className="info-card">
              <h5>Jankipuram</h5>
              <p>Plot no. 2 Shiv Vihar Colony, Jankipuram, Lucknow, Uttar Pradesh, 226021</p>
            </Col>
            <Col md={4} className="info-card">
              <h5>Rajauli</h5>
              <p>Rajauli, Lucknow Uttar Pradesh, 226026</p>
            </Col>
          </Row>
        </section>

        {/* Contact Section */}
        <section className="text-center contact-section mt-5">
          <h2 className="section-title">Need Assistance?</h2>
          <p>We’re always happy to help. Choose your preferred way to reach us:</p>
          <div className="contact-options">
            <NavLink
              to="https://wa.me/919936460308"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp /> <span>WhatsApp Support</span>
            </NavLink>

            <a href="tel:+919936460308" className="phone-btn">
              <FaPhoneAlt /> <span>Call Us</span>
            </a>

            
          </div>
        </section>

      </Container>
    </div>
  );
}

export default ConsumerCare;
