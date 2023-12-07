import './CardWrapper.css';
import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

export const CardWrapperType = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third"
};

export function CardWrapper(props) {
  const { type, className, children } = props;

  const wrapperClass = classnames({
    'cardwrapper-first': type === CardWrapperType.FIRST,
    'cardwrapper-second': type === CardWrapperType.SECOND,
    'cardwrapper-third': type === CardWrapperType.THIRD,
    [className]: className,
  });

  const classes = `${wrapperClass} ${props.className}`; 
    
  return <div className={classes}>{props.children}</div>;
}

CardWrapper.propTypes = {
  type: PropTypes.oneOf(Object.values(CardWrapperType)),
  className: PropTypes.string,
  children: PropTypes.node
};
