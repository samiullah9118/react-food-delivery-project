import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section7 = () => {
  return (
    <>
      <section id="contact" className="contact_section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8} className="text-center">
              <h4>We Guarantee</h4>
              <h2>30 Minutes Delivery!</h2>
              <p>
                We guarantee 30-minute delivery with fresh meals, reliable
                drivers, and rapid service so every order always arrives hot,
                fast, and satisfying.
              </p>
              <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
                Call: 999-888-7777
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section7;
