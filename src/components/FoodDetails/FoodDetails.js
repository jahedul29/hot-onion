import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import allFoods from "../../fakeData/allFoods";
import "./FoodDetails.css";

const FoodDetails = () => {
  const { foodId } = useParams();
  const [count, setCount] = useState(0);

  const currentFood = allFoods.find((food) => food.id === parseInt(foodId));
  console.log(foodId);

  const { name, description, price, photo } = currentFood;

  // Function for increment and decrement food Item
  const handleItemCount = (type) => {
    if (type === "increment") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <Container>
      <Row>
        <Col
          className="d-flex flex-column justify-content-center"
          sm={12}
          md={6}
        >
          <div>
            <h1>{name}</h1>
            <br />
            <p>{description}</p>
            <div className="d-flex align-items-center">
              <h3>${price}</h3>
              <div className="cart-buttons d-flex justify-content-around align-items-center">
                <FontAwesomeIcon
                  onClick={() => handleItemCount("decrement")}
                  icon={faMinus}
                ></FontAwesomeIcon>
                <span>{count}</span>
                <FontAwesomeIcon
                  onClick={() => handleItemCount("increment")}
                  style={{ color: "rgb(255, 0, 76)" }}
                  icon={faPlus}
                ></FontAwesomeIcon>
              </div>
            </div>
            <br />
            <button className="addto-cart">
              <FontAwesomeIcon
                className="mr-3"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
              Add
            </button>
          </div>
        </Col>
        <Col className="text-center" sm={12} md={6}>
          <img
            className="foodDetails-img"
            src={process.env.PUBLIC_URL + photo}
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;
