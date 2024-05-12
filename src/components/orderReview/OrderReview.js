import React from 'react';
import useCart from '../../hooks/useCart';
import Product from '../products/Product';
import SingleProduct from '../products/SingleProduct';

const OrderReview = () => {
    const [cartData, setCartData, addToCart,] = useCart()
    // console.log( "cartdata items", cartData[0])

    if (!cartData) {
        return (<div>Loading</div>)
    }
    return (
        <div className='flex justify-center'>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
                {
                    cartData[0]?.items.map(data => <SingleProduct singleProductData={data}></SingleProduct>)
                }
            </div>


        </div>
    );
};

export default OrderReview;