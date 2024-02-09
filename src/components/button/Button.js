import React, { useState, useEffect, memo } from 'react';

import './button.css';

export const ButtonType = {
  PRIMARY: "primary", 
  SECONDARY: "secondary"
}

export const Button = ((props) => {
  const { onAdd, value, onRemove, type } = props;

  const buttonClass = `add-btn add-btn-${type}`;
  const buttonSignClass = `button button-${type}`;

  return (
    <>
      <div className={buttonClass}>
        {typeof value === 'number' && value !== 0 && (
          <button className={buttonClass} onClick={onRemove}>
            -
          </button>
        )}

        {typeof value === 'number' && value !== 0 && <span>{value}</span>}

        <button className={buttonClass} onClick={onAdd}>
          +
        </button>
      </div>
    </>
  );
});


function Count(current, callback) {
  setTimeout(() => {
    const newCount = current + 1;
    callback(newCount);
    }, 1000)
}
