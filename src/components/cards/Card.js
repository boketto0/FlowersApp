import React, { useState } from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { Button } from '../button/Button';
import { ButtonOrder } from '../button/ButtonOrder';

export const CardType = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third"
};

export const Card = (props) => {

  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [orderButtonClickCount, setOrderButtonClickCount] = useState(0);

  const handleButtonClick = () => {
    if (props.price && props.text && props.title && props.image) {
      console.log('Button clicked with id:', props.image, props.title, props.text, props.price);
      setButtonClickCount(buttonClickCount + 1);
      setOrderButtonClickCount(buttonClickCount + 1);
      props.onClick && props.onClick(props.image, props.title, props.text, props.price);
    }
  };

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
            <Button onClick={handleButtonClick} counter={buttonClickCount} />
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
            <ButtonOrder counter={orderButtonClickCount} />
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  cardType: PropTypes.oneOf(Object.values(CardType)),
  cell: PropTypes.node,
  title: PropTypes.string,
  text: PropTypes.string,
  component: PropTypes.node,
  documentation: PropTypes.node,
  onClick: PropTypes.func,
};