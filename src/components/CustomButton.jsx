import React from 'react';
import '../style.css';

const CustomButton = ({value, className, onButtonClick}) => {
    const handleClick = (buttonValue) => {
        console.log(`Button ${buttonValue} clicked`);
    };

    // const buttons = [
    //     { value: 'AC', className: 'that-three-btn' },
    //     { value: '+/-', className: 'that-three-btn' },
    //     { value: '%', className: 'that-three-btn' },
    //     { value: '/', className: 'operator' },
    //     { value: '7', className: '' },
    //     { value: '8', className: '' },
    //     { value: '9', className: '' },
    //     { value: 'x', className: 'operator' },
    //     { value: '4', className: '' },
    //     { value: '5', className: '' },
    //     { value: '6', className: '' },
    //     { value: '-', className: 'operator' },
    //     { value: '1', className: '' },
    //     { value: '2', className: '' },
    //     { value: '3', className: '' },
    //     { value: '+', className: 'operator' },
    //     { value: '0', className: 'zero' },
    //     { value: '.', className: '' },
    //     { value: '=', className: 'operator' }
    // ];

    return (
        <button
            key={value}
            className={className? className: ''}
            onClick={() => onButtonClick(value)}
        >
            {value}
        </button>
    );
};

export default CustomButton;

