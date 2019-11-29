import React from 'react';
import './signIn.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';

import { signInWithGoogle } from '../../config/firebase-config';

export class SignIn extends React.Component {
    constructor() {
        super();

        this.state = { email: '', password: '' };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    handlePopup = e => {
        e.preventDefault();
        signInWithGoogle();
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required="required"
                        handleChange={this.handleChange}
                        label="email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required="required"
                        handleChange={this.handleChange}
                        label="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton
                            type="button"
                            onClick={this.handlePopup}
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
