import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import ButtonInput from '../button-input/button-input';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>

        <ButtonInput onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>Go TO CHECKOUT</ButtonInput>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));