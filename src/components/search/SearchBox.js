import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import './searchBox.css';
import { authorsElements, monoElements, basketElements } from '../../assets/data';
import { Card, CardType } from '../cards/Card';
import { CardWrapper, CardWrapperType } from '../cards/CardWrapper';
import Header from '../header/Header';

export const SearchBox = ({ onSearchResultsChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const dataToSearch = [...authorsElements, ...monoElements, ...basketElements];

  const fuseOptions = {
    keys: ['title', 'text'],
    includeScore: true,
  };

  const fuse = new Fuse(dataToSearch, fuseOptions);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
    } else {
      const results = fuse.search(searchTerm);
      setSearchResults(results.map((result) => result.item));
    }
  }, [searchTerm, fuse]);

  useEffect(() => {
    onSearchResultsChange(searchResults);
  }, [searchResults, onSearchResultsChange]);

  return (
    <div>
      <div>
        <div className="search-box">
          <span className="search-icon">&#128269;</span>
          <input
            type="text"
            placeholder="Быстрый поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};