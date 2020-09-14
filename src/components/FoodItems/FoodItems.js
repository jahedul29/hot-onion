import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./FoodItems.css";
import allFoods from "../../fakeData/allFoods";
import SingleFood from "../SingleFood/SingleFood";
import { Link } from "react-router-dom";

const FoodItems = () => {
  const [currentItems, setCurrentItems] = useState([]);

  if (currentItems.length === 0) {
    const defaultCurrentItems = allFoods.filter(
      (food) => food.category === "lunch"
    );
    setCurrentItems(defaultCurrentItems);
  }

  const handelCurrentItemClick = (category) => {
    const selectedCurrentItems = allFoods.filter(
      (food) => food.category === category
    );
    setCurrentItems(selectedCurrentItems);
  };

  return (
    <section classNamem="foodItems-section">
      <div className="types">
        <Link onClick={() => handelCurrentItemClick("breakfast")}>
          Breakfast
        </Link>
        <Link onClick={() => handelCurrentItemClick("lunch")}>Lunch</Link>
        <Link onClick={() => handelCurrentItemClick("dinner")}>Dinner</Link>
      </div>
      <Container>
        <Row>
          {currentItems.map((food) => (
            <SingleFood key={food.id} food={food}></SingleFood>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FoodItems;
