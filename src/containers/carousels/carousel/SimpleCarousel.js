import React, { useRef } from "react";
import { useSprings, animated, config } from "react-spring";
import { useSwipeable } from "react-swipeable";
import "./simpleCarousel.css";

const dataCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const cardWidth = 50;
const gap = 4;
const cardsToScroll = 3;

export const SimpleCarousel = () => {
  const index = useRef(0);
  const carouselRef = useRef(null);

  const clonedData = [...dataCards, ...dataCards, ...dataCards];

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
    const nextIndex = (index.current + direction * cardsToScroll + dataCards.length) % dataCards.length;

    if (nextIndex !== dataCards.length - 1) {
      index.current = nextIndex;
      api.start((i) => ({ x: (i - (index.current + dataCards.length + 5)) * (cardWidth + gap) }));
    }
  };

  return (
    <div className="carousel-container-simple" {...handlers}>
      <div className="carousel-simple" ref={carouselRef}>
        {props.map((style, i) => (
          <animated.div key={i} className="card-carousel" style={{ ...style }}>
            {clonedData[i]}
          </animated.div>
        ))}
      </div>
    </div>
  );
};