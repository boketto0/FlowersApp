import { Carousel } from '../../../components/carousel/Carousel';
import { monoElements, authorsElements, basketElements } from '../../../assets/data';
import { CardWrapperType } from '../../../components/cards/CardWrapper';
import './productPage.css';

const ProductPage = ( ) => {

  return (
    <div className='product-page__wrapper'>
      <Carousel elements={authorsElements} title="Авторские букеты" wrapperType={CardWrapperType.FIRST} />
      <Carousel elements={basketElements} title="Букеты в корзинах" wrapperType={CardWrapperType.FIRST} />
      <Carousel elements={monoElements} title="Моно букеты" wrapperType={CardWrapperType.FIRST} />
    </div>
  );
};

export default ProductPage;
