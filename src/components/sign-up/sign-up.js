import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input";
import ButtonInput from "../button-input/button-input";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.scss";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        signUpStart(displayName, email, password);
    };

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name="displayName"
                        type="text"
                        label="Name"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        required
                    />

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

                    <FormInput name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />

                    <ButtonInput type="submit">Sign Up</ButtonInput>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
