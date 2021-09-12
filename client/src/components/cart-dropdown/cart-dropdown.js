import React from 'react'
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import ButtonInput from '../button-input/button-input';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss'

const CartDropdown = () => {
    let history = useHistory();
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    
    return (
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
}

export default CartDropdown;