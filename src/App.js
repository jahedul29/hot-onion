import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Notfound from "./components/Notfound/Notfound";
import OrderConfirmed from "./components/OrderConfirmed/OrderConfirmed";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserAndCartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    photo: "",
  });

  return (
    <UserAndCartContext.Provider
      value={{ cart, setCart, loggedInUser, setLoggedInUser }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/food/:foodId">
            <FoodDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>

          <PrivateRoute path="/confirmed">
            <OrderConfirmed />
          </PrivateRoute>

          <Route path="*">
            <Notfound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </UserAndCartContext.Provider>
  );
}

export default App;
