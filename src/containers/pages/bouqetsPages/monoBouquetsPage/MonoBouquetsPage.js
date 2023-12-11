import { monoElements  } from '../../../../assets/data';
import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../../components/cards/CardWrapper';
import Header from '../../../../components/header/Header';

export const MonoBouquetsPage = ( ) => {

    return (
        <div className='authorpage__wrapper'>
            <Header>
                Букеты в корзинах
            </Header>
            <CardWrapper type={CardWrapperType.THIRD}>
                {monoElements  
                .map((monoElements  , index) => (
                    <div key={index}>
                    <Card
                        cardType={CardType.FIRST}
                        image={monoElements .image}
                        price={monoElements .price}
                        title={monoElements .title}
                        text={monoElements .text}
                        component={monoElements .component}
                    />
                    </div>
                ))}
        </CardWrapper>
        </div>
    );
};


