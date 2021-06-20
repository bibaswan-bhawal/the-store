import React from "react";

import "./button-input.scss";

const ButtonInput = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} button-input`} {...otherProps}>
    {children}
  </button>
);

export default ButtonInput;
