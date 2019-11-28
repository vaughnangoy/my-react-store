import React from 'react';
import './customButton.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
    <button className="custom-button">{children}</button>
);

export default CustomButton;
