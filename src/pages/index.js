import * as React from 'react';

//import Layout from '../layouts'
import Seo from '../components/Seo/Seo';

import PageBlock from '../components/PageBlock/PageBlock';
import UnderlinedHeading from '../components/UnderlinedHeading/UnderlinedHeading';
import ProgressBar from '../components/ProgressBar/ProgressBar';

import * as classes from './index.module.css';

import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import ContactForm from '../components/ContactForm/ContactForm';

const IndexPage = ({ data }) => {
    console.log(getImage('../images/front-picture.jpg'));
    return (
        <>
            <Seo title="Home" />
            <PageBlock
                className={classes.pageBlockLanding}
                order={0}
                minFullHeight
            >
                <div className={[classes.block].join(' ')}>
                    <StaticImage
                        src="../images/front-picture.jpg"
                        className={classes.profileFront}
                        imgClassName={classes.profileFrontImg}
                        aspectRatio={1}
                        alt=""
                    />
                </div>
                <div className={[classes.block, classes.textBlock].join(' ')}>
                    <UnderlinedHeading>Hi, My Name Is Luka.</UnderlinedHeading>
                    <p>
                        I am a Front-End Developer who started out as a Robotics
                        Engineer.
                    </p>
                    <p>Learn more about my work and me by scrolling down...</p>
                </div>
            </PageBlock>
            <PageBlock
                className={classes.pageBlockAboutme}
                order={1}
                minFullHeight
            >
                <div className={[classes.block, classes.textBlock].join(' ')}>
                    <UnderlinedHeading className={classes.headingRight}>
                        About Me
                    </UnderlinedHeading>
                    {/*<p>Feel free to go through my stuff to learn more about me :)</p>*/}
                    <p>
                        I am a Front-End Developer specializing in React
                        Applications. I love finding new ways to make things
                        more enjoyable to use both for users of my applications
                        and programmers looking at my code.
                    </p>
                    <p>Soon I will add more things about me, stay tuned :)</p>
                </div>
                <div
                    className={[
                        classes.block,
                        classes.textBlock,
                        classes.skillsBlock,
                    ].join(' ')}
                >
                    <h2
                        style={{
                            lineHeight: 'var(--line-height-dense)',
                        }}
                    >
                        My Languages and Technologies
                    </h2>
                    {[
                        ['JavaScript', 4],
                        ['HTML5 & CSS3', 3.5],
                        ['TypeScript', 3.5],
                        ['C++', 3.5],
                        ['Python', 3],
                        ['Java', 2],
                    ].map(([skill, value]) => (
                        <div
                            style={{
                                marginBottom: '0.5rem',
                                textAlign: 'left',
                            }}
                        >
                            <span>{skill}</span>
                            <ProgressBar
                                value={value}
                                scaleOptions={{ tickHeight: '7px' }}
                            />
                        </div>
                    ))}
                    <p
                        style={{
                            maxWidth: '90%',
                            margin: '0 auto',
                            marginTop: '1rem',
                        }}
                    >
                        React.js, Node.js, Redux, Gatsby, Vue.js, Next.js, Git,
                        Docker
                    </p>
                </div>
            </PageBlock>
            <PageBlock order={2} minFullHeight>
                <p className={classes.block}>
                    Portfolio Section is Under Construction
                </p>
                {/* {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div
                        key={node.id}
                        style={{ width: '400px', aspectRatio: 1.78 }}
                    >
                        <GatsbyImage
                            image={getImage(node.frontmatter.image)}
                            alt={node.frontmatter.title}
                        />
                        {node.frontmatter.title}
                    </div>
                ))} */}
            </PageBlock>
            <PageBlock order={3} minFullHeight>
                <div className={classes.block}>
                    <UnderlinedHeading>Contact Me</UnderlinedHeading>
                    <p>
                        If you want to work on a project or have a cool idea
                        send a message throught the form below
                    </p>
                    <ContactForm />
                </div>
            </PageBlock>
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
                    frontmatter {
                        path
                        title
                        languages
                        technologies
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