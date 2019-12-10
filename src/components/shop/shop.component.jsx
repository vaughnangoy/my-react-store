import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';

const Shop = ({ collection }) => (
    <div className="shop">
        {collection.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
        ))}
    </div>
);

export default Shop;
