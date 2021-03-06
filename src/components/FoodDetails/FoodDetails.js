import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { UserAndCartContext } from "../../App";
import allFoods from "../../fakeData/allFoods";
import "./FoodDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// install Swiper components
import SwiperCore, { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
SwiperCore.use([Navigation, Scrollbar, A11y, Autoplay]);

const FoodDetails = () => {
  const { foodId } = useParams();
  const [count, setCount] = useState(0);
  const { cart, setCart } = useContext(UserAndCartContext);
  let history = useHistory();
  let { from } = { from: { pathname: "/" } };
  const [feedBack, setFeedBack] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  let currentFood;
  if (activeSlide === 0) {
    currentFood = allFoods.find((food) => food.id === parseInt(foodId));
  } else {
    console.log(activeSlide);
    currentFood = allFoods.find((food) => food.id === activeSlide);
  }

  const totalFoods = allFoods.filter(
    (food) => food.category === currentFood.category
  );

  const { name, description, price, photo } = currentFood;

  // Function for increment and decrement food Item
  const handleItemCount = (type) => {
    if (type === "increment") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  // Function to handle add to cart functionality
  /* More Logic can be applied*/
  const handleAddToCart = (foodItem) => {
    const isExist = cart.find((food) => food.id === foodItem.id);
    if (isExist && count === isExist.quantity) {
      setFeedBack("Please check the item in cart");
    } else if (count > 0) {
      const newFoodItem = { ...foodItem };
      newFoodItem.quantity = count;

      const newCart = [...cart, newFoodItem];
      setCart(newCart);

      history.replace(from);
    } else {
      setFeedBack("Please select a valid amount");
    }
  };

  // Feedback of Add to button click
  let feedBackSpan = "";
  if (feedBack.includes("Please")) {
    feedBackSpan = <span style={{ color: "red" }}>{feedBack}</span>;
  }

  return (
    <Container className="my-5">
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
            <button
              onClick={() => handleAddToCart(currentFood)}
              className="addto-cart"
            >
              <FontAwesomeIcon
                className="mr-3"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
              Add
            </button>
            <br />
            <br />
            {feedBackSpan}
          </div>

          {/* Swiper */}
          <br />
          <Swiper
            spaceBetween={1}
            slidesPerView={"auto"}
            wrapperTag="ul"
            navigation
            centeredSlides={true}
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex + 1)}
          >
            {totalFoods.map((food) => (
              <SwiperSlide tag="li" key={food.id}>
                {" "}
                <img src={food.photo} alt="" />{" "}
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col className="text-center" sm={12} md={6}>
          <img className="foodDetails-img" src={photo} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;
