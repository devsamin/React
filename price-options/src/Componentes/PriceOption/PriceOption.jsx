import PropTypes from 'prop-types';
import React from 'react';
import Features from '../Features/Features';

const PriceOption = ({ gym }) => {
    console.log(gym);
    const { name, features, price } = gym;
    return (
            
        <div className='border-2 p-4 '>
            
            <div className='text-center'>
                <h2 className="text-4xl">{name}</h2>
                <h2 className="text-7xl text-blue-600 font-bold">{price}/day</h2>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
                <button className='w-full bg-green-400 hover:bg-green-600 p-3 m-3 font-bold'>Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    gym: PropTypes.object
};

export default PriceOption;
