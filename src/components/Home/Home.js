import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import FoodItems from "../FoodItems/FoodItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodItems></FoodItems>
      <Features />
    </div>
  );
};

export default Home;
