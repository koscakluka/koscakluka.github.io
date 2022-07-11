import React from 'react';
import PropTypes from 'prop-types';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as classes from './GalleryTileGrid.module.css';

const GalleryTileGrid = ({ data }) => {
    return (
        <div className={classes.grid}>
            {data.map((item) => (
                <GalleryTile key={item.id} item={item} />
            ))}
        </div>
    );
};

GalleryTileGrid.propTypes = {
    data: PropTypes.array,
};

const GalleryTile = ({ item }) => (
    <div className={classes.tile}>
        <GatsbyImage image={getImage(item.image)} alt={item.title} />
        <a href={item.link} className={classes.overlay}>
            <span className={classes.title}>{item.title}</span>
            <p className={classes.description}>{item.description}</p>
        </a>
    </div>
);
export default GalleryTileGrid;
