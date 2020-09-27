import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col md={6} sm={12}>
          <img
            className="footer-img"
            src="https://i.imgur.com/0yArVuo.png"
            alt=""
          />
        </Col>
        <Col md={6} sm={12}>
          <Row>
            <Col md={6}>
              <ul style={{ listStyleType: "none", color: "white" }}>
                <li>About Online Food</li>
                <li>Read our blog</li>
                <li>Sign up to deliver</li>
                <li>Add your restaurant</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul style={{ listStyleType: "none", color: "white" }}>
                <li>Get Help</li>
                <li>Read FAQs</li>
                <li>View all cities</li>
                <li>Restaurant near me</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
