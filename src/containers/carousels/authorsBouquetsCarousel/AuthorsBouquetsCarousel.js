import React, { useRef } from "react";
import { useSprings, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";
import { Button, ButtonSize } from "../../../components/button/Button";
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper } from '../../../components/cards/CardWrapper';
import { DetailButton, DetailButtonSize } from '../../../components/detailButton/DetailButton';
import Icon6 from '../../../assets/productPage/flowers6.jpg';
import Icon7 from '../../../assets/productPage/flowers7.jpg';
import Icon8 from '../../../assets/productPage/flowers8.jpg';
import Icon9 from '../../../assets/productPage/flowers9.jpg';

const cardWidth = 10;
const gap = 2;
const cardsToScroll = 3;

export const AuthorsBouquetsCarousel = () => {
  const index = useRef(0);

  const authorsElements = [
    {
      image: <img className='card-first__img' src={Icon6} alt="Flower 6" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые",
      component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
      image: <img className='card-first__img' src={Icon7} alt="Flower 7" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые",
      component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
      image: <img className='card-first__img' src={Icon8} alt="Flower 8" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые",
      component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
      image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые",
      component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
      image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые",
      component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
      image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые",
      component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
      image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые",
      component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
      
    },
  ];

  
  const [props, api] = useSprings(authorsElements.length, (i) => ({
    x: (i - index.current) * (cardWidth + gap),
    config: { tension: 80, friction: 30 },
  }));

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
    trackMouse: true,
  });

  const handleSwipe = (direction) => {
    const nextIndex = (index.current + direction * cardsToScroll + authorsElements.length) % authorsElements.length;

    if (nextIndex !== 0) {
      index.current = nextIndex;
      api.start((i) => ({ x: (i - (index.current - cardsToScroll)) * (cardWidth + gap) }));
    }
  };

  return (
    <div {...handlers}>
      <div className='product-page__text__wrapper'>
        <h2>Авторские букеты</h2>
        <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} />
      </div>
      <div>
        <CardWrapper>
          {props.map(({ x }, index) => (
            <animated.div key={index} style={{ }}>
              {authorsElements[index] && (
                <Card
                  cardType={CardType.FIRST}
                  image={authorsElements[index].image}
                  price={authorsElements[index].price}
                  title={authorsElements[index].title}
                  text={authorsElements[index].text}
                  component={<Button size={ButtonSize.SMALL} colored="white" />}
                />
              )}
            </animated.div>
          ))}
        </CardWrapper>
      </div>
    </div>
  );
};