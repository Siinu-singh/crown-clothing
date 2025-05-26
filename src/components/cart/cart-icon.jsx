import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../Asset/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: state.cart.cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
        0
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);