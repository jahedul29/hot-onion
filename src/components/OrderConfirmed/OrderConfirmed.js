import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserAndCartContext } from "../../App";
import "./OrderConfirmed.css";

const OrderConfirmed = () => {
  // Calculation estimated delivery time
  const currentTimeObj = new Date();
  currentTimeObj.setHours(currentTimeObj.getHours() + 3);
  const currentTime = currentTimeObj.toLocaleTimeString();

  // Reteiving logged in user
  const { loggedInUser } = useContext(UserAndCartContext);

  return (
    <Container className="my-5">
      <Row>
        <Col sm={12} md={8}>
          <div className="d-flex flex-column align-items-center">
            <h3>You order placed successfully</h3>
            <img
              src="https://www.sfu.ca/~lccheng/Project%202%20Final%20Website%20Complete/images/checkmark.png"
              alt=""
            />
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="confirmed-details">
            <div>
              <img
                style={{
                  width: "100px",
                  marginBottom: "10px",
                  marginLeft: "30px",
                }}
                src="https://i.imgur.com/ls2xrPS.png"
                alt=""
              />
            </div>
            <div className="white-canvas">
              <ul className="location-list">
                <li>
                  <div style={{ display: "inline-block" }}>
                    <span>Your Location</span>
                    <p>104 Road</p>
                  </div>
                </li>
                <li>
                  <div style={{ display: "inline-block" }}>
                    <span>Shop Location</span>
                    <p>104 Road</p>
                  </div>
                </li>
              </ul>
            </div>
            <br />
            <div>
              <h3>{currentTime}</h3>
              <p>Estimated delivery time</p>
            </div>
            <div className="white-canvas pt-2">
              <img
                style={{
                  width: "60px",
                  float: "left",
                  marginRight: "25px",
                }}
                src="https://i.imgur.com/EyTyy29.png"
                alt=""
              />
              <div
                style={{
                  display: "inline-block",
                }}
              >
                <h5>Jahed</h5>
                <p>Thanks for purchasing.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderConfirmed;
