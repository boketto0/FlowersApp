import React, { useState, useEffect, memo } from 'react';

import './button.css';

export const Button = memo((props) => {
  const { onAdd, value, onRemove } = props;

  return (
    <>
      <div className="add-btn">
        {typeof value === 'number' && value !== 0 && (
          <button className="button" onClick={onRemove}>
            -
          </button>
        )}

        {typeof value === 'number' && value !== 0 && <span>{value}</span>}

        <button className="button" onClick={onAdd}>
          +
        </button>
      </div>
    </>
  );
});
