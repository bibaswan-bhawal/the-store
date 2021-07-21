import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartDropdown from './cart-dropdown';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownContainer = compose(
    connect(mapStateToProps),
    withRouter
)(CartDropdown);

export default CartDropdownContainer;