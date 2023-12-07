import { Button, ButtonSize } from '../components/button/Button';
import { DetailButton, DetailButtonSize } from '../components/detailButton/DetailButton';
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
        image: <img className='card-first__img' src={Icon9}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon9}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon9}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon9}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon9}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL} />,
    },
]

export const basketElements = [
    {
        image: <img className='card-first__img' src={Icon1}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon2}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon3}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon4}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        image: <img className='card-first__img' src={Icon5}/>,
        price: "3500р",
        title: "Розы",
        text: "Красивые",
        component:<Button size={ButtonSize.SMALL} colored="white"/>
    },
    {
        component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL} />,
    }
]


export const authorsElements = [
{
  image: <img className='card-first__img' src={Icon6} alt="Flower 6" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button size={ButtonSize.SMALL} colored="white"/>
},
{
  image: <img className='card-first__img' src={Icon7} alt="Flower 7" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button size={ButtonSize.SMALL} colored="white"/>
},
{
  image: <img className='card-first__img' src={Icon8} alt="Flower 8" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button size={ButtonSize.SMALL} colored="white"/>
},
{
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button size={ButtonSize.SMALL} colored="white"/>
},
{
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button size={ButtonSize.SMALL} colored="white"/>
},
{
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button size={ButtonSize.SMALL} colored="white"/>
},
{
  image: <img className='card-first__img' src={Icon9} alt="Flower 9" />,
  price: "3500р",
  title: "Розы",
  text: "Красивые",
  component:<Button size={ButtonSize.SMALL} colored="white"/>
},
{
  component: <DetailButton direction={'right'} size={DetailButtonSize.SMALL} />,
  // text: "Все товары",
},
];