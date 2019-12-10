import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
const CartIcon = ({ toggleMiniCart, itemCount = 0 }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleMiniCart} />
        <span className="item-count" data-testid="counter">
            {itemCount}
        </span>
    </div>
);

export default CartIcon;
