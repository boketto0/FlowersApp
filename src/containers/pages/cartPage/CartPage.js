import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../components/cards/CardWrapper';
import { ButtonCart } from '../../../components/buttonCart/ButtonCart';
import './cartPage.css';
import { cartActions } from '../../../assets/store/slices/cartSlice';
import Icon1 from '../../../assets/icons/trash.svg'

const CartPage = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartStore.cart);

  const uniqueItems = useMemo(() => {
    const ids = cartItems.map((item) => item.id);
    const uniqueIds = [...new Set(ids)];

    return uniqueIds.map((id) => {
      const item = cartItems.find((item) => item.id === id);

      return item;
    })
  }, [cartItems]);

  const handleClickClear = () => dispatch(cartActions.clearCart());

  return (
    <div className='cartpage__wrapper'>
      <h2>Корзина</h2>
      <CardWrapper type={CardWrapperType.SECOND}>
        {uniqueItems.map((item, index) => (
          <div key={index}>
            <Card
              cardType={CardType.SECOND}
              cartItem={item}
            />
          </div>
        ))}
      </CardWrapper>

      <ButtonCart />

      {uniqueItems.length > 0 && 
      <button className='button__clear' onClick={handleClickClear}>
        <img src={Icon1}/>
        <h5>Очистить</h5>
      </button> }
    </div>
  );
};

export default CartPage;
