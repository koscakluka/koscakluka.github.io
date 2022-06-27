import React from 'react';
import Link from 'gatsby-link';

import * as classes from './Menu.module.css';

const Menu = () => (
    <nav className={classes.navigation}>
        <ul className={classes.headerLinks}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
