import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./FoodItems.css";
import allFoods from "../../fakeData/allFoods";
import SingleFood from "../SingleFood/SingleFood";
import { Link } from "react-router-dom";
import { UserAndCartContext } from "../../App";

const FoodItems = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const { cart } = useContext(UserAndCartContext);
  const [loading, setLoading] = useState(false);

  if (currentItems.length === 0) {
    const defaultCurrentItems = allFoods.filter(
      (food) => food.category === "lunch"
    );
    setCurrentItems(defaultCurrentItems);
  }

  //! Need To use UseEffect
  const handelCurrentItemClick = (category) => {
    const selectedCurrentItems = allFoods.filter(
      (food) => food.category === category
    );
    setCurrentItems(selectedCurrentItems);
  };

  //visibility toggling checkout button visibility
  const disabled = cart.length ? false : true;

  return (
    <section className="foodItems-section">
      <div className="types">
        <Link onClick={() => handelCurrentItemClick("breakfast")}>
          Breakfast
        </Link>
        <Link
          className="active"
          id="lunchLink"
          onClick={() => handelCurrentItemClick("lunch")}
        >
          Lunch
        </Link>
        <Link onClick={() => handelCurrentItemClick("dinner")}>Dinner</Link>
      </div>
      <Container>
        <Row>
          {currentItems.map((food) => (
            <SingleFood key={food.id} food={food}></SingleFood>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Link to="/checkout">
            <button
              onClick={() => console.log("CheckOut clicked")}
              disabled={disabled}
              className="checkout-button disabled"
            >
              Checkout Your Food
            </button>
          </Link>
        </div>
        <br />
        <br />
        <br />
      </Container>
    </section>
  );
};

export default FoodItems;
