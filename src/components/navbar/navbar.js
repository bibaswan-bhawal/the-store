import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import "./navbar.scss";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

const NavBar = ({ currentUser }) => (
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

      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          :
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(NavBar);
