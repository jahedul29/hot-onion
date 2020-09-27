import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import allFeatures from "../../fakeData/allFeatures";
import SingleFeature from "../SingleFeature/SingleFeature";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const loadedFeatures = allFeatures;
    setFeatures(loadedFeatures);
  }, []);

  return (
    <Container className="features">
      <div style={{ width: "50%" }}>
        <h3>Our landmarks</h3>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          qui iure laborum blanditiis, eaque cumque aut facilis officia optio
          similique vero nisi ullam repellat facere.
        </p>
      </div>
      <Row>
        {features.map((feature) => (
          <SingleFeature key={feature.id} feature={feature}></SingleFeature>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
