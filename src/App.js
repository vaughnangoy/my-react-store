import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { signInAndSignUpPage } from './pages/signInAndSignUpPage/signInAndSignUpPage.component';

import Header from './components/header/header.component';

import { auth, createUserProfile } from './config/firebase-config';

class App extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        this.destroyAuthUser = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfile(user);
                userRef.onSnapshot(snapshot => {
                    this.setState(
                        {
                            currentUser: {
                                id: snapshot.id,
                                ...snapshot.data(),
                            },
                        },
                        () => {
                            console.log(this.state);
                        },
                    );
                });
            } else {
                this.setState({ currentUser: user });
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
                <Header isLoggedIn={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/sign-in" component={signInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
