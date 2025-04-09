import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section by ID
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for route change
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Material Management System (MMS)
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleScroll("features")}>Features</Nav.Link>
            <Nav.Link onClick={() => handleScroll("modules")}>Modules</Nav.Link>
            <Nav.Link onClick={() => handleScroll("contact")}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-primary" size="sm">
                Login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
