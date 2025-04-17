import React from 'react';
import Add, { multiply } from '../../utils/Calculator';

const Sunglass = () => {
    const first = 33;
    const second = 22;

    const sum = Add(first,second)
    const mul =  multiply(first,second)

    return (
        <div>
            
        </div>
    );
};

export default Sunglass;