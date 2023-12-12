import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../assets/action';
import { authorsElements, monoElements, basketElements } from '../../../assets/data';
import { Carousel } from '../../../components/carousel/Carousel';
import { CardWrapperType } from '../../../components/cards/CardWrapper';

const ProductPage = ({ isVisible }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className={`product-page__wrapper ${isVisible ? 'visible' : 'hidden'}`}>
      <Carousel elements={authorsElements} title="Авторские букеты" wrapperType={CardWrapperType.FIRST} dataArrayType="authors" onAddToCart={handleAddToCart}/>
      <Carousel elements={basketElements} title="Букеты в корзинах" wrapperType={CardWrapperType.FIRST} dataArrayType="basket" onAddToCart={handleAddToCart}/>
      <Carousel elements={monoElements} title="Моно букеты" wrapperType={CardWrapperType.FIRST} dataArrayType="mono" onAddToCart={handleAddToCart}/>
    </div>
  );
};


export default ProductPage;
