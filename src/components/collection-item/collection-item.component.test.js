import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CollectionItem from './collection-item.component';

describe('CollectionItem', () => {
    afterEach(cleanup);
    it('renders', () => {
        const { asFragment } = render(<CollectionItem />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should have image, name and price info', () => {
        const props = {
            name: 'Trainers',
            price: '£99.99',
            imageUrl: './imageurl',
        };
        const { getByTestId, getByText } = render(
            <CollectionItem {...props} />,
        );
        expect(getByTestId('image')).toBeInTheDocument();
        expect(getByText(/Trainers/)).toBeInTheDocument();
        expect(getByText('£99.99')).toBeInTheDocument();
    });
});
