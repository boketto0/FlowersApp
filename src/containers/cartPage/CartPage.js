// Ваш файл с компонентом CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../components/cards/CardWrapper';
import { ButtonCart } from '../../../components/buttonCart/ButtonCart';
import './cartPage.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!cartItems) {
    return null; // или другая логика, если cartItems не определено
  }

  const handleRemoveFromCart = (index) => {
    // Добавьте действие удаления из корзины
    // dispatch(removeFromCartAction(index));
  };

  return (
    <div className='cartpage__wrapper'>
      <h2>Корзина</h2>
      <CardWrapper type={CardWrapperType.SECOND}>
        {cartItems.map((item, index) => (
          <div key={index}>
            <Card
              cardType={CardType.SECOND}
              price={item.price}
              image={item.image}
              title={item.title}
              text={item.text}
            />
            <ButtonCart onClick={() => handleRemoveFromCart(index)} />
          </div>
        ))}
      </CardWrapper>
      <ButtonCart />
    </div>
  );
};

export default CartPage;
