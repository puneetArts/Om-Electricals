import React, { useState } from "react";
import { Container, Row, Col, Nav, Navbar, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaMicrophone, FaUser, FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/images/OM.jpg';

function Header() {
  // Control the navbar collapse state on small screens
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="shadow-sm bg-white">
      <Navbar expand="md" expanded={expanded} className="py-2 px-4">
        <Container fluid>
          {/* Logo as Link */}
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img src={logo} alt="logo" height="40" style={{ cursor: "pointer" }} />
          </Navbar.Brand>

          {/* Navbar Toggle Button for small screens */}
          <Navbar.Toggle 
            aria-controls="main-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")} 
          />

          {/* Navbar Collapse */}
          <Navbar.Collapse id="main-navbar-nav">
            {/* Search Box */}
            <Form className="d-flex mx-auto my-2 my-md-0" style={{ maxWidth: '500px', flexGrow: 1 }}>
              <InputGroup className="search-bar rounded-pill w-100">
                <InputGroup.Text className="bg-white border-0">
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search for a product"
                  className="border-0 shadow-none"
                />
                <InputGroup.Text className="bg-white border-0">
                  <FaMicrophone />
                </InputGroup.Text>
              </InputGroup>
            </Form>

            {/* Navigation Links */}
            <Nav className="ms-auto align-items-center">
               <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link>
              
             
              
              <Nav.Link as={Link} to="/consumer-care" onClick={() => setExpanded(false)}>Consumer Care</Nav.Link>
             
            </Nav>

            {/* Icons */}
            <div className="d-flex ms-3 mt-3 mt-md-0 gap-2">
              {/* <button className="b4">
            <NavLink
              to="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaShoppingCart size={22} />
              
            </NavLink>
          </button> */}
               <button className="b3">
            <NavLink
              to="https://wa.me/919936460308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={22} />
              
            </NavLink>
          </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
