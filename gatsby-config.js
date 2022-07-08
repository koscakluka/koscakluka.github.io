module.exports = {
    siteMetadata: {
        title: `Luka Košćak | Personal Page`,
        description: `My Personal Page showcasing my work`,
        author: `@koscakluka`,
        siteUrl: `http://lukakoscak.me`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `koscakluka.github.io`,
                short_name: `koscakluka-personal`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: `portfolio`,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        'gatsby-plugin-cname',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-recaptcha`,
            options: {
                async: true,
                defer: true,
                args: ``,
            },
        },
    ],
};
