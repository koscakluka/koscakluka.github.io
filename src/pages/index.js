import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/main';
import Seo from '../components/utilities/Seo/Seo';

import PageBlock from '../components/layout/PageBlock/PageBlock';
import UnderlinedHeading from '../components/utilities/UnderlinedHeading/UnderlinedHeading';
import ProgressBar from '../components/aboutMe/ProgressBar/ProgressBar';
import ContactForm from '../components/contact/ContactForm/ContactForm';
import TileGrid from '../components/portfolio/GalleryTileGrid/GalleryTileGrid';
import { StaticImage } from 'gatsby-plugin-image';

import * as classes from './index.module.css';

import * as aboutMe from '../data/aboutme';

const IndexPage = ({ data }) => {
    const porfolio = data.allMarkdownRemark.edges.map(({ node }) => {
        return {
            id: node.id,
            title: node.frontmatter.title,
            image: node.frontmatter.image,
            description: node.rawMarkdownBody,
            link: node.frontmatter.github,
        };
    });

    return (
        <>
            <Seo title="Home" />
            <Layout>
                {/* Landing Block */}
                <PageBlock
                    id="landing"
                    className={classes.pageBlockLanding}
                    order={0}
                    minFullHeight
                >
                    {/* Personal Image */}
                    <div className={[classes.block].join(' ')}>
                        <StaticImage
                            src="../assets/images/front-picture.jpg"
                            className={classes.profileFront}
                            imgClassName={classes.profileFrontImg}
                            aspectRatio={1}
                            alt=""
                        />
                    </div>
                    {/* Introduction Text */}
                    <div
                        className={[classes.block, classes.textBlock].join(' ')}
                    >
                        <UnderlinedHeading>
                            Hi, My Name Is Luka.
                        </UnderlinedHeading>
                        <p>
                            I am a Front-End Developer who started out as a
                            Robotics Engineer.
                        </p>
                        <p>
                            Learn more about my work and me by scrolling down...
                        </p>
                    </div>
                </PageBlock>
                {/* About Me Block */}
                <PageBlock id="about" order={1} minFullHeight>
                    {/* About Me Text */}
                    <div
                        className={[classes.block, classes.textBlock].join(' ')}
                    >
                        <UnderlinedHeading>About Me</UnderlinedHeading>
                        {aboutMe.description.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                    {/* Skills Block */}
                    <div
                        className={[classes.block, classes.textBlock].join(' ')}
                    >
                        <h2>My Languages and Technologies</h2>
                        {aboutMe.languages.map(([language, value]) => (
                            <div
                                key={language}
                                className={classes.languageTitle}
                            >
                                <span>{language}</span>
                                <ProgressBar
                                    value={value}
                                    scaleOptions={{ tickHeight: '7px' }}
                                />
                            </div>
                        ))}
                        <p className={classes.libraries}>
                            {aboutMe.libraries.reduce((a, b) => a + '; ' + b)}
                        </p>
                    </div>
                </PageBlock>
                {/* Porfolio Block */}
                <PageBlock id="portfolio" order={2} minFullHeight>
                    <div className={classes.blockWide}>
                        <UnderlinedHeading>My Portfolio</UnderlinedHeading>
                        <TileGrid data={porfolio} />
                    </div>
                </PageBlock>
                {/* Contact Block */}
                <PageBlock
                    id="contact"
                    className={classes.footerBlock}
                    order={3}
                    minFullHeight
                >
                    <div className={classes.block}>
                        <UnderlinedHeading>Contact Me</UnderlinedHeading>
                        <p>
                            If you want to work on a project or have a cool idea
                            send me a message
                        </p>
                        <ContactForm />
                    </div>
                </PageBlock>
            </Layout>
        </>
    );
};

export const frontpagePortfolioQuery = graphql`
    query FrontPagePortfolioQuery {
        allMarkdownRemark(
            filter: { frontmatter: { frontpage: { eq: true } } }
        ) {
            edges {
                node {
                    id
                    rawMarkdownBody
                    frontmatter {
                        path
                        title
                        languages
                        technologies
                        github
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
