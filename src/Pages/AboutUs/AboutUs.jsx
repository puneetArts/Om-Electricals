import React from "react";
import './AboutUs.css';

import { Container, Row, Col, Card, Image } from "react-bootstrap";
import founder from '../../assets/images/DrAjeetSenSingh.png';
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <Container className="my-5" style={{ fontFamily: '"Lato", sans-serif' }}>
      
      {/* Intro Section */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm p-4 rounded border-0 bg-light">
            <h1 className="text-primary fw-bold mb-3">Welcome to Om Electricals Sales and Services</h1>
            <p>
              At OmElectricals, we provide trusted electrical solutions ranging from earthing, lighting, Solar panels, to UPS. Our dedication to quality and customer satisfaction has made us a reliable partner for households and businesses alike.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Mission & Vision */}
      <Row className="mb-5 g-4">
        <Col md={6}>
          <Card className="shadow p-4 rounded border-0">
            <h3 className="text-primary mb-3">Our Mission</h3>
            <p>
              To deliver high-quality electrical products with exceptional service that empowers our customers to build safe and efficient environments.
            </p>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow p-4 rounded border-0">
            <h3 className="text-primary mb-3">Our Vision</h3>
            <p>
              To be the foremost electrical solutions provider recognized for innovation, trust, and community support.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Founder Section */}
      <Row className="align-items-center g-4">
        <Col md={4} className="text-center">
          <Image 
            src={founder} 
            rounded
            fluid 
            alt="Founder" 
            style={{ maxWidth: '250px', boxShadow: '0 0 15px rgba(0,0,0,0.15)' }}
          />
        </Col>
        <Col md={8}>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
            Leading with experience and dedication to serve you better.
          </p>
        </Col>
      </Row>

      {/* WhatsApp Button */}
      <Row className="mt-4">
        <Col className="button-wrapper">
          <button className="b2">
            <NavLink
              to="https://wa.me/919936460308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={22} />
              WhatsApp
            </NavLink>
          </button>
         
        </Col>
      </Row>

      {/* Closing Section */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm p-4 rounded border-0 bg-light text-center">
            <h4 className="text-primary mb-3">Thank you for trusting OmElectricals</h4>
            <p>
              We look forward to lighting your way to a brighter and safer future.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
