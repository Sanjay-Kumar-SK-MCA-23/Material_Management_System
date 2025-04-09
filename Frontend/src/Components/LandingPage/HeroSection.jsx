import React from "react";
import { Container, Button } from "react-bootstrap";
import headerImage from "../../images/intro-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <div className="bg-white bg-opacity-75 backdrop-blur-sm rounded-lg p-5">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Streamline Your Material & Service Operations
          </h2>
          <p className="text-dark text-lg mb-4">
            A complete solution to manage inventory, assign materials, and monitor services with ease.
          </p>
          <Button variant="primary" size="lg" href="/login">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
