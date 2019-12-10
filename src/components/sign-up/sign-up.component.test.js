import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { SignUp } from './sign-up.component';

describe('SignUp', () => {
    afterEach(cleanup);
    it('renders', () => {
        const { asFragment } = render(<SignUp />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should fill in and submit the form', () => {
        const handlerSpy = jest.fn();
        const { getByLabelText, getByText, getByTestId } = render(
            <SignUp handleSubmit={handlerSpy} />,
        );
        fireEvent.change(getByLabelText('displayName'), {
            target: { value: 'Test' },
        });
        fireEvent.change(getByLabelText('email'), {
            target: { value: 'Test@test.com' },
        });
        fireEvent.change(getByLabelText('password'), {
            target: { value: 'test123' },
        });
        fireEvent.change(getByLabelText('confirmPassword'), {
            target: { value: 'test123' },
        });
        fireEvent.click(getByTestId('sign-up-form'));
    });
});
