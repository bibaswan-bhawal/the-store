import React from 'react'

import ButtonInput from "../button-input/button-input"

import "./cart-dropdown.scss"

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <ButtonInput>Go TO CHECKOUT</ButtonInput>
    </div>
);

export default CartDropdown;