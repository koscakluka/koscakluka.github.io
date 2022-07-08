import React from 'react';
import PropTypes from 'prop-types';

const UnderlinedHeading = ({ children, className, style }) => {
    return (
        <>
            <h1 className={className} style={{ marginBottom: '0', ...style }}>
                {children}
            </h1>
            <hr style={{ backgroundColor: '#990000', marginBottom: '1rem' }} />
        </>
    );
};

UnderlinedHeading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default UnderlinedHeading;
