import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../../components/cards/CardWrapper';
import { authorsElements } from '../../../../assets/data';
import Header from '../../../../components/header/Header';
import { Link } from 'react-router-dom';
import Icon1 from '../../../../assets/icons/arrow-left.svg'
import { useSelector } from 'react-redux';
import { ButtonOrderCart } from '../../../../components/buttonOrderCart/ButtonOrderCart';

export const AuthorsBouquetsPage = ( ) => {

    const cartItems = useSelector((state) => state.cartStore.cart);

    return (
        <div className='authorpage__wrapper'>
        <Header>
            <Link to="/" className="header__back-button">
                <img className='header__back__icon' src={Icon1}/>
            </Link>
            <h5 className='header__text'>Авторские букеты</h5>
        </Header>
        <CardWrapper className="cardwrapper-third__style" type={CardWrapperType.THIRD}>
            {authorsElements.slice(0, -1).map((item) => (
                <Card key={item.id} cartItem={item} cardType={CardType.THIRD} />
            ))}
        </CardWrapper>
        {cartItems?.length > 0 && <ButtonOrderCart />}
    </div>
    );
};


