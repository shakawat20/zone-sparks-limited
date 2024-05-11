import React from 'react';
import useCart from '../../hooks/useCart';


const Product = ({ productData }) => {


    const [, , addToCart] = useCart();





    return (
        
            <div className="card card-side bg-base-100 shadow-xl w-3/5 flex flex-col mt-4">
                <figure>
                    <img className='w-3/4' src={`https://summerfield.store${productData?.images[0]?.thumb}`} alt={productData?.title} />
                </figure>
                <div >
                    <h2>{productData?.title}</h2>
                    <h2>{productData?.selling_price} $</h2>
                  
                    <button className="btn btn-primary w-32"
                     onClick={()=>addToCart(productData)}
                    >Add to cart</button>
                </div>
            </div>
       

    );
};

export default Product;