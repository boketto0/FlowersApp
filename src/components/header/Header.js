import './header.css';
import { SearchBox } from '../search/SearchBox'

const Header = ({children}) => {

    return (
        <div className='header__wrapper'>
          {children}
        </div>
    );
};

export default Header;
