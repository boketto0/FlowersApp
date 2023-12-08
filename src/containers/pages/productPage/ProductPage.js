// Ваш файл с компонентом ProductPage.js
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../assets/action';
import { authorsElements, monoElements, basketElements } from '../../../assets/data';
import { Carousel } from '../../../components/carousel/Carousel';
import { CardWrapperType } from '../../../components/cards/CardWrapper';

const ProductPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className='product-page__wrapper'>
      <Carousel elements={authorsElements} title="Авторские букеты" wrapperType={CardWrapperType.FIRST} onAddToCart={handleAddToCart}/>
      <Carousel elements={basketElements} title="Букеты в корзинах" wrapperType={CardWrapperType.FIRST} onAddToCart={handleAddToCart}/>
      <Carousel elements={monoElements} title="Моно букеты" wrapperType={CardWrapperType.FIRST} onAddToCart={handleAddToCart}/>
    </div>
  );
};

export default ProductPage;
