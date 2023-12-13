import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import './searchBox.css';
import { authorsElements, monoElements, basketElements } from '../../assets/data';
import Icon1 from '../../assets/icons/search.svg'

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
      <div className='search-box__wrapper'>
        <div className='search-header__block'>
        </div>
        <div className='search-box__border'>
          <div className="search-box">
            <span className="search-icon">
              <img src={Icon1}/>
            </span>
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