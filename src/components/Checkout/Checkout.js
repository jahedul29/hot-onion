import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Checkout = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <h2>This is checkout form</h2>
        </Col>
        <Col sm={12} md={4}>
          <h2>This is cart</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
