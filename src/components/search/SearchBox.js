import React, { useState } from 'react';
import Fuse from 'fuse.js';
import './searchBox.css';
import { authorsElements, monoElements, basketElements } from '../../assets/data';
import { Card, CardType } from '../cards/Card';
import { CardWrapper, CardWrapperType } from '../cards/CardWrapper';
import Header from '../header/Header';

export const SearchBox = ({ onSearchResults, onSearchEnd, onSearchStart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const options = {
    keys: ['title', 'text'],
  };

  const allElements = [...authorsElements, ...monoElements, ...basketElements];
  const fuse = new Fuse(allElements, options);

  const handleSearch = () => {
    const result = fuse.search(searchQuery);
    setSearchResults(result);
    onSearchResults(result);
    console.log(result);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      onSearchEnd();
    } else {
      onSearchStart();
      handleSearch();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div>
        <div className="search-box">
          <span onClick={handleSearch} className="search-icon">&#128269;</span>
          <input
            type="text"
            placeholder="Быстрый поиск"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};