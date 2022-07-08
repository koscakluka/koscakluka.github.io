import React from 'react';
import * as classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <span className={classes.copyright}>
                © {new Date().getFullYear()}
            </span>
            <span className={classes.builtBy}>
                &nbsp;&middot; Built by &nbsp;
                <a href="https://github.com/koscakluka">Luka Košćak</a>
                &nbsp;with&nbsp;
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </span>
        </footer>
    );
};

export default Footer;
