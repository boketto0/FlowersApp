import React, { useState } from 'react';
import { ButtonOrderCart } from '../../components/buttonOrderCart/ButtonOrderCart';
import Header from '../../components/header/Header';
import { ExampleBlock } from '../exampleBlock/ExampleBlock';
import ProductPage from '../pages/productPage/ProductPage';
import './home.css';
import { SearchBox } from '../../components/search/SearchBox';
import { Card, CardType } from '../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../components/cards/CardWrapper';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setIsSearching(false);
  };

  const handleSearchEnd = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  const handleSearchStart = () => {
    setIsSearching(true);
  };

  return (
    <div className='home'>
      <Header>
        <SearchBox
          onSearchResults={handleSearchResults}
          onSearchEnd={handleSearchEnd}
          onSearchStart={handleSearchStart}
        />
      </Header>

      <div>
        <CardWrapper type={CardWrapperType.THIRD}>
          {searchResults.map((result, index) => (
            <div key={index}>
              <Card
                cardType={CardType.FIRST}
                image={result.item.image}
                price={result.item.price}
                title={result.item.title}
                text={result.item.text}
                component={result.item.component}
              />
            </div>
          ))}
        </CardWrapper>
      </div>

      <div className={`home-visible ${isSearching ? 'hidden' : ''}`}>
        <ExampleBlock />
        <ProductPage />
      </div>

      <ButtonOrderCart />
    </div>
  );
};

export default Home;
