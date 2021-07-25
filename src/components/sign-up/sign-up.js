import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input";
import ButtonInput from "../button-input/button-input";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.scss";

const SignUp = ({ signUpStart }) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        signUpStart(displayName, email, password);
    };

    return (
        <div className="sign-in">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    name="displayName"
                    type="text"
                    label="Name"
                    value={displayName}
                    handleChange={event => setDisplayName(event.target.value)}
                    required
                />

                <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={event => setEmail(event.target.value)}
                    required
                />

                <FormInput name="password"
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={event => setPassword(event.target.value)}
                    required
                />

                <FormInput name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    handleChange={event => setConfirmPassword(event.target.value)}
                    required
                />

                <ButtonInput type="submit">Sign Up</ButtonInput>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUp);
