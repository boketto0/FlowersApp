import { basketElements } from '../../../../assets/data';
import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../../components/cards/CardWrapper';
import Header from '../../../../components/header/Header';

export const BasketBouquetsPage = ( ) => {

    return (
        <div className='authorpage__wrapper'>
            <Header>
                Букеты в корзинах
            </Header>
            <CardWrapper type={CardWrapperType.THIRD}>
                {basketElements 
                .map((basketElements , index) => (
                    <div key={index}>
                    <Card
                        cardType={CardType.FIRST}
                        image={basketElements.image}
                        price={basketElements.price}
                        title={basketElements.title}
                        text={basketElements.text}
                        component={basketElements.component}
                    />
                    </div>
                ))}
        </CardWrapper>
        </div>
    );
};


