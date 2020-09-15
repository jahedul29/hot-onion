import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const { name, price, quantity, photo } = props.food;
  return (
    <div className="item-container d-flex justify-content-around align-items-center">
      <div style={{ width: "25%" }}>
        <img
          className="cartFood-img"
          src={process.env.PUBLIC_URL + photo}
          alt=""
        />
      </div>
      <div style={{ width: "50%" }}>
        <h6>{name}</h6>
        <p>${parseInt(price) * parseInt(quantity)}</p>
      </div>
      <div
        style={{ width: "25%" }}
        className="d-flex align-items-center justify-content-around"
      >
        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        <span style={{ backgroundColor: "white", color: "black" }}>
          {quantity}
        </span>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default CartItem;
