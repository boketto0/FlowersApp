import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';

export const ButtonOrder = (props) => {
  const { onClick, children, size, colored, disableOrderCart, onAddToCart, counter } = props;

  const [count, setCount] = useState(counter || 0);
  const [showCounter, setShowCounter] = useState(counter > 0);

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
    if (!disableOrderCart) {
      onAddToCart && onAddToCart();
    }
    onClick && onClick(newCount);
  };

  const handleMinusClick = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
    } else {
      setShowCounter(false);
    }
    onClick && onClick(count);
  };

  console.log(count);

  return (
    <div>
      <button className="button-order">
        {showCounter && <span onClick={handleMinusClick}>-</span>}
        {showCounter && <span onClick={handlePlusClick}>{count}</span>}
        <span className='button-order__icon' onClick={handlePlusClick}>+</span>
        {children}
      </button>
    </div>
  );
};