import React, { useEffect, useState } from 'react';

const Cart = () => {
    // const token =localStorage.getItem('access_token')
    // const [cartData, setCartData] = useState(null);
    // useEffect(() => {
    //     const fetchCartData = async () => {
    //         try {
    //             const response = await fetch(`https://summerfield.store/cart/`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'content-type': 'application/json',
    //                     authorization: `Bearer ${localStorage.getItem('access_token')}`
    //                 },
    //             });
    //             let data = await response.json();

    //             // If cart doesn't exist, create a new cart instance
    //             if (data.length === 0) {
    //                 const createCartResponse = await fetch(`https://summerfield.store/cart/`, {
    //                     method: 'POST',
    //                     headers: {
    //                         'content-type': 'application/json',
    //                         authorization: `Bearer ${localStorage.getItem('access_token')}`
    //                     },
    //                     body: JSON.stringify({})
    //                 });
    //                 data = await createCartResponse.json();
    //             }

    //             setCartData(data);
    //         } catch (error) {
    //             console.error('Error fetching cart data:', error);
    //         }
    //     };

    //     fetchCartData();
    // }, []);
    // console.log(cartData)
    return (
        <div>
            <div>
                <h3>Order summary</h3>
                <h5>Items Ordered: </h5>
                <h5>cost : </h5>
               
                my name is khan
            </div>
        </div>
    );
};

export default Cart;