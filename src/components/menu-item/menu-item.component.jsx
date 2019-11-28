import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
    <div className={`menu-item ${size}`} onClick={() => history.push(linkUrl)}>
        <div
            className="bg"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        ></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
