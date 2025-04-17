import React from 'react';

const Watch = ({watch}) => {
    const {name, price} = watch
    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>Price : {price}</h3>
        </div>
    );
};

export default Watch;