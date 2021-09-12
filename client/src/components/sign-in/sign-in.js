import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input";
import ButtonInput from "../button-input/button-input";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import "./sign-in.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={event => { setEmail(event.target.value) }}
          required
        />

        <FormInput name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={event => { setPassword(event.target.value) }}
          required
        />
        <div className="buttons">
          <ButtonInput type="submit">Sign in</ButtonInput>
          <ButtonInput type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</ButtonInput>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
