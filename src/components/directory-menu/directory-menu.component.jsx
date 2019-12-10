import React from 'react';
import './directory-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenu = ({ sections }) => (
    <div className="directory-menu" data-testid="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
        ))}
    </div>
);

export default DirectoryMenu;
