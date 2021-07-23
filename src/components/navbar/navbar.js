import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

import { signOutStart } from "../../redux/user/user.actions";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

import "./navbar.scss";

const NavBar = ({ currentUser, hidden, signOutStart }) => (
  <div className="navbar">
    <Link to="/">
      <Logo className="logo-container" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ?
          <div className="option" onClick={signOutStart}>SIGN OUT</div>
          :
          <Link className="option" to="/sign-in">SIGN IN</Link>
      }
      <CartIcon />
    </div>

    {
      hidden ? null : <CartDropdownContainer />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
