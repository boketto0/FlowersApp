import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import './searchBox.css';
import { authorsElements, monoElements, basketElements } from '../../assets/data';
import Icon1 from '../../assets/icons/search.svg';
import Icon2 from '../../assets/icons/plant.svg'

export const SearchBox = ({ onSearchResultsChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`search-box__wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className='search-header__block'>
        <div className="search-wrapper__text">
          <img src={Icon2}/>
          <h5>Bloombox</h5>
        </div>
      </div>
      <div className='search-box__border'>
        <div className="search-box">
          <span className="search-icon">
            <img src={Icon1} alt="Search Icon" />
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
