import React from 'react'
import { connect } from "react-redux";

import ButtonInput from "../button-input/button-input"
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss"

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <ButtonInput>Go TO CHECKOUT</ButtonInput>
    </div>
);


const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);