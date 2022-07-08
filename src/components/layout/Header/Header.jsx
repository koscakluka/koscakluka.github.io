import * as React from 'react';

import Menu from '../Menu/Menu';

import * as classes from './Header.module.css';

const Header = () => (
    <header className={classes.header}>
        <Menu />
    </header>
);

export default Header;
