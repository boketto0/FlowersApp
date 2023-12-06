import './header.css';
import { SearchBox } from '../search/SearchBox'

const Header = () => {

    return (
        <div className='header__wrapper'>
            <SearchBox/>
        </div>
    );
};

export default Header;
