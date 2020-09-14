import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleFood.css";

const SingleFood = (props) => {
  const { name, description, price, category, photo, id } = props.food;
  console.log(photo);

  return (
    <Col className="text-center" sm={12} md={4}>
      <Link className="singlefood-link" to={`/food/${id}`}>
        <div className="single-food">
          <img
            className="foodItem-img"
            src={process.env.PUBLIC_URL + photo}
            alt=""
          />
          <h6>{name}</h6>
          <p>{description}</p>
          <h4>${price}</h4>
        </div>
      </Link>
    </Col>
  );
};

export default SingleFood;
