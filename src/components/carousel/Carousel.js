import React, { useRef } from 'react';
import { animated, useSprings } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import { Card, CardType } from '../cards/Card';
import { CardWrapper } from '../cards/CardWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../../assets/action';
import { DetailButton, DetailButtonSize } from '../detailButton/DetailButton';

const cardWidth = 10;
const gap = 2;
const cardsToScroll = 3;

export const Carousel = ({ elements, title, wrapperType }) => {
  const index = useRef(0);
  const dispatch = useDispatch();

  const [props, api] = useSprings(elements.length, (i) => ({
    x: (i - index.current) * (cardWidth + gap),
    config: { tension: 80, friction: 30 },
  }));

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
    trackMouse: true,
  });

  const handleSwipe = (direction) => {
    const nextIndex = (index.current + direction * cardsToScroll + elements.length) % elements.length;

    if (nextIndex !== 0) {
      index.current = nextIndex;
      api.start((i) => ({ x: (i - (index.current - cardsToScroll)) * (cardWidth + gap) }));
    }
  };

  const addToCart = (item) => {
    dispatch(addToCartAction(item));
  };

  const handleButtonClick = (image, title, text, price, count) => {
    addToCart({ image, title, text, price});
  };

  return (
    <div {...handlers}>
      <div className='product-page__text__wrapper'>
        <h2>{title}</h2>
        <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} />
      </div>
      <div>
        <CardWrapper type={wrapperType}>
          {props.map(({ x }, index) => (
            <animated.div key={index} style={{  }}>
              {elements[index] && (
                <Card
                  cardType={CardType.FIRST}
                  image={elements[index].image}
                  title={elements[index].title}
                  text={elements[index].text}
                  price={elements[index].price}
                  component={elements[index].component}
                  onClick={(image, title, text, price, count) => handleButtonClick(image, price, title, text)}
                />
              )}
            </animated.div>
          ))}
        </CardWrapper>
      </div>
    </div>
  );
};
