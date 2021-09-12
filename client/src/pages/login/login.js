import React from "react";

import "./login.scss";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const LoginPage = () => (
  <div className="login-in">
    <SignIn />
    <SignUp />
  </div>
);

export default LoginPage;
