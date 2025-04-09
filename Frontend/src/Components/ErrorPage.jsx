import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const styles = {
    page404: {
      padding: "40px 0",
      background: "#fff",
      fontFamily: "'Arvo', serif",
    },
    fourZeroFourBg: {
      backgroundImage:
        "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
      height: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    h1: {
      fontSize: "80px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    contentBox404: {
      marginTop: "-30px",
    },
    link404: {
      textDecoration: "none",
    }
  };

  return (
    <section style={styles.page404}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <div style={styles.fourZeroFourBg}>
              <h1 style={styles.h1}>404</h1>
            </div>

            <div style={styles.contentBox404}>
              <h3 style={{ fontSize: "28px", fontWeight: "600" }}>Looks like you're lost</h3>
              <p className="text-muted">The page you are looking for is not available!</p>
              <Link to="/" style={styles.link404}>
                <Button variant="success" size="lg">
                  Go to Home
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ErrorPage;
