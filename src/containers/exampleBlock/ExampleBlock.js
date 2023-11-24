import './exampleBlock.css';
import Icon1 from '../../assets/exampleBlock/img1.jpg'
import Icon2 from '../../assets/exampleBlock/img2.jpg'
import Icon3 from '../../assets/exampleBlock/img3.jpg'

export const ExampleBlock = () => {

    return (
        <div className='example-block__wrapper'>
            <div className='example-cards__wrapper'>
                <img src={Icon1}></img>
                <span>Авторские букеты</span>
            </div>
            <div className='example-cards__wrapper'>
                <img src={Icon2}></img>
                <span>Моно букеты</span>
            </div>
            <div className='example-cards__wrapper'>
                <img src={Icon3}></img>
                <span>Букеты в корзинках</span>
            </div>
        </div>
    );
};

