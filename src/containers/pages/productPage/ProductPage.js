import React, { useState } from 'react';
import './productPage.css';
import { BasketBouquetsCarousel } from '../../carousels/basketBouquetsCarousel/BasketBouquetsCarousel';
import { AuthorsBouquetsCarousel } from '../../carousels/authorsBouquetsCarousel/AuthorsBouquetsCarousel';
import { MonoBouquetsCarousel } from '../../carousels/monoBouquetsCarousel/MonoBouquetsCarousel';

const ProductPage = ({ addToCart }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
    } else if (direction === 'right') {
      setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
    }
  };

  return (
    <div className='product-page__wrapper'>
      <AuthorsBouquetsCarousel handleSlide={handleSlide} />
      <MonoBouquetsCarousel handleSlide={handleSlide} />
      <BasketBouquetsCarousel handleSlide={handleSlide} />
    </div>
  );
};

export default ProductPage;
