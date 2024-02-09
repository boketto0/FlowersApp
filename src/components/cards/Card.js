import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { DetailButton, DetailButtonSize } from '../detailButton/DetailButton';
import { Button, ButtonType } from '../button/Button';
import { cartActions } from '../../assets/store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

import './Card.css';

export const CardType = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third"
};

export const Card = memo((props) => {
  const { cartItem, cardType, isLastCard, dataArrayType } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartStore.cart);
  const navigate = useNavigate();

  const itemCount = useMemo(() => {
    const addedItems = cartItems?.filter((item) => item.id === cartItem.id) || [];
    return addedItems.length;
  }, [cartItem, cartItems]);

  const handleAddToCart = useCallback(() => {
    const { image, price, text, title, id } = cartItem;

    if (image && price && text && title) {
      dispatch(cartActions.addToCart({ image, price, text, title, id }));
    }
  }, [dispatch, cartItem]);

  const handleRemoveFromCart = useCallback(() => {
    const { id } = cartItem;
    dispatch(cartActions.removeFromCart(id));
  }, [cartItem, dispatch]);

  const defaultCardType = CardType.FIRST;

  const handleDetailButtonClick = () => {
    switch (dataArrayType) {
      case "authors":
        navigate('/authorsBouquets');
        break;
      case "basket":
        navigate('/basketBouquets');
        break;
      case "mono":
        navigate('/monoBouquets');
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className={`card-${cardType || defaultCardType}`}>
        {cardType === CardType.FIRST && (
          <div className='card-first__content'>
            <div className='card-first__img'>{cartItem.image}</div>
            <span className='card-first__price'>{cartItem.price}</span>
            <div className="card-title">{cartItem.title}</div>
            <div className="card-text">{cartItem.text}</div>
            <div>
              {isLastCard ? (
                <div className='last-card__wrapper'>
                  <h5>Все товары</h5>
                  <DetailButton
                    direction={'right'}
                    size={DetailButtonSize.SMALL}
                    handleSlide={handleDetailButtonClick}
                  />
                </div>
              ) : (
                <div className='card-first__button'>
                  <Button
                    type={ButtonType.PRIMARY}
                    onAdd={handleAddToCart}
                    onRemove={handleRemoveFromCart}
                    value={itemCount}
                  />
                </div>
              )}
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
            <Button
              type={ButtonType.SECONDARY}
              className='button-click__cart'
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
              value={itemCount}
            />
          </div>
        )}

          {cardType === CardType.THIRD && (
          <div className='card-first__content'>
            <div className='card-first__img'>{cartItem.image}</div>
            <span className='card-first__price'>{cartItem.price}</span>
            <div className="card-title">{cartItem.title}</div>
            <div className="card-text">{cartItem.text}</div>
            <div>
              {isLastCard ? (
                <div className='detail-card__text'>
                  <h5 className='detail-card__text'>Все товары</h5>
                  <DetailButton
                    direction={'right'}
                    size={DetailButtonSize.SMALL}
                    handleSlide={handleDetailButtonClick}
                  />
                </div>
              ) : (
                <div className='card-first__button'>
                  <Button
                    type={ButtonType.PRIMARY}
                    onAdd={handleAddToCart}
                    onRemove={handleRemoveFromCart}
                    value={itemCount}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

Card.propTypes = {
  cartItem: PropTypes.object.isRequired,
  cardType: PropTypes.oneOf(Object.values(CardType)),
  dataArrayType: PropTypes.string.isRequired,
  isLastCard: PropTypes.bool,
};
