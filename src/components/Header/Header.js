import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Badge, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserAndCartContext } from "../../App";
import { handleSignOut } from "../Login/loginManager";
import "./Header.css";

const Header = () => {
  const { cart, loggedInUser, setLoggedInUser } = useContext(
    UserAndCartContext
  );
  let history = useHistory();

  const handleLoggingButton = () => {
    if (loggedInUser.email) {
      handleSignOut().then((res) => {
        history.replace({ pathname: "/" });
        console.log("Signed Out");
        setLoggedInUser({});
      });
    } else {
      history.push({ pathname: "/login" });
    }
  };

  return (
    <Navbar>
      <Navbar.Brand className="mr-auto w-25">
        <Link to="/">
          <img
            className="logo w-50"
            src="https://i.imgur.com/XJbs0Lf.png"
            alt=""
          />
        </Link>
      </Navbar.Brand>
      <Nav className="nav">
        <Nav.Link>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          <Badge variant="primary">{cart.length}</Badge>
        </Nav.Link>
        <Nav.Link onClick={handleLoggingButton}>
          {loggedInUser.email ? "Log Out" : "Login"}{" "}
        </Nav.Link>
        <Nav.Link>Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
