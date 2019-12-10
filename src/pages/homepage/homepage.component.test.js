import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';

import { HomePage } from './homepage.component';

const generateComponent = props => {
    const history = createBrowserHistory();
    const store = createStore(() => {}, {});
    return (
        <Provider store={store}>
            <Router history={history}>
                <>
                    <HomePage {...props} />
                </>
            </Router>
        </Provider>
    );
};

describe('HomePage', () => {
    afterEach(cleanup);
    it('renders', () => {
        const { asFragment } = render(generateComponent());
        expect(asFragment()).toMatchSnapshot();
    });

    it('should contain the directory component in document', () => {
        const { getByTestId } = render(generateComponent());
        expect(getByTestId('directory-menu')).toBeInTheDocument();
    });
});
