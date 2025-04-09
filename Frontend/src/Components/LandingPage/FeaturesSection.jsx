import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Inventory2, Assignment, SupervisorAccount } from "@mui/icons-material";

const features = [
  {
    icon: <Inventory2 fontSize="large" />,
    title: "Inventory Tracking",
    desc: "Monitor and update stock levels in real-time."
  },
  {
    icon: <Assignment fontSize="large" />,
    title: "Service Requests",
    desc: "Manage and assign service tasks efficiently."
  },
  {
    icon: <SupervisorAccount fontSize="large" />,
    title: "Role-Based Access",
    desc: "Separate dashboards for Admins, Employees, and Servicers."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-5">
      <Container data-aos="fade-up">
        <h3 className="text-center text-primary fw-bold mb-5 display-6" data-aos="fade-down">
          Key Features
        </h3>
        <Row className="g-4">
          {features.map((feature, idx) => (
            <Col
              md={4}
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="text-center p-4 border rounded shadow-sm h-100 hover:shadow-md transition">
                <div className="text-primary mb-3">{feature.icon}</div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
