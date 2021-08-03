import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { signOutStart } from "../../redux/user/user.actions";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

import "./navbar.scss";

const NavBar = () => {

  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutStart());
  }

  return (
    <div className="navbar">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        {
          currentUser ?
            <div className="option" onClick={signOut}>SIGN OUT</div>
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
}

export default NavBar;
