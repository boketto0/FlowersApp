import React, { memo, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';

import { Button, ButtonType } from '../button/Button';
import { ButtonOrder } from '../button/ButtonOrder';

import { cartActions } from '../../assets/store/slices/cartSlice';

import './Card.css';

export const CardType = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third"
};

export const Card = memo((props) => {
  const { cartItem, cardType} = props;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartStore.cart);

  const itemCount = useMemo(() => {
    const addedItems = cartItems?.filter((item) => item.id === cartItem.id) || [];

    return addedItems.length;
  }, [cartItem, cartItems]);

  const handleAddToCart = useCallback(() => {
    const { image, price, text, title, id } = cartItem;

    if (image && price && text && title) {
      dispatch(cartActions.addToCart({ image, price, text, title, id, }))
    }
  }, [dispatch, cartItem]);

  const handleRemoveFromCart = useCallback(() => {
    const { image, price, text, title, id } = cartItem;

    if (price && text && title) {
      dispatch(cartActions.removeFromCart(id))
    }
  }, [cartItem, dispatch]);

  const defaultCardType = CardType.FIRST;

  return (
    <div>
      <div className={`card-${cardType || defaultCardType}`}>
        {cardType === CardType.FIRST && (
          <div>
            {/* <div className='card-first__img'>
            <img src={cartItem.image} alt="preview" />
          </div> */}
            <div className='card-first__img'>{cartItem.image}</div>
            <span className='card-first__price'>{cartItem.price}</span>
            <div className="card-title">{cartItem.title}</div>
            <div className="card-text">{cartItem.text}</div>
            <div className='card-first__button'>
              <Button type={ButtonType.PRIMARY} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} value={itemCount} />
            </div>
          </div>
        )}
        {cardType === CardType.SECOND && (
          <div className='card-second'>
            <div className='card-second__img'>{cartItem.image}</div>
            <div className='card-second__content__wrapper'>
              <div className="card-title">{cartItem.title}</div>
              <div className="card-text">{cartItem.text}</div>
              <span className='card-first__price'>{cartItem.price}</span>
            </div>
            <Button type={ButtonType.SECONDARY} className='button-click__cart' onAdd={handleAddToCart} onRemove={handleRemoveFromCart} value={itemCount} />
          </div>
        )}
      </div>
    </div>
  );
});

Card.propTypes = {
  cartItem: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired,
  cardType: PropTypes.oneOf(Object.values(CardType)),
  // title: PropTypes.string,
  // text: PropTypes.string,
  // component: PropTypes.node,
  onClick: PropTypes.func,
};