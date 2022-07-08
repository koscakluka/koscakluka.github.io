import React, { useState } from 'react';
import Link from 'gatsby-link';

import * as classes from './Menu.module.css';

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
        setMenuOpen(false);
        // e.preventDefault();
        // gsap.to(window, {
        //     duration: 0.5,
        //     scrollTo: e.target.getAttribute('href'),
        // });
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
