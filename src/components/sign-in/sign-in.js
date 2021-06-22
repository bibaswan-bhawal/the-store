import React, { Component } from "react";

import FormInput from "../form-input/form-input";
import ButtonInput from "../button-input/button-input";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password); 
      this.setState({ email: '', password: '' });

    } catch (error) {
      console.error("Failed to login with email and password: " + error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <ButtonInput type="submit">Sign in</ButtonInput>
            <ButtonInput type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</ButtonInput>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
