import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import * as classes from './index.module.css';

import './index.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className={classes.container}>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
