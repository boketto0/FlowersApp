import React, { useState } from 'react';
import classnames from 'classnames';
import { ButtonOrderCart } from '../buttonOrderCart/ButtonOrderCart';
import './button.css'

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

export const Button = (props) => {
  const { onClick, children, size, colored, disableOrderCart } = props;

  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [isButtonOrderCartVisible, setIsButtonOrderCartVisible] = useState(false);

  const handlePlusClick = () => {
    setCount(count + 1);
    setShowCounter(true);
    if (!disableOrderCart) {
      setIsButtonOrderCartVisible(true);
    }
    onClick && onClick();
  };

  const handleMinusClick = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setShowCounter(false);
      setIsButtonOrderCartVisible(false);
    }
    onClick && onClick();
  };

  const buttonClass = `button button-${size} ${colored}`;

  return (
    <div>
      <button className={buttonClass}>
        {showCounter && <span onClick={handleMinusClick}>-</span>}
        {showCounter && <span onClick={handlePlusClick}>{count}</span>}
        <span className='button__icon' onClick={handlePlusClick}>+</span>
        {children}
      </button>
      {!disableOrderCart && (
        <ButtonOrderCart isVisible={isButtonOrderCartVisible} handleButtonClick={() => setIsButtonOrderCartVisible(false)} />
      )}
    </div>
  );
};
