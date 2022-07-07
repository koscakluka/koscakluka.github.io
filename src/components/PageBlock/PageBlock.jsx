import React from 'react';
import PropTypes from 'prop-types';

import * as classes from './PageBlock.module.css';

const PageBlock = ({
    id,
    children,
    className,
    style,
    order,
    minFullHeight,
}) => {
    const wrapperClass = [
        (order + 1) % 2 ? classes.pageBlockOdd : classes.pageBlockEven,
        classes.pageBlockWrapper,
    ].join(' ');

    const blockClass = [
        className,
        classes.pageBlock,
        minFullHeight ? classes.pageBlockFull : '',
    ].join(' ');

    return (
        <div id={id} className={wrapperClass}>
            <div className={blockClass} style={{ ...style }}>
                {children}
            </div>
        </div>
    );
};

PageBlock.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    order: PropTypes.number,
    minFullHeight: PropTypes.bool,
};

PageBlock.defaultProps = {
    order: 0,
    dynamicHeight: false,
};

export default PageBlock;
