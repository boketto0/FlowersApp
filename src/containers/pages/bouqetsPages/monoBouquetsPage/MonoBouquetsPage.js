import { monoElements } from '../../../../assets/data';
import { Card, CardType } from '../../../../components/cards/Card';
import { CardWrapper, CardWrapperType } from '../../../../components/cards/CardWrapper';
import Header from '../../../../components/header/Header';
import { Link } from 'react-router-dom';
import Icon1 from '../../../../assets/icons/arrow-left.svg';
import { FilterButton } from '../../../../components/button/filterButton/FilterButton';
import { useSelector } from 'react-redux';
import { ButtonOrderCart } from '../../../../components/buttonOrderCart/ButtonOrderCart';

export const MonoBouquetsPage = () => {
    const cartItems = useSelector((state) => state.cartStore.cart);

    const rosesIds = [1, 2, 3];
    const violetsIds = [4, 5];
    const peoniesIds = [6, 7];
    const tulipsIds = [8, 9];
    const chrysanthemumsIds = [10];
    const irisesIds = [11, 12, 13];
    const gerberasIds = [14, 15, 16, 17];

    const flowerTypes = ['Розы', 'Фиалки', 'Пионы', 'Тюльпаны', 'Хризантемы', 'Ирисы', 'Герберы'];

    const getIdsByType = (type) => {
        switch (type) {
            case 'Розы':
                return rosesIds;
            case 'Фиалки':
                return violetsIds;
            case 'Пионы':
                return peoniesIds;
            case 'Тюльпаны':
                return tulipsIds;
            case 'Хризантемы':
                return chrysanthemumsIds;
            case 'Ирисы':
                return irisesIds;
            case 'Герберы':
                return gerberasIds;
            default:
                return [];
        }
    };

    const scrollToType = (type) => {
        const element = document.getElementById(type.toLowerCase().replace(' ', '-'));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
        }
    };

    const cardWrappers = flowerTypes.map((type, index) => (
        <div key={index} id={type.toLowerCase().replace(' ', '-')}>
            <h4>{type}</h4>
            <CardWrapper type={CardWrapperType.THIRD}>
                {monoElements
                    .filter((item) => getIdsByType(type).includes(item.id))
                    .map((item) => (
                        <Card key={item.id} cartItem={item} cardType={CardType.THIRD} />
                    ))}
            </CardWrapper>
        </div>
    ));

    return (
        <div>
            <Header>
                <Link to="/" className="header__back-button">
                    <img className='header__back__icon' src={Icon1} alt="Back Icon" />
                </Link>
                <h5 className='header__text'>Моно букеты</h5>
            </Header>
            <div className="cardwrapper-third__style__mono">
                <div className='filter-button__wrapper'>
                    {flowerTypes.map((type) => (
                        <FilterButton key={type} onClick={() => scrollToType(type)}>
                            {type}
                        </FilterButton>
                    ))}
                </div>
                {cardWrappers}
                {cartItems?.length > 0 && <ButtonOrderCart />}
            </div>
        </div>
    );
};
