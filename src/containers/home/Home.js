import { useState } from 'react';
import CartPage from '../../user/cartPage/CartPage';
import SearchBox from '../../components/search/SearchBox';
import { ExampleBlock } from '../exampleBlock/ExampleBlock';
import ProductPage from '../productPage/ProductPage';
import Header from '../../components/header/Header';
import './home.css';
import { ButtonOrderCart } from '../../components/buttonOrderCart/ButtonOrderCart';
import './home.css';
  import { SimpleCarousel } from '../../components/SimpleCarousel';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='home'>
        {/* <Header/>
        <SearchBox/>
        <ExampleBlock/>
        <ProductPage addToCart={addToCart} />
        <ButtonOrderCart/> */}
      <SimpleCarousel/>
        {/* <CartPage/> */}
    </div>
  );
};

export default Home;
