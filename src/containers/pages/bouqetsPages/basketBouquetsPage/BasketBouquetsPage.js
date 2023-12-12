import { basketElements } from '../../../../assets/data';
import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../../components/cards/CardWrapper';
import Header from '../../../../components/header/Header';
import { Link } from 'react-router-dom';
import Icon1 from '../../../../assets/icons/arrow-left.svg'

export const BasketBouquetsPage = ( ) => {

    return (
        <div className='authorpage__wrapper'>
            <Header>
            <Link to="/" className="header__back-button">
                <img className='header__back__icon' src={Icon1}/>
            </Link>
            <h5 className='header__text'>Букеты в корзинах</h5>
            </Header>
            <CardWrapper type={CardWrapperType.THIRD}>
            {basketElements.slice(0, -1).map((item) => (
                <Card key={item.id} cartItem={item} cardType={CardType.FIRST} />
            ))}
            </CardWrapper>
        </div>
    );
};


