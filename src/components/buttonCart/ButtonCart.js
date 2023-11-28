import './buttonCart.css';
import { useState } from 'react';

export const ButtonCart = ({ onClick, children }) => {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const handlePlusClick = () => {
    setCount(count + 1);
    setShowCounter(true);
    onClick && onClick();
  };

  const handleMinusClick = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setShowCounter(false);
    }
    onClick && onClick();
  };

  return (
    <button className="button__cart">
      {showCounter && <span onClick={handleMinusClick}>-</span>}
      {showCounter && <span onClick={handlePlusClick}>{count}</span>}
      <span className='button__cart__icon' onClick={handlePlusClick}>+</span>
      {children}
    </button>
  );
};