import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import "./navbar.scss";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

const NavBar = ({ currentUser, hidden }) => (
  <div className="navbar">
    <Link to="/">
      <Logo className="logo-container" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/sign-in">SIGN IN</Link>
      }
      <CartIcon />
    </div>

    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(NavBar);
