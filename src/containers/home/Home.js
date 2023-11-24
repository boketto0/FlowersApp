import { useState } from 'react';
import SearchBox from '../../components/search/SearchBox';
import { ExampleBlock } from '../exampleBlock/ExampleBlock';
import ProductPage from '../productPage/ProductPage';
import Header from '../../components/header/Header';
import './home.css';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='home'>
        <Header/>
        <SearchBox/>
        <ExampleBlock/>
        <ProductPage addToCart={addToCart} />
      {/* <CartPage cartItems={cartItems} /> */}
    </div>
  );
};

export default Home;
