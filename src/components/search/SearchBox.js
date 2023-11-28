import React from 'react';
import './searchBox.css'; // Создайте стиль (CSS) для компонента

const SearchBox = () => {
  return (
    <div className="search-box-container">
      <div className="search-box">
        <span className="search-icon">&#128269;</span>
        <input type="text" placeholder="Быстрый поиск" />
      </div>
    </div>
  );
};

export default SearchBox;
