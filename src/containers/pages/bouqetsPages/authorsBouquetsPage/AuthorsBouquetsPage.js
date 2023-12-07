import React, { useState } from 'react';
import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper } from '../../../../components/cards/CardWrapper';
import { Button, ButtonSize } from '../../../../components/button/Button';
import { DetailButton, DetailButtonSize } from '../../../../components/detailButton/DetailButton';
import { CardWrapperPages } from '../../../../components/cards/cardWrapperPages/CardWrapperPages';
import Header from '../../../../components/header/Header';
import Icon6 from '../../../../assets/productPage/flowers6.jpg'
import Icon7 from '../../../../assets/productPage/flowers7.jpg';
import Icon8 from '../../../../assets/productPage/flowers8.jpg';
import Icon9 from '../../../../assets/productPage/flowers9.jpg';

export const AuthorsBouquetsPage = ( ) => {

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

    ];

    return (
        <div className='authorpage__wrapper'>
            <Header>
              Авторские букеты
            </Header>
            <CardWrapperPages>
                {authorsElements
                .map((authorsElements, index) => (
                    <div key={index}>
                    <Card
                        cardType={CardType.FIRST}
                        image={authorsElements.image}
                        price={authorsElements.price}
                        title={authorsElements.title}
                        text={authorsElements.text}
                        component={authorsElements.component}
                    />
                    </div>
                ))}
        </CardWrapperPages>
        </div>
    );
};


