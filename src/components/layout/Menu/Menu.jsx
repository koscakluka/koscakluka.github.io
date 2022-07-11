import React, { useState } from 'react';
import Link from 'gatsby-link';

import * as classes from './Menu.module.css';

import { animateScrolling } from './Menu.animations';

const menuItems = [
    { title: 'Home', href: 'landing' },
    { title: 'About', href: 'about' },
    { title: 'Portfolio', href: 'portfolio' },
    { title: 'Contact', href: 'contact' },
];

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((menuState) => !menuState);
    };

    const scrollClick = (e) => {
        e.preventDefault();

        setMenuOpen(false);
        const target = '#' + e.target.getAttribute('href').split('#')[1];
        animateScrolling(target);
    };

    const generateMenu = () =>
        menuItems.map((item) => (
            <li>
                <Link
                    key={item.title}
                    to={`#${item.href}`}
                    onClick={scrollClick}
                >
                    {item.title}
                </Link>
            </li>
        ));

    return (
        <>
            <nav className={classes.navigation}>
                {/* Mobile Menu */}
                <ul
                    className={[
                        classes.headerMenu,
                        menuOpen ? classes.headerMenuOpen : '',
                    ].join(' ')}
                >
                    {generateMenu()}
                </ul>
                {/* Flex Menu */}
                <ul className={classes.headerLinks}>{generateMenu()}</ul>
                {/* Hamburger Icon */}
                <div
                    className={[
                        classes.hamburger,
                        menuOpen ? classes.open : '',
                    ].join(' ')}
                    onClick={toggleMenu}
                >
                    <span className={classes.hamburgerTop}></span>
                    <span className={classes.hamburgerMiddle}></span>
                    <span className={classes.hamburgerBottom}></span>
                </div>
            </nav>
        </>
    );
};

export default Menu;
