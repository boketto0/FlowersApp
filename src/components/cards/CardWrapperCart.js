import './CardWrapperCart.css'
import { PropTypes } from 'prop-types';

export function CardWrapperCart(props) {
    
    const classes = `card__cart ${props.className}`; 
    
    return <div className={classes}>{props.children}</div>;
}

CardWrapperCart.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}