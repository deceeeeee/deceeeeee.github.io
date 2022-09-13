import React, { useContext, useEffect, useRef } from 'react';
import Anchor from '../../Utilities/Anchor/Anchor';

import Init from '../../../Init/Init';
import './Header.scss';
import CursorContext from '../../../Context/CursorContext';

const Header = (props) => {
    let config = Init.config;
    let iconPath = config.imageIcon;

    return (
        <div className="header">
            <h1>
                Header - Carousel
            </h1>
        </div>
    );
}



export default Header;