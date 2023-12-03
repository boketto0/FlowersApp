import React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardType } from '../../components/cards/Card';
import { CardWrapper } from '../../components/cards/CardWrapper';
import './productPage.css';
import { DetailButton, DetailButtonSize } from '../../components/detailButton/DetailButton';
import Icon1 from '../../assets/productPage/flowers1.jpg'
import Icon2 from '../../assets/productPage/flowers2.jpg'
import Icon3 from '../../assets/productPage/flowers3.jpg'
import Icon4 from '../../assets/productPage/flowers4.jpg'
import Icon5 from '../../assets/productPage/flowers5.jpg'
import Icon6 from '../../assets/productPage/flowers6.jpg'
import Icon7 from '../../assets/productPage/flowers7.jpg'
import Icon8 from '../../assets/productPage/flowers8.jpg'
import Icon9 from '../../assets/productPage/flowers9.jpg'

const ProductPage = ({ addToCart }) => {

  const elements = [
    {
      image: <img className='card-first__img' src={Icon1}/>,
      price: "3500р",
      title: "Розы",
      text: "Красные"
    },
    {
      image: <img className='card-first__img' src={Icon2}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon3}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon4}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon5}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon6}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon7}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon8}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
  ]

  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const handleSlide = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
    } else if (direction === 'right') {
      setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
    }
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1200) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    window.addEventListener('resize', updateVisibleCards);
    updateVisibleCards();

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  return (
    <div className='product-page__wrapper'>
      <div className='product-page__text__wrapper'>
        <h2>Авторские букеты</h2>
        <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} handleSlide={handleSlide} />
      </div>
      <div className='product-page__carousel__wrapper'>
      <DetailButton direction={'left'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('left')} />
        <CardWrapper>
          {elements
            .slice(slideIndex, slideIndex + visibleCards)
            .map((el, index) => (
              <div key={index}>
                <Card
                  cardType={CardType.FIRST}
                  image={el.image}
                  price={el.price}
                  title={el.title}
                  text={el.text}
                />
              </div>
            ))}
        </CardWrapper>
        <DetailButton direction={'right'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('right')} />
      </div>
      <div className='product-page__text__wrapper'>
        <h2>Моно букеты</h2>
        <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} handleSlide={handleSlide} />
      </div>
      <div className='product-page__carousel__wrapper'>
      <DetailButton direction={'left'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('left')} />
        <CardWrapper>
          {elements
            .slice(slideIndex, slideIndex + visibleCards)
            .map((el, index) => (
              <div key={index}>
                <Card
                  cardType={CardType.FIRST}
                  image={el.image}
                  price={el.price}
                  title={el.title}
                  text={el.text}
                />
              </div>
            ))}
        </CardWrapper>
        <DetailButton direction={'right'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('right')} />
      </div>
      <div className='product-page__text__wrapper'>
        <h2>Букеты в корзинах</h2>
        <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} handleSlide={handleSlide} />
      </div>
      <div className='product-page__carousel__wrapper'>
      <DetailButton direction={'left'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('left')} />
        <CardWrapper>
          {elements
            .slice(slideIndex, slideIndex + visibleCards)
            .map((el, index) => (
              <div key={index}>
                <Card
                  cardType={CardType.FIRST}
                  image={el.image}
                  price={el.price}
                  title={el.title}
                  text={el.text}
                />
              </div>
            ))}
        </CardWrapper>
        <DetailButton direction={'right'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('right')} />
      </div>
    </div>
  );
};

export default ProductPage;
