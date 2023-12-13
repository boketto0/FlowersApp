import { Button, ButtonSize } from '../components/button/Button';
import { DetailButton, DetailButtonSize } from '../components/detailButton/DetailButton';
import { useNavigate } from 'react-router-dom';
import Icon1 from '../assets/productPage/flowers1.jpg'
import Icon2 from '../assets/productPage/flowers2.jpg';
import Icon3 from '../assets/productPage/flowers3.jpg';
import Icon4 from '../assets/productPage/flowers4.jpg';
import Icon5 from '../assets/productPage/flowers5.jpg';
import Icon6 from '../assets/productPage/flowers6.jpg';
import Icon7 from '../assets/productPage/flowers7.jpg';
import Icon8 from '../assets/productPage/flowers8.jpg';
import Icon9 from '../assets/productPage/flowers9.jpg';


export const monoElements = [

    {
        id: 1,
        image: <img className='card-first__img' src={Icon9}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button/>
    },
    // {
    //     id: 2,
    //     image: <img className='card-first__img' src={Icon9}/>,
    //     price: "5500р",
    //     title: "Хризантемы букет",
    //     text: "Красивые",
    //     component:<Button/>
    // },
    {
        id: 3,
        image: <img className='card-first__img' src={Icon9}/>,
        price: "1500р",
        title: "Фиалки",
        text: "Красивые",
        component:<Button/>
    },
    {
        id: 4,
        image: <img className='card-first__img' src={Icon9}/>,
        price: "2000р",
        title: "Белые розы",
        text: "Красивые",
        component:<Button/>
    },
    {
        id: 5,
        image: <img className='card-first__img' src={Icon9}/>,
        price: "3500р",
        title: "Авторские розы",
        text: "Красивые",
        component:<Button/>
    },
    {
        component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL}/>,
    },
]

export const basketElements = [
    {
        id: 6,
        image: <img className='card-first__img' src={Icon1}/>,
        price: "5500р",
        title: "Букеты из роз",
        text: "Красивые",
        component:<Button/>
    },
    {
        id: 7,
        image: <img className='card-first__img' src={Icon2}/>,
        price: "6500р",
        title: "Розы",
        text: "Красивые",
        component:<Button/>
    },
    {
        id: 8,
        image: <img className='card-first__img' src={Icon3}/>,
        price: "7500р",
        title: "Розы",
        text: "Красивые",
        component:<Button/>
    },
    {
        id: 9,
        image: <img className='card-first__img' src={Icon4}/>,
        price: "8500р",
        title: "Розы",
        text: "Красивые",
        component:<Button/>
    },
    {
        id: 10,
        image: <img className='card-first__img' src={Icon5}/>,
        price: "9500р",
        title: "Розы",
        text: "Красивые",
        component:<Button/>
    },
    {
        component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL} />,
    }
]


export const authorsElements = [
{
  id: 11,
  image: <img className='card-first__img' src={Icon6} alt="Flower 6" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button/>
},
{
  id: 12,
  image: <img className='card-first__img' src={Icon7} alt="Flower 7" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button/>
},
{
  id: 13,
  image: <img className='card-first__img' src={Icon8} alt="Flower 8" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button/>
},
{
  id: 14,
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button/>
},
{
  id: 15,
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button/>
},
{
  id: 16,
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button/>
},
{
  id: 17,
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button/>
},
{
  component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL} />,
  // text: "Все товары",
},
];