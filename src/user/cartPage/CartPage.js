import React from 'react';
import './cartPage.css';
import Icon1 from '../../assets/productPage/flowers1.jpg'
import Icon2 from '../../assets/productPage/flowers2.jpg'
import Icon3 from '../../assets/productPage/flowers3.jpg'
import Icon4 from '../../assets/productPage/flowers4.jpg'
import { Card, CardType } from '../../components/cards/Card';
import { CardWrapperCart } from '../../components/cards/CardWrapperCart';
import { ButtonCart } from '../../components/buttonCart/ButtonCart';

const CartPage = ({ cartItems }) => {

  const data = [
    {
      image: <img className='card-second__img' src={Icon1}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-second__img' src={Icon2}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-second__img' src={Icon3}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-second__img' src={Icon4}/>,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
  ]
  
  return (
    <div className='cartpage__wrapper'>
      <h2>Корзина</h2>
      <CardWrapperCart>
          {data.map((d) => (
            <div key={d.id}>
              <Card
                cardType={CardType.SECOND}
                image={d.image}
                price={d.price}
                title={d.title}
                text={d.text}
              />
            </div>
          ))}
        </CardWrapperCart>
        <ButtonCart/>
    </div>
  );
};

export default CartPage;
