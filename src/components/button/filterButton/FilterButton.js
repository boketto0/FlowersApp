import './filterButton.css';

export const FilterButton = ({ children, onClick }) => {
    return (
        <div className="filter-button" onClick={onClick}>
            <span className='filter-button__text'>{children}</span>
        </div>
    );
};
