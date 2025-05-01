import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = ({handelprice}) => {
    const [products, setproducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setproducts(data))
    },[])
    return (
        <div >
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-4xl m-12">Available Products</h3>
                </div>
                <div className='flex'>
                    <h3 className="text-4xl m-12">Available</h3>
                    <h3 className="text-4xl m-12">Selected</h3>
                </div>
            </div>

            <div className='product-container'>
                    {
                        

                        products.map(product => <Product key={product.id} handelprice={handelprice} products={product}></Product>)
                    
                }
            </div>
        </div>
    );
};

export default Products;