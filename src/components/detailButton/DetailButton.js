import { useState } from 'react';
import './detailButton.css';

export const DetailButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
};

export const DetailButton = (props) => {

    const { onClick, handleSlide, size, direction } = props;

    const detailButtonClass = `detail-button detail-button-${size} ${direction}`

    const icon = direction === 'right' ? '>' : '<';

    return (
        <div className={detailButtonClass}>
            <span className='detail-button__icon' onClick={handleSlide}>{icon}</span>
        </div>
    );
};
