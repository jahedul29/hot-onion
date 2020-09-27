import React from "react";
import { Col } from "react-bootstrap";
import "./SingleFeature.css";

const SingleFeature = (props) => {
  const feature = props.feature;
  const { id, title, description, photo, icon } = feature;

  return (
    <Col md={4} sm={12}>
      <div>
        <img src={photo} className="w-100 pb-4" alt="" />
        <div style={{ width: "95%", margin: "auto" }}>
          <div
            style={{
              display: "inline-block",
              width: "15%",
              float: "left",
              marginRight: "5px",
            }}
          >
            <img className="feature-icon" src={icon} alt="" />
          </div>
          <div style={{ display: "inline-block", width: "80%" }}>
            <h6 className="pb-2">{title}</h6>
            <p className="text-justify" style={{ lineHeight: "20px" }}>
              {description}
            </p>
            <p style={{ color: "#0c8b28", fontWeight: "bold" }}>
              See more&nbsp; <span></span>{" "}
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleFeature;
