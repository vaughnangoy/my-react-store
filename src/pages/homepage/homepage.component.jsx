import React from 'react';

import './homepage.styles.scss';
import { DirectoryMenu } from "../../components/directory-menu/directory-menu.component";

export const HomePage = () => {
    return (
        <div className="homepage">
            <DirectoryMenu />
        </div>
    );
}