import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RelatedProducts = () => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { id } = useParams();
    const singleProductData = JSON.parse(decodeURIComponent(id));

    useEffect(() => {
        if (singleProductData.product?.id) {
            fetch(`https://summerfield.store/products/related-product/${singleProductData.product.id}/`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => setRelatedProducts(data))
                .catch(error => console.error('Error fetching related products:', error));
        }
    }, [singleProductData.product?.id]); // Include singleProductData.product?.id in the dependency array

    console.log("relatedProducts", relatedProducts);
    console.log(singleProductData);

    return (
        <div className='flex justify-between' >
            <div className="card w-3/4 bg-base-100 shadow-xl" style={{ height: "500px" }}>
                <figure>
                    <img src={`https://summerfield.store${singleProductData?.product?.images[0]?.thumb}`} alt={singleProductData.product.title} className='w-100' />
                </figure>
                <div >
                    <h2 className="text-2xl">{singleProductData.product?.title}</h2>
                    <p className="text-2xl">Quantity: {singleProductData?.quantity}</p>
                    <p className="font-bold text-2xl">Price: {singleProductData?.product.selling_price} $</p>
                </div>
            </div>

            
                <div className='ml-10'>
                    {relatedProducts && relatedProducts.products && relatedProducts.products.map(productData => (
                        <div className="card w-7/8 bg-base-100 shadow-xl mt-2" key={productData.id}>
                            <figure>
                                <img src={`https://summerfield.store/${productData?.images[0]?.thumb}`} alt={productData.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl">{productData.title}</h2>
                                <p className="font-bold text-2xl">Price: {productData?.selling_price} $</p>
                           
                            </div>
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

export default RelatedProducts;
