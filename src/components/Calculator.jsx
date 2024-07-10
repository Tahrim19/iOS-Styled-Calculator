import React, { useState } from 'react';
import '../style.css';
import Button from './Button';

const Calculator = () => {
    const[displayValue , setDisplayValue] = useState('')
    const handleButtonClick = (buttonValue) => {
        if (buttonValue === 'AC') {
            setDisplayValue('');
        } else if (buttonValue === '=') {
            try {
                const evaluatedValue = eval(displayValue.replace(/x/g, '*'));
                setDisplayValue(String(evaluatedValue));
            } catch (error) {
                setDisplayValue('Error');
            }
        } else {
            setDisplayValue(prevValue => prevValue + buttonValue);
        }
    };

    return (
        <div className='calculator'>
            <div className='display'>{displayValue}</div>
            <Button onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;

