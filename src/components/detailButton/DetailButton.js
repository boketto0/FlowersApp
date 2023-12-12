import React from 'react';
import './detailButton.css';
import Icon1 from '../../assets/icons/angle-right.svg'

export const DetailButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
};

export const DetailButton = (props) => {
    const { handleSlide, size, direction } = props;

    const detailButtonClass = `detail-button detail-button-${size} ${direction}`;

    const icon = direction === 'right' ? <img src={Icon1}/> : '<';

    return (
        <div className={detailButtonClass}>
            <span className='detail-button__icon' onClick={handleSlide}>{icon}</span>
        </div>
    );
};

