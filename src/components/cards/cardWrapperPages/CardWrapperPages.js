import './CardWrapperPages.css'
import React from 'react';
import { PropTypes } from 'prop-types';

export function CardWrapperPages(props) {
    
    const classes = `card-pages ${props.className}`;
    
    return <div className={classes}>{props.children}</div>;
}

CardWrapperPages.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}