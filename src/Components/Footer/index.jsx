import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./footer.css";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll or redirect depending on current page
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // Redirect to homepage first with hash
      navigate(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer bg-dark text-light pt-5 pb-3 mt-3">
      <Container>
        <Row className="mb-4">
          {/* About Us Section */}
          <Col md={4}>
            <h5 className="mb-3">About Us</h5>
            <p>
              We provide trusted electrical products and services including
              earthing, lighting, solar, CCTV, and UPS systems. 
              Quality and reliability are at the heart of everything we do.
            </p>
          </Col>

          {/* Explore Section */}
          <Col md={2}>
            <h5 className="mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li>
                <button
                  onClick={() => handleNavClick("earthing-services")}
                  className="footer-btn-link"
                >
                  Earthing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("solar-panels")}
                  className="footer-btn-link"
                >
                  Solar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("cctv-camera")}
                  className="footer-btn-link"
                >
                  CCTV
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("ups")}
                  className="footer-btn-link"
                >
                  UPS
                </button>
              </li>
            </ul>
          </Col>

          {/* Quick Links Section */}
          <Col md={3}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/#gallery" className="footer-link">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/consumer-care" className="footer-link">
                  Consumer Care
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5 className="mb-3">Contact Info</h5>
            <p className="mb-1">📞 Phone: +91-9936460308</p>
            <p className="mb-1">✉️ Email: support@omelectricals.com</p>
            <p>📍 Location: Lucknow, Uttar Pradesh, India</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} OM Electricals. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
