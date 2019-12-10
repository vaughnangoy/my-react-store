import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './header.component';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const generateComponent = props => {
    const history = createBrowserHistory();
    const store = createStore(() => {}, {});
    return (
        <Provider store={store}>
            <Router history={history}>
                <>
                    <Header {...props} />
                </>
            </Router>
        </Provider>
    );
};

describe('Cart Dropdown', () => {
    afterEach(cleanup);

    it('should render', () => {
        const { asFragment } = render(generateComponent());
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the correct links', () => {
        const { getByText } = render(generateComponent());
        expect(getByText('SHOP')).toBeInTheDocument();
        expect(getByText('CONTACT')).toBeInTheDocument();
        expect(getByText('LOGIN')).toBeInTheDocument();
    });

    it('should render the correct links when logged out', () => {
        const { getByText } = render(generateComponent({ currentUser: {} }));
        expect(getByText('SHOP')).toBeInTheDocument();
        expect(getByText('CONTACT')).toBeInTheDocument();
        expect(getByText('LOGOUT')).toBeInTheDocument();
    });
});
