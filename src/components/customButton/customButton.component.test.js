import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CustomButton from './customButton.component';

describe('CustomButton', () => {
    afterEach(cleanup);
    it('renders', () => {
        const { asFragment } = render(<CustomButton />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the children', () => {
        const { getByTestId, getByText } = render(
            <CustomButton>
                <div data-testid="test">Test Child Component</div>
            </CustomButton>,
        );
        expect(getByTestId('test')).toBeInTheDocument();
        expect(getByText('Test Child Component')).toBeInTheDocument();
    });
});
