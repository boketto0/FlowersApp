// Ваш файл с компонентом CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../../../assets/action';
import { ButtonCart } from '../../../components/buttonCart/ButtonCart';
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../components/cards/CardWrapper';
import './cartPage.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addToCartAction(item));
  };

  return (
    <div className='cartpage__wrapper'>
      <h2>Корзина</h2>
      <CardWrapper type={CardWrapperType.SECOND}>
        {cartItems && cartItems.map((item, index) => (
          <div key={index}>
            <Card
              cardType={CardType.SECOND}
              image={item.image}
              price={item.price}
              title={item.title}
              text={item.text}
            />
          </div>
        ))}
      </CardWrapper>
      <ButtonCart />
    </div>
  );
};

export default CartPage;
