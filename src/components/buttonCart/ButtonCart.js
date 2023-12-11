import './buttonCart.css';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../assets/store/slices/cartSlice';

export const ButtonCart = () => {
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className={`button__cart__wrapper`}>
      <button className="button__cart">
        <span>Заказать</span>
        {totalPrice > 0 && <span className="total-price">{totalPrice}р</span>}
      </button>
    </div>
  );
};