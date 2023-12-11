import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../../components/cards/CardWrapper';
import { authorsElements } from '../../../../assets/data';
import Header from '../../../../components/header/Header';

export const AuthorsBouquetsPage = ( ) => {

    return (
        <div className='authorpage__wrapper'>
            <Header>
                Авторские букеты
            </Header>
            <CardWrapper type={CardWrapperType.THIRD}>
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
        </CardWrapper>
        </div>
    );
};


