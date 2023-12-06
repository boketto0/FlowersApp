import React, { useState, useEffect, useRef } from 'react';
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper } from '../../../components/cards/CardWrapper';
import { useSprings, animated } from "react-spring";
import { useSwipeable } from "react-swipeable";
import { DetailButton, DetailButtonSize } from '../../../components/detailButton/DetailButton';
import Icon1 from '../../../assets/productPage/flowers1.jpg'
import Icon2 from '../../../assets/productPage/flowers2.jpg'
import Icon3 from '../../../assets/productPage/flowers3.jpg'
import Icon4 from '../../../assets/productPage/flowers4.jpg'
import Icon5 from '../../../assets/productPage/flowers5.jpg'
import { Button, ButtonSize } from '../../../components/button/Button';

const cardWidth = 10;
const gap = 2;
const cardsToScroll = 3;

export const BasketBouquetsCarousel = ( ) => {
    const index = useRef(0);

    const basketElements = [
        {
            image: <img className='card-first__img' src={Icon1}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon2}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon3}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon4}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
            image: <img className='card-first__img' src={Icon5}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые",
            component:<Button size={ButtonSize.SMALL} colored="white"/>
        },
        {
          component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL} />,
        }
    ]

    const [props, api] = useSprings(basketElements.length, (i) => ({
        x: (i - index.current) * (cardWidth + gap),
        config: { tension: 80, friction: 30 },
    }));
    
    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(1),
        onSwipedRight: () => handleSwipe(-1),
        trackMouse: true,
    });
    
    const handleSwipe = (direction) => {
        const nextIndex = (index.current + direction * cardsToScroll + basketElements.length) % basketElements.length;
    
        if (nextIndex !== 0) {
            index.current = nextIndex;
          api.start((i) => ({ x: (i - (index.current - cardsToScroll)) * (cardWidth + gap) }));
        }
    };

    return (
    <div {...handlers}>
        <div className='product-page__text__wrapper'>
            <h2>Букеты в корзинах</h2>
            <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM}/>
        </div>
        <div>
            <CardWrapper>
            {props.map(({ x }, index) => (
            <animated.div key={index} style={{ }}>
                {basketElements[index] && (
                    <Card
                        cardType={CardType.FIRST}
                        image={basketElements[index].image}
                        price={basketElements[index].price}
                        title={basketElements[index].title}
                        text={basketElements[index].text}
                        component={basketElements[index].component}
                    />
                    )}
                    </animated.div>
                    ))}
            </CardWrapper>
        </div>
    </div>
    );
};


