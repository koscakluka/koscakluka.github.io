import React from 'react';
import PropTypes from 'prop-types';

import * as classes from './ProgressBar.module.css';

/**
 * TODO:
 * * Add the option to choose scale size/max
 * * Option to turn off smaller ticks
 */

const ProgressBar = ({
    value,
    height,
    width,
    backgroundColor,
    progressColor,
    scaleOptions,
}) => {
    const widthFromValue = value / 0.05;

    const barwrapperStyle = { height, width, backgroundColor };

    const valueBarStyle = {
        width: widthFromValue + '%',
        backgroundColor: progressColor,
    };

    return (
        <div className={classes.progressBarWrapper} style={barwrapperStyle}>
            <div className={classes.progressBarValue} style={valueBarStyle} />
            <ProgressBarScale {...scaleOptions} />
        </div>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.number,
    height: PropTypes.string,
    width: PropTypes.string,
    backgroundColor: PropTypes.string,
    progressColor: PropTypes.string,
    scaleOptions: PropTypes.object,
};

ProgressBar.defaultProps = {
    value: 0,
    height: '20px',
    width: '100%',
    backgroundColor: '#b9b9b9',
    progressColor: '#990000',
    scaleOptions: {},
};

const ProgressBarScale = ({ tickHeight, tickColor }) => {
    const scaleStyle = {
        height: tickHeight,
    };
    const tickStyle = {
        height: '100%',
        borderRightColor: tickColor,
    };

    return (
        <div className={classes.progressBarScaleWrapper} style={scaleStyle}>
            {[...Array(20).keys()].map((i) => (
                <div
                    className={classes.progressBarTick}
                    style={{
                        ...tickStyle,
                        height: i % 2 ? '50%' : '100%',
                    }}
                />
            ))}{' '}
        </div>
    );
};

ProgressBarScale.defaultProps = {
    tickHeight: '10px',
    tickColor: '#FFF',
};

export default ProgressBar;
