import React from 'react';
import './searchBox.css';

export const SearchBox = () => {
  return (
    <div>
      <div>
        <div className="search-box">
          <span className="search-icon">&#128269;</span>
          <input type="text" placeholder="Быстрый поиск" />
        </div>
      </div>
    </div>
  );
};

