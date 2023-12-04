import React, { useState, useEffect } from 'react';
import { Card, CardType } from '../../../components/cards/Card';
import { CardWrapper } from '../../../components/cards/CardWrapper';
import { DetailButton, DetailButtonSize } from '../../../components/detailButton/DetailButton';
import Icon9 from '../../../assets/productPage/flowers9.jpg'

export const MonoBouquetsCarousel = ({ handleSlide }) => {

    const monoElements = [
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        },
        {
            image: <img className='card-first__img' src={Icon9}/>,
            price: "3500р",
            title: "Розы",
            text: "Красивые"
        }
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
            <h2>Моно букеты</h2>
            <DetailButton direction={'right'} size={DetailButtonSize.MEDIUM} handleSlide={handleSlide} />
        </div>
        <div className='product-page__carousel__wrapper'>
            <DetailButton direction={'left'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('left')} />
            <CardWrapper>
                {monoElements
                .slice(slideIndex, slideIndex + visibleCards)
                .map((mel, index) => (
                <div key={index}>
                    <Card
                        cardType={CardType.FIRST}
                        image={mel.image}
                        price={mel.price}
                        title={mel.title}
                        text={mel.text}
                    />
                </div>
            ))}
            </CardWrapper>
            <DetailButton direction={'right'} size={DetailButtonSize.SMALL} handleSlide={() => handleSlide('right')} />
        </div>
    </div>
    );
};


