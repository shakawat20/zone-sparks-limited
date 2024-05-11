import React, { useEffect, useState } from 'react';

const useCart = () => {

    const [cartData, setCartData] = useState(null);
    const [hope, setHope] = useState();

    console.log(cartData)

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await fetch(`https://summerfield.store/cart/`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('access_token')}`
                    },
                });
                let data = await response.json();

                if (data.length === 0) {
                    const createCartResponse = await fetch(`https://summerfield.store/cart/`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('access_token')}`
                        },
                        body: JSON.stringify({})
                    });
                    data = await createCartResponse.json();
                }

                setCartData(data);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCartData();
    }, []);

    const addToCart = async (productData) => {
        try {
            if (!cartData || cartData.length === 0) {
                console.error('Cart data is not available.');
                return;
            }
            const cartId = cartData[0].id;
            const response = await fetch(`https://summerfield.store/cart/${cartId}/items/`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({
                    product_id: productData.id,
                    color: productData.variants[0].color,
                    size: productData.variants[0].size,
                    image: productData.variants[0].image,
                    quantity: productData.variants[0].stock
                })
            });
            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }
            const data = await response.json();
            setHope(data)
            console.log("shesh", data);

        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const deleteFromCart = async (item_id) => {
        const deleteCartId = cartData[0].id;
        console.log("delete item id", item_id);
        
        try {
            const response = await fetch(`https://summerfield.store/cart/${deleteCartId}/items/${item_id}/`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
            });
    
            if (!response.ok) {
                throw new Error(`Failed to delete item: ${response.status} ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error deleting item:', error.message);
        }
    };
    



    return [cartData, setCartData, addToCart,deleteFromCart]
    
};

export default useCart;