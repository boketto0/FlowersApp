import React, { useState, useEffect, useRef } from 'react';
import { Card, CardType } from '../../../components/cards/Card';
import { useSprings, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";
import { CardWrapper } from '../../../components/cards/CardWrapper';
import { Button, ButtonSize } from '../../../components/button/Button';
import { DetailButton, DetailButtonSize } from '../../../components/detailButton/DetailButton';
import Icon9 from '../../../assets/productPage/flowers9.jpg'

const cardWidth = 10;
const gap = 2;
const cardsToScroll = 3;

export const MonoBouquetsCarousel = () => {
    const index = useRef(0);

    const monoElements = [
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
          component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL} />,
        },
    ]

    const [props, api] = useSprings(monoElements.length, (i) => ({
        x: (i - index.current) * (cardWidth + gap),
        config: { tension: 80, friction: 30 },
    }));

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(1),
        onSwipedRight: () => handleSwipe(-1),
        trackMouse: true,
    });

    const handleSwipe = (direction) => {
    const nextIndex = (index.current + direction * cardsToScroll + monoElements.length) % monoElements.length;

    if (nextIndex !== 0) {
        index.current = nextIndex;
        api.start((i) => ({ x: (i - (index.current - cardsToScroll)) * (cardWidth + gap) }));
    }
};


    return (
    <div {...handlers}>
        <div className='product-page__text__wrapper'>
            <h2>Моно букеты</h2>
            <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} />
        </div>
        <div>
        <CardWrapper>
            {props.map(({ x }, index) => (
                <animated.div key={index} style={{ }}>
                {monoElements[index] && (
                    <Card
                        cardType={CardType.FIRST}
                        image={monoElements[index].image}
                        price={monoElements[index].price}
                        title={monoElements[index].title}
                        text={monoElements[index].text}
                        component={monoElements[index].component}
                        />
                        )}
                </animated.div>
            ))}
        </CardWrapper>
        </div>
    </div>
  );
};

