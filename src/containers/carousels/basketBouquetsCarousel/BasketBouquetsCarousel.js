import React, { useState, useEffect } from 'react';
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper } from '../../../components/cards/CardWrapper';
import { DetailButton, DetailButtonSize } from '../../../components/detailButton/DetailButton';
import Icon1 from '../../../assets/productPage/flowers1.jpg'
import Icon2 from '../../../assets/productPage/flowers2.jpg'
import Icon3 from '../../../assets/productPage/flowers3.jpg'
import Icon4 from '../../../assets/productPage/flowers4.jpg'
import Icon5 from '../../../assets/productPage/flowers5.jpg'

export const BasketBouquetsCarousel = ({ handleSlide }) => {

    const basketElements = [
        {
            image: <img className='card-first__img' src={Icon1}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon2}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon3}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon4}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon5}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
    ]
    const [slideIndex, setSlideIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const updateVisibleCards = () => {
        const screenWidth = window.innerWidth;
        setVisibleCards(screenWidth >= 768 ? 5 : 2);
    };

    window.addEventListener('resize', updateVisibleCards);
    updateVisibleCards();

    return () => {
        window.removeEventListener('resize', updateVisibleCards);
    };
    }, []);

    return (
    <div>
        <div className='product-page__text__wrapper'>
            <h2>Букеты в корзинах</h2>
            <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} handleSlide={handleSlide} />
        </div>
        <div className='product-page__carousel__wrapper'>
            <DetailButton direction={'left'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('left')} />
            <CardWrapper>
                {basketElements
                .slice(slideIndex, slideIndex + visibleCards)
                .map((bel, index) => (
                <div key={index}>
                    <Card
                        cardType={CardType.FIRST}
                        image={bel.image}
                        price={bel.price}
                        title={bel.title}
                        text={bel.text}
                    />
                </div>
            ))}
            </CardWrapper>
            <DetailButton direction={'right'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('right')} />
        </div>
    </div>
    );
};

