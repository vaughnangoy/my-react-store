import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.hoc';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title && title.toUpperCase()}</h1>
        <div className="preview">
            {items &&
                items
                    .filter((item, i) => i < 4)
                    .map(item => <CollectionItem key={item.id} item={item} />)}
        </div>
    </div>
);

export default CollectionPreview;
