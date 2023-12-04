import { useState } from 'react';
import CartPage from '../cartPage/CartPage';
import SearchBox from '../../components/search/SearchBox';
import { ExampleBlock } from '../exampleBlock/ExampleBlock';
import ProductPage from '../productPage/ProductPage';
import Header from '../../components/header/Header';
import './home.css';
import { ButtonOrderCart } from '../../components/buttonOrderCart/ButtonOrderCart';
import './home.css';
import { SimpleCarousel } from '../carousels/carousel/SimpleCarousel'

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='home'>
        <Header/>
        <Header/>
        <SearchBox/>
        <ExampleBlock/>
        <ProductPage addToCart={addToCart} />
        <ButtonOrderCart/>
        <SimpleCarousel/>
    </div>
  );
};

export default Home;
