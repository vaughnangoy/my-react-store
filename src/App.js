import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/signInAndSignUpPage/signInAndSignUpPage.component';
import Checkout from './pages/checkout/checkout.hoc';
import Header from './components/header/header.hoc';

import { auth, createUserProfile } from './config/firebase-config';

import { connect } from 'react-redux';
import { userAction } from './stateManagement/users/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './stateManagement/users/user.selectors';

class App extends React.Component {
    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.destroyAuthUser = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfile(user);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser(
                        {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },

                        () => {
                            console.log(this.state);
                        },
                    );
                });
            } else {
                setCurrentUser(user);
                console.log(this.state);
            }
        });
    }

    componentWillUnmount() {
        this.destroyAuthUser();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.props.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/sign-in"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                    <Route exact path="/checkout" component={Checkout} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(userAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
