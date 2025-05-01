import React from 'react';
import PropTypes from 'prop-types';
import './Product.css'
const Product = ({products,handelprice}) => {
    console.log(products)
    const {title, image, category, price} = products
    // console.log(image)
    return (
        <div className='m-12 product'>
            <img className='product-img' src={image} alt="" />
            <h3 className="text-2xl">{title.slice(0,10)}</h3>
            <h3 className="text-2xl">{category}</h3>

            <div className='flex justify-between'>
                <h3 className='text-2xl '> Price : ${price}</h3>
                <button onClick={()=>handelprice(price, products)} className='addtocart'>Add To Cart</button>
            </div>
        </div>
    );
};
Product.propTypes = {
    products : PropTypes.object.isRequired
}

export default Product;