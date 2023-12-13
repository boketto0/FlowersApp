import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonOrderCart } from '../../components/buttonOrderCart/ButtonOrderCart';
import Header from '../../components/header/Header';
import { ExampleBlock } from '../exampleBlock/ExampleBlock';
import ProductPage from '../pages/productPage/ProductPage';
import './home.css';
import { SearchBox } from '../../components/search/SearchBox';
import { Card, CardType } from '../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../components/cards/CardWrapper';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const cartItems = useSelector((state) => state.cartStore.cart);

  const handleSearchResultsChange = (results) => {
    setSearchResults(results);
    setSearchPerformed(true);
  };

  return (
    <div className='home'>
      {/* <Header></Header> */}
        <SearchBox onSearchResultsChange={handleSearchResultsChange} />

      {searchPerformed && searchResults.length === 0 ? (
  <h2 className={`no-results-message visible ${searchPerformed ? 'visible' : ''}`}>
    Увы, ничего не найдено
  </h2>
) : (
  <CardWrapper type={CardWrapperType.THIRD}>
    {searchResults.map((item) => (
      <Card key={item.id} cartItem={item} cardType={CardType.FIRST} />
    ))}
  </CardWrapper>
)}

      <ExampleBlock />
      <ProductPage />
      {cartItems?.length > 0 && <ButtonOrderCart />}
    </div>
  );
};

export default Home;
