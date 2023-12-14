import './exampleBlock.css';
import { useNavigate } from 'react-router-dom';
import Icon1 from '../../assets/exampleBlock/img1.jpg'
import Icon2 from '../../assets/exampleBlock/img2.jpg'
import Icon3 from '../../assets/exampleBlock/img3.jpg'

export const ExampleBlock = ({ isVisible }) => {
  const navigateAuthor = useNavigate();
  const navigateBasket = useNavigate();
  const navigateMono= useNavigate();

  const handlePageAuthorsClick = () => {
    navigateAuthor('/authorsBouquets');
  };

  const handlePageMonoClick = () => {
    navigateMono('/monoBouquets');
  };

  const handlePageBasketClick = () => {
    navigateBasket('/basketBouquets');
  };

  return (
    <div className="example-block__wrapper">
      <div className='example-cards__wrapper'>
        <img onClick={handlePageAuthorsClick} src={Icon1}></img>
        <span className='example-cards__text'>
          Авторские <br />
          букеты</span>
      </div>
      <div className='example-cards__wrapper'>
        <img onClick={handlePageMonoClick} src={Icon2}></img>
        <span className='example-cards__text'>Моно <br />букеты</span>
      </div>
      <div className='example-cards__wrapper'>
        <img onClick={handlePageBasketClick} src={Icon3}></img>
        <span className='example-cards__text'>Букеты в <br />                       корзинках</span>
      </div>
    </div>
  );
};
