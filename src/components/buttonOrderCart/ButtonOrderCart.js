import './buttonOrderCart.css';
import { useNavigate } from 'react-router-dom';

export const ButtonOrderCart = ({ isVisible }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
    navigate('/cart');
    };

    return (
        <div className={`custom-button__cart__wrapper ${isVisible ? 'visible' : ''}`}>
            <button className="custom-button__cart" onClick={handleButtonClick}>
            <span>Заказ</span>
        </button>
        </div>
    );
};