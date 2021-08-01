import React from "react";

import "./button-input.scss";

const ButtonInput = ({ children, isGoogleSignIn, invertColor, ...otherProps }) => (
  <button
    className={`${invertColor ? 'invertColor' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} button-input i`} {...otherProps}>
    {children}
  </button>
);

export default ButtonInput;
