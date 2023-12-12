import './header.css';

const Header = ({children}) => {

    return (
        <div className='header__wrapper'>
          {children}
        </div>
    );
};

export default Header;
