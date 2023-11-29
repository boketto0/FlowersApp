import React from 'react';
import './Card.css';
import { PropTypes } from 'prop-types';
import { Button } from '../button/Button';
import { ButtonSize } from '../button/Button';

export const CardType = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third"
};

export const Card = (props) => {
  const defaultCardType = CardType.FIRST;

  return (
    <div>
      <div className={`card-${props.cardType || defaultCardType}`}>
        {props.cardType === CardType.FIRST && (
          <div>
            <div className='card-first__img'>{props.image}</div>
            <span className='card-first__price'>{props.price}</span>
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
            <Button size={ButtonSize.SMALL} colored="white"/>
          </div>
        )}
        {props.cardType === CardType.SECOND && (
          <div className='card-second'>
            <div className='card-second__img'>{props.image}</div>
            <div className='card-second__content__wrapper'>
              <div className="card-title">{props.title}</div>
              <div className="card-text">{props.text}</div>
              <span className='card-first__price'>{props.price}</span>
            </div>
            <Button size={ButtonSize.MEDIUM} colored="gray" disableOrderCart/>
          </div>
        )}
        {/* {props.cardType === CardType.THIRD && (
          <div>
            <div className='card-component'>{props.component}</div>
            <div>{props.cell}</div>
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
            <div>{props.documentation}</div>
          </div>
        )} */}
      </div>
    </div>
  );
};

/* eslint react/prop-types: 0 */

Card.propTypes = {
    cardType: PropTypes.oneOf(Object.values(CardType)),
    cell: PropTypes.node,
    title: PropTypes.string, 
    text: PropTypes.string, 
    component: PropTypes.node,
    documentation: PropTypes.node
}