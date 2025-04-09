import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    title: "Admin Panel",
    description: "Control system settings, manage users, and monitor all operations.",
    img: "/admin-module.svg",
    link: "/admin"
  },
  {
    title: "Employee Dashboard",
    description: "Track assigned materials and request necessary items.",
    img: "/employee-module.svg",
    link: "/employee"
  },
  {
    title: "Servicer Access",
    description: "Handle service tasks, update status, and maintain communication.",
    img: "/servicer-module.svg",
    link: "/servicer"
  }
];

const ModulesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="modules" className="py-5 bg-light">
      <Container>
        <h3 className="text-center text-primary fw-bold mb-5 display-6" data-aos="fade-up">System Modules</h3>
        <Row className="g-4">
          {modules.map((mod, index) => (
            <Col md={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card
                className="h-100 shadow-sm border-0 text-center hover-shadow cursor-pointer"
                onClick={() => navigate(mod.link)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Img
                  variant="top"
                  src={mod.img}
                  style={{ height: "180px", objectFit: "contain", padding: "20px" }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{mod.title}</Card.Title>
                  <Card.Text className="text-muted">{mod.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ModulesSection;
