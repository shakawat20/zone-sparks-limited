import React from 'react';
import { useParams } from 'react-router-dom';

const RelatedProducts = () => {
    const { id } = useParams();

    return (
        <div>
            hello ksa
            sdlgjslg
            sglsjkg
            gslljgslj

            {
                id
            }
            sglskjg
        </div>
    );
};

export default RelatedProducts;