import { useState } from 'react';
import { ButtonOrderCart } from '../../components/buttonOrderCart/ButtonOrderCart';
import Header from '../../components/header/Header';
import { ExampleBlock } from '../exampleBlock/ExampleBlock';
import ProductPage from '../pages/productPage/ProductPage';
import './home.css';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='home'>
        <Header/>
        <Header/>
        <ExampleBlock/>
        <ProductPage addToCart={addToCart} />
        <ButtonOrderCart/>
    </div>
  );
};

export default Home;
