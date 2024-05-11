import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {


    return (
        <div className='flex flex-wrap justify-center' style={{ border: "2px solid red" }}>

            {
                products?.map(data =>
                    <Link to={`/singleProduct/${encodeURIComponent(JSON.stringify(data))}`}>

                        <div className="card w-96 bg-base-100 shadow-xl" >
                            <figure className="px-10 pt-10">
                                <img src={`https://summerfield.store${data?.images[0]?.thumb}`}></img>

                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title ">{data?.title}</h2>
                                <h2 className="card-title ">{data?.selling_price} $</h2>
                               
                            </div>
                        </div>
                    </Link>
                )
            }

        </div>
    );
};

export default Products;