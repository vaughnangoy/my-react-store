import React from 'react';
import './signInAndSignUpPage.styles.scss';
import { SignIn } from '../../components/signIn/signIn.component';
import { SignUp } from '../../components/sign-up/sign-up.component';

export const signInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);
