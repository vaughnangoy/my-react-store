import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, i) => i < 4)
                .map(item => (
                    <CollectionItem key={item.id} {...item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;
