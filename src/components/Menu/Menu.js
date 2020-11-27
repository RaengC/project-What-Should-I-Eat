import React, { Fragment, useState } from 'react';

import Navbar from './Navbar';
import { MenuButton } from './MenuButton';
import './Menu.css'

export const Menu = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Fragment>
            <Navbar 
                toggle={toggle} 
                onClick={() => setToggle(!toggle)} />
            <MenuButton 
                toggle={toggle} 
                    onClick={() => setToggle(!toggle)} />
        </Fragment>
    );
};