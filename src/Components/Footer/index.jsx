import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3 mt-3">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <h5 className="mb-3">About Us</h5>
            <p>
              We provide trusted electrical products and services including earthing, lighting, fans, water heaters, and more.
            </p>
          </Col>

          <Col md={2}>
            <h5 className="mb-3">Explore</h5>
            <ul className="list-unstyled">
              <li><a href="#fans">Fans</a></li>
              <li><a href="#lights">Lights</a></li>
              <li><a href="#heaters">Water Heaters</a></li>
              <li><a href="#switches">Switches</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#brands">Our Brands</a></li>
              <li><a href="#support">Consumer Care</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="mb-3">Contact Info</h5>
            <p className="mb-1">Phone: +91-1234567890</p>
            <p className="mb-1">Email: support@omelectricals.com</p>
            <p>Location: Lucknow, Uttar Pradesh, India</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} OM Electricals. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
