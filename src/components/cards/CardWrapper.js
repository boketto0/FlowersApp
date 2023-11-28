import './CardWrapper.css'
import React from 'react';
import { PropTypes } from 'prop-types';

export function CardWrapper(props) {
    
    const classes = `card ${props.className}`; 
    
    return <div className={classes}>{props.children}</div>;
}

CardWrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}