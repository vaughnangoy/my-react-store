import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './cart-dropdown.component';

describe('Cart Dropdown', () => {
    afterEach(cleanup);

    it('renders', () => {
        const { asFragment } = render(<Header />);
        expect(asFragment()).toMatchSnapshot();
    });
});
