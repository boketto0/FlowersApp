import React, { useRef } from 'react';
import { animated, useSprings } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import { Card, CardType } from '../cards/Card';
import { CardWrapper } from '../cards/CardWrapper';
import { DetailButton, DetailButtonSize } from '../detailButton/DetailButton';

const cardWidth = 10;
const gap = 2;
const cardsToScroll = 3;

export const Carousel = ({ elements, title, wrapperType, dataArrayType }) => {
  const index = useRef(0);

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

  return (
    <div {...handlers}>
      <div className='product-page__text__wrapper'>
        <h2>{title}</h2>
        <DetailButton size={DetailButtonSize.MEDIUM}/>
      </div>
      <div>
        <CardWrapper type={wrapperType}>
          {props.map(({ x }, index) => (
            <animated.div key={index} style={{  }}>
              {elements[index] && (
                <Card
                  cardType={CardType.FIRST}
                  cartItem={elements[index]}
                  isLastCard={index === elements.length - 1}
                  dataArrayType={dataArrayType} // Передача dataArrayType в компонент Card
                />
              )}
            </animated.div>
          ))}
        </CardWrapper>
      </div>
    </div>
  );
};