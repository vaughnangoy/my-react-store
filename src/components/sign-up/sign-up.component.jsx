import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/customButton.component';

import { auth, createUserProfile } from '../../config/firebase-config';

export class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleThisSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        this.setState({ errorMessage: null });

        if (password !== confirmPassword) {
            this.setState({ errorMessage: 'Passwords must be the same' });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password,
            );
            await createUserProfile(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (e) {
            console.log(e);
            this.setState({ errorMessage: e.message });
        }
    };

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                {this.state.errorMessage ? (
                    <div className="error">
                        <em>{this.state.errorMessage}</em>
                    </div>
                ) : (
                    ''
                )}
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="displayName"
                        name="displayName"
                        id="displayName"
                        value={this.state.displayName}
                        required="required"
                        handleChange={this.handleChange}
                        label="displayName"
                        to="displayName"
                    />
                    <FormInput
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        required="required"
                        handleChange={this.handleChange}
                        label="email"
                        to="email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        required="required"
                        handleChange={this.handleChange}
                        label="password"
                        to="password"
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={this.state.confirmPassword}
                        required="required"
                        handleChange={this.handleChange}
                        label="confirmPassword"
                        to="confirmPassword"
                    />
                    <CustomButton type="submit" data-testid="sign-up-form">
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    }
}
