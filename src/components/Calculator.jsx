// import React from 'react';
// import '../style.css';
// import Button from './Button';

// export default function Calculator() {
//     const handleClick = (buttonValue) => {
//         console.log(`Button ${buttonValue} clicked`);
//         // Implement logic to handle button clicks
//     };

//     return (
//         <div className='calculator'>
//             <div>
//                 <Button onClick={handleClick} />
//             </div>
//         </div>
//     );
// }

import React from 'react';
import '../style.css';
import Button from './Button';

const Calculator = () => {


    return (
        <div className='calculator'>
            <div className='display'>0</div>
            <Button/> 
        </div>
    );
};

export default Calculator;

