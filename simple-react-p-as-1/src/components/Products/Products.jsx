import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = ({handelprice,showselected,setshowselected,buyproduct,removeItem}) => {
    const [products, setproducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setproducts(data))
    },[])

    const DisplayProduct = showselected ? buyproduct : products
    return (
        <div >
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-4xl m-12">Available Products</h3>
                </div>
                <div className='flex'>
                    <button onClick={()=> setshowselected(false)} className={`as-button ${!showselected ? 'bg-yellow-400' : '' }`}>Available</button>
                    <button onClick={()=> setshowselected(true)} className={`as-button ${showselected ? 'bg-yellow-400' : '' }`}>Selected ({buyproduct.length}/6)</button>
                </div>
            </div>

            <div className='product-container'>
                    {
                        

                        DisplayProduct.map(product => <Product key={product.id} handelprice={handelprice} removeItem={removeItem} showselected={showselected} setshowselected={setshowselected} products={product}></Product>)
                    
                }
            </div>
        </div>
    );
};

export default Products;