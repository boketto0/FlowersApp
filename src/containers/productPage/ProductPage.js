import React from 'react';
import { Card, CardType } from '../../components/cards/Card';
import { CardWrapper } from '../../components/cards/CardWrapper';
import './productPage.css';
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
      text: "Красивые"
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
  return (
    <div class='product-page__wrapper'>
      <CardWrapper>
          {elements.map((el) => (
            <div key={el.id}>
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
        {/* <ProductCard addToCart={addToCart} /> */}
    </div>
  );
};

export default ProductPage;
