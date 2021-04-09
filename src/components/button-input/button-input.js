import React from "react";

import "./button-input.scss";

const ButtonInput = ({ children, ...otherProps }) => (
  <button className="button-input" {...otherProps}>
    {children}
  </button>
);

export default ButtonInput;
