import React, { useRef } from "react";
import { useSprings, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper } from '../../../components/cards/CardWrapper';
import { DetailButton, DetailButtonSize } from '../../../components/detailButton/DetailButton';
import Icon6 from '../../../assets/productPage/flowers6.jpg'
import Icon7 from '../../../assets/productPage/flowers7.jpg'
import Icon8 from '../../../assets/productPage/flowers8.jpg'
import Icon9 from '../../../assets/productPage/flowers9.jpg'

export const AuthorsBouquetsCarousel = () => {
  const index = useRef(0);
  const cardWidth = 50;
  const gap = 4;
  const cardsToScroll = 3;

  const authorsElements = [
    {
      image: <img className='card-first__img' src={Icon6} alt="Flower 6" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon7} alt="Flower 7" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon8} alt="Flower 8" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
    {
      image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
      price: "3500р",
      title: "Розы",
      text: "Красивые"
    },
  ];

  const clonedData = authorsElements.map((_, index) => index);

  const [props, api] = useSprings(clonedData.length, (i) => ({
    x: i * (cardWidth + gap),
    config: { tension: 50, friction: 20 },
  }));

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1),
    onSwipedRight: () => handleSwipe(-1),
    trackMouse: true,
  });

  const handleSwipe = (direction) => {
    const nextIndex = (index.current + direction * cardsToScroll + clonedData.length) % clonedData.length;

    if (nextIndex !== clonedData.length - 1) {
      index.current = nextIndex;
      api.start((i) => ({ x: (i - (index.current + clonedData.length + 5)) * (cardWidth + gap) }));
    }
  };

  return (
    <div className="carousel-container-simple">
      <div className="carousel-simple">
        <CardWrapper {...handlers}>
          {props.map((style, i) => (
            <animated.div key={i} style={{ ...style }}>
              <Card
                cardType={CardType.FIRST}
                image={authorsElements[clonedData[i]].image}
                price={authorsElements[clonedData[i]].price}
                title={authorsElements[clonedData[i]].title}
                text={authorsElements[clonedData[i]].text}
              />
            </animated.div>
          ))}
        </CardWrapper>
      </div>
    </div>
  );
};
