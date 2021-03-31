import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

const NavBar = () => (
  <div className="navbar">
    <Link to="/">
      <Logo className="logo-container" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/sign-in">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default NavBar;
