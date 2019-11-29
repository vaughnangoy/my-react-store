import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import { auth } from '../../config/firebase-config';

const header = ({ isLoggedIn }) => (
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
            {isLoggedIn ? (
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
        </div>
    </div>
);

export default header;
