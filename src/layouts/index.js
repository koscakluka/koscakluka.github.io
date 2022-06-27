import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

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
            {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
             <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      > */}
            <main>{children}</main>
            <Footer />
            {/* <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            display: `flex`,
            justifyContent: `center`
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
        </div>*/}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
