import React from 'react';
import './detailButton.css';
import Icon1 from '../../assets/icons/angle-right.svg'

export const DetailButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
};

export const DetailButton = (props) => {
    const { handleSlide, size, direction, text } = props;

    const detailButtonClass = `detail-button detail-button-${size} ${direction}`;

  const detailButtonIconClass = `detail-button__icon detail-button__icon-${size}`;

    const icon = direction === 'right' ? <img src={Icon1}/> : '<';

    return (
        <div>
            <div className={detailButtonClass}>
                <h5 className='detail-button__text'>{text}</h5>
                <span className={detailButtonIconClass} onClick={handleSlide}>{icon}</span>
            </div>
        </div>
    );
};

