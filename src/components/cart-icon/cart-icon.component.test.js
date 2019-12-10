import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CartIcon from './cart-icon.component';

describe('Cart Icon', () => {
    afterEach(cleanup);

    it('renders', () => {
        const { asFragment } = render(<CartIcon />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should initialise the counter to 0', () => {
        const { getByTestId } = render(<CartIcon />);
        expect(getByTestId('counter')).toHaveTextContent('0');
    });

    it('should update the counter to 3', () => {
        const { getByTestId, rerender } = render(<CartIcon />);
        expect(getByTestId('counter')).toHaveTextContent('0');
        rerender(<CartIcon counter={3} />);
        expect(getByTestId('counter')).toHaveTextContent('3');
    });
});
