import React from 'react';
import './bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottlee,handeladdtocart}) => {
    const {category,image,price} = bottlee
    return (
        <div className='bottle'>
            <h3>Name : {category}</h3>
            <img src={image} alt="" />
            <p><h4>Price : {price}</h4></p>
            <button onClick={()=>handeladdtocart(bottlee)} >ADD To Cart </button>
        </div>
    );
};
Bottle.propTypes = {
    bottlee : PropTypes.object.isRequired,
    handeladdtocart : PropTypes.func
}
export default Bottle;