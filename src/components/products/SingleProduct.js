import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';


const SingleProduct = ({ singleProductData }) => {
    const [cartData, setCartData, addToCart, deleteFromCart] = useCart()
    console.log(singleProductData)
    if (!singleProductData) {
        return (<div>Loading</div>)
    }

    console.log("singproductdata", singleProductData)

    return (
        <div className='flex justify-center item-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="text-right cursor-pointer" onClick={() => deleteFromCart(singleProductData.id)} style={{ width: "2%", position: "relative", top: "1%", left: "95%", height: "4px", backgroundColor: "transparent" }}>X</div>
            <figure>
                <img src={`https://summerfield.store${singleProductData?.product?.images[0]?.thumb}`} alt={singleProductData.product.title} />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl">{singleProductData.product.title}</h2>
                <p className="text-2xl">Quantity: {singleProductData?.quantity}</p>
                <p className="font-bold text-2xl">Price: {singleProductData?.product.selling_price} $</p>
            </div>
           
            <Link to={`/relatedProducts/${encodeURIComponent(JSON.stringify(singleProductData))}`} className="block w-full h-full">
               <button className='btn '>Product review
                </button> 
                
                </Link>
           
                
            
        </div>
        </div>
        

    );
};

export default SingleProduct;
