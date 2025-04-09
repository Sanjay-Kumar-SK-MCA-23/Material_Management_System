import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark border-top py-4 mt-5">
      <Container className="text-center">
        <p className="text-secondary mb-1">
          &copy; {new Date().getFullYear()} <strong>MaterialSys</strong>. All rights reserved.
        </p>
        <p className="text-primary">Email: <a href="mailto:support@materialsys.com">support@materialsys.com</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
