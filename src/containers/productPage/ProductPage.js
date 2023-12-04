import React from 'react';
import './productPage.css';
import { BasketBouquetsCarousel } from '../carousels/basketBouquetsCarousel/BasketBouquetsCarousel';
import { AuthorsBouquetsCarousel } from '../carousels/authorsBouquetsCarousel/AuthorsBouquetsCarousel';
import { MonoBouquetsCarousel } from '../carousels/monoBouquetsCarousel/MonoBouquetsCarousel';

const ProductPage = ({ addToCart }) => {

  return (
    <div className='product-page__wrapper'>
      <AuthorsBouquetsCarousel/>
      <MonoBouquetsCarousel/>
      <BasketBouquetsCarousel/>
    </div>
  );
};

export default ProductPage;