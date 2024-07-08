import React from 'react';
import '../style.css';

const Button = () => {
    const handleClick = (buttonValue) => {
        console.log(`Button ${buttonValue} clicked`);
    };

    return (
        <div className='buttons'>
            <button className='that-three-btn' onClick={() => handleClick('AC')}>AC</button>
            <button className='that-three-btn' onClick={() => handleClick('+/-')}>+/-</button>
            <button className='that-three-btn' onClick={() => handleClick('%')}>%</button>
            <button className='operator' onClick={() => handleClick('/')}>/</button>

            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button className='operator' onClick={() => handleClick('x')}>x</button>


            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button className='operator'onClick={() => handleClick('-')}>-</button>


            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button className='operator' onClick={() => handleClick('+')}>+</button>

            <button className='zero' onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button className='operator' onClick={() => handleClick('=')}>=</button>



            
           
        </div>
    );
};

export default Button;
