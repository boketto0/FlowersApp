import React, { useState, useEffect } from 'react';
import { ButtonOrderCart } from '../buttonOrderCart/ButtonOrderCart';
import './button.css';

export const Button = (props) => {
  const { onClick, children, onAddToCart, counter } = props;

  const [count, setCount] = useState(counter || 0);
  const [showCounter, setShowCounter] = useState(counter > 0);
  const [showOrderButton, setShowOrderButton] = useState(false);

  useEffect(() => {
    if (counter !== undefined) {
      setCount(counter);
      setShowCounter(counter > 0);
    }
  }, [counter]);

  const handlePlusClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setShowCounter(true);
    onAddToCart && onAddToCart();
    onClick && onClick(newCount);
    setShowOrderButton(true);
  };

  const handleMinusClick = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
    } else {
      setShowCounter(false);
      setShowOrderButton(false);
    }
    onClick && onClick(count);
  };

  console.log(count);

  return (
    <div>
      <button className="button">
        {showCounter && <span onClick={handleMinusClick}>-</span>}
        {showCounter && <span onClick={handlePlusClick}>{count}</span>}
        <span className='button__icon' onClick={handlePlusClick}>+</span>
        {children}
      </button>
      
      {showOrderButton && <ButtonOrderCart isVisible={true} counter={count} />}
    </div>
  );
};