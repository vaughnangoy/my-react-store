import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../customButton/customButton.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleMiniCart } from '../../stateManagement/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            ) : (
                <span className="empty-message">Cart is empty</span>
            )}
        </div>
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleMiniCart());
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

export default CartDropdown;
