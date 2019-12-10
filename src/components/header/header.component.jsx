import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import CartIcon from '../cart-icon/cart-icon.hoc';
import CartDropdown from '../cart-dropdown/cart-dropdown.hoc';

import { auth } from '../../config/firebase-config';

const header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {currentUser ? (
                <Link
                    className="option"
                    to="/sign-in"
                    onClick={() => auth.signOut()}
                >
                    LOGOUT
                </Link>
            ) : (
                <Link className="option" to="/sign-in">
                    LOGIN
                </Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

export default header;
