import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand className="mr-auto w-25">
        <img
          className="logo w-50"
          src={`${process.env.PUBLIC_URL}/images/logo/logo2.png`}
          alt=""
        />
      </Navbar.Brand>
      <Nav className="nav">
        <Nav.Link>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </Nav.Link>
        <Nav.Link>Login</Nav.Link>
        <Nav.Link>Sign Up</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
