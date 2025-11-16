import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import {
  FaSearch,
  FaMicrophone,
  FaUser,
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/OM.jpg";
import { RiChatAiFill } from "react-icons/ri";

function Header() {
  // Control the navbar collapse state on small screens
  const [expanded, setExpanded] = useState(false);

  return (
    <header style={{ background: "#122936" }}>
      <Navbar expand="md" expanded={expanded} className="py-2 px-4">
        <Container fluid>
          {/* Logo as Link */}
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img
              src={logo}
              alt="logo"
              height="40"
              style={{ cursor: "pointer" }}
            />
          </Navbar.Brand>

          {/* Navbar Toggle Button for small screens */}
          <Navbar.Toggle
            aria-controls="main-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />

          {/* Navbar Collapse */}
          <Navbar.Collapse id="main-navbar-nav">
            {/* Assistant */}
            <div
              className="d-flex mx-auto my-2 my-md-0"
              style={{ maxWidth: "300px", flexGrow: 1 }}
            >
              <div className="assist-bar rounded-pill w-100 d-flex align-items-center justify-content-center gap-2">
                <Nav.Link
                  as={Link}
                  to="/chatbot"
                  onClick={() => setExpanded(false)}
                  className="d-flex align-items-center gap-2"
                >
                  Have a question? Ask our assistant! <RiChatAiFill size={30} />
                </Nav.Link>
              </div>
            </div>

            {/* Navigation Links */}
            <Nav className="ms-auto align-items-center">
  <Nav.Link
    as={Link}
    to="/about"
    onClick={() => setExpanded(false)}
    style={{ color: "white" }}   
  >
    About Us
  </Nav.Link>

  <Nav.Link
    as={Link}
    to="/consumer-care"
    onClick={() => setExpanded(false)}
    style={{ color: "white" }}   
  >
    Consumer Care
  </Nav.Link>
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
