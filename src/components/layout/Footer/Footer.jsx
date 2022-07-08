import React from 'react';
import * as classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            © {new Date().getFullYear()} &middot; Built by &nbsp;
            <a href="https://github.com/koscakluka">Luka Košćak</a>
            &nbsp;with&nbsp;
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    );
};

export default Footer;
