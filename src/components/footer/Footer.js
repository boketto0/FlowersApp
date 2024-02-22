import './footer.css';
import Icon1 from '../../assets/icons/clock.svg'

export const Footer = () => {

return (
    <div className="footer">
        <img className='footer-icon' src={Icon1}/>
        <span className="footer-text">Доставка с 09:30</span>
    </div>
);
};
