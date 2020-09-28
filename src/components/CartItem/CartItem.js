import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { UserAndCartContext } from "../../App";
import "./CartItem.css";

const CartItem = (props) => {
  const { cart, setCart } = useContext(UserAndCartContext);
  const { id, name, price, quantity, photo } = props.food;
  const [count, setCount] = useState(quantity);

  // Function for increment and decrement food Item
  const handleItemCount = (type) => {
    if (type === "increment") {
      setCount(count + 1);
      updateCartProductQuantity(count + 1, id);
    } else {
      setCount(count - 1);
      updateCartProductQuantity(count - 1, id);
    }
  };

  // function for updating Cart Product Quantity
  const updateCartProductQuantity = (changedQuantity, id) => {
    const newCart = [...cart];
    const indexOfProduct = newCart.findIndex((pd) => pd.id === id);
    newCart[indexOfProduct].quantity = changedQuantity;
    setCart(newCart);
  };

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
        <FontAwesomeIcon
          onClick={() => handleItemCount("")}
          icon={faMinus}
        ></FontAwesomeIcon>
        <span style={{ backgroundColor: "white", color: "black" }}>
          {count}
        </span>
        <FontAwesomeIcon
          onClick={() => handleItemCount("increment")}
          icon={faPlus}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default CartItem;
