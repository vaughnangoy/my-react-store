import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../customButton/customButton.component';

const collectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                data-testid="image"
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                ADD TO CART
            </CustomButton>
        </div>
    );
};

export default collectionItem;
