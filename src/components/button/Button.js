import './button.css';
import { useState } from 'react';
import { ButtonOrderCart } from '../buttonOrderCart/ButtonOrderCart';

export const Button = ({ onClick, children }) => {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [isButtonOrderCartVisible, setIsButtonOrderCartVisible] = useState(false);

  const handlePlusClick = () => {
    setCount(count + 1);
    setShowCounter(true);
    setIsButtonOrderCartVisible(true);
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

  return (
    <div>
      <button className="custom-button">
        {showCounter && <span onClick={handleMinusClick}>-</span>}
        {showCounter && <span onClick={handlePlusClick}>{count}</span>}
        <span className='custom-button__icon' onClick={handlePlusClick}>+</span>
        {children}
      </button>
      <ButtonOrderCart isVisible={isButtonOrderCartVisible} handleButtonClick={() => setIsButtonOrderCartVisible(false)} />
    </div>
  );
};
