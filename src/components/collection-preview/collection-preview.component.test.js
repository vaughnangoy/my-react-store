import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CollectionPreview from './collection-preview.component';

jest.mock('../collection-item/collection-item.component', () => () => (
    <div data-testid="mock-collection-item" />
));

describe('CollectionPreview', () => {
    afterEach(cleanup);

    it('renders', () => {
        const { asFragment } = render(<CollectionPreview />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display 3 children', () => {
        const props = {
            title: 'Test Item Title',
            items: [{ id: 1 }, { id: 2 }, { id: 3 }],
        };
        const { getAllByTestId } = render(<CollectionPreview {...props} />);
        expect(getAllByTestId('mock-collection-item').length).toEqual(3);
    });
});
