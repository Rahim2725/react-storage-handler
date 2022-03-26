import React from 'react';
import { add, multuply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 2;
    const result = multuply(first, second);
    const sum = add(first,second)
    return (
        <div>
            <h3>This is shoes Componet</h3>
            <p>Result: {result}</p>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;