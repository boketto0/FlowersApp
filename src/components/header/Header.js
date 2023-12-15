import './header.css';
import Icon2 from '../../assets/icons/plant.svg'

const Header = ({children}) => {

    return (
      <div className={`search-box__wrapper`}>
      <div className='search-header__block'>
        <div className="search-wrapper__text">
          <img src={Icon2} alt="Bloombox Icon"/>
          <h5>Bloombox</h5>
        </div>
      </div>
      <div className='search-box__border'>
      <div className="search-box__header">
          {/* <span className="search-icon">
            <img src={Icon1} alt="Search Icon" />
          </span> */}
          {children}
        </div>
      </div>
    </div>
    );
};

export default Header;
