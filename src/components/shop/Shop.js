
import React, { useEffect, useState } from 'react';
import Products from '../products/Products';
import Product from '../products/Product';

const Shop = ({products}) => {
    // const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [searchQuery, setSearchQuery] = useState('');
useEffect(()=>{},[products])
    // useEffect(() => {
    //     // Fetch products from API
    //     fetch('https://summerfield.store/products/?format=json')
    //       .then(response => response.json())
    //       .then(data => {
    //           setProducts(data?.products);
    //           setFilteredProducts(data?.products);
    //       });
    // }, []);

    useEffect(() => {
        // Apply filters when any filter state changes
        applyFilters();
    }, [category, subcategory, brand, priceRange, searchQuery]);

    const applyFilters = () => {
        let filtered = products.filter(product => {
            // Filter by category
            if (category && product.category.cat_slug !== category) return false;
            // Filter by subcategory
            if (subcategory && product.category.sub_slug !== subcategory) return false;
            // Filter by brand
            if (brand && product.brand.slug !== brand) return false;
            // Filter by price range
            if (product.selling_price < priceRange.min || product.selling_price > priceRange.max) return false;
            // Filter by search query
            if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
            return true;
        });

        setFilteredProducts(filtered);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
    };

    const handleSubcategoryChange = (e) => {
        const selectedSubcategory = e.target.value;
        setSubcategory(selectedSubcategory);
    };

    const handleBrandChange = (e) => {
        const selectedBrand = e.target.value;
        setBrand(selectedBrand);
    };

    const clearFilters = () => {
        setCategory('');
        setSubcategory('');
        setBrand('');
        setPriceRange({ min: 0, max: 1000 });
        setSearchQuery('');
    };
 
    return (
        <div>
            <div className="flex justify-center ">
                <label className="form-control w-52 max-w-xs mr-2">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <select className="select select-bordered" value={category} onChange={handleCategoryChange}>
                         <option value="">Pick one</option>
   
                           {products.map(product => (
                          <option key={product.category.cat_slug} value={product.category.cat_slug}>
                           {product.category.cat}
                          </option>
                      ))}
                           </select>

                </label>
            <label className="form-control w-52 max-w-xs mr-2">
            <div className="label">
              <span className="label-text">Subcategory</span>
          </div>
    <select className="select select-bordered" value={subcategory} onChange={handleSubcategoryChange}>
        <option value="">Pick one</option>
        {products.map(product => (
            <option key={product.category.sub_slug} value={product.category.sub_slug}>
                {product.category.sub}
            </option>
        ))}
    </select>
   </label>

  <label className="form-control w-52 max-w-xs mr-2">
    <div className="label">
        <span className="label-text">Brand</span>
    </div>
    <select className="select select-bordered" value={brand} onChange={handleBrandChange}>
        <option value="">Pick one</option>
        {products.map(product => (
            <option key={product.brand.slug} value={product.brand.slug}>
                {product.brand.title}
            </option>
        ))}
    </select>
</label>


<label className="form-control w-52 max-w-xs">
    <div className="label">
        <span className="label-text">Price Range</span>
    </div>
    <div className="flex items-center">
        <input 
            type="number" 
            className="input input-bordered mr-2 w-52" 
            value={priceRange.min} 
            onChange={e => setPriceRange({ ...priceRange, min: e.target.value })} 
            placeholder="Min"
        />
        <span className="mx-2">to</span>
        <input 
            type="number" 
            className="input input-bordered w-52" 
            value={priceRange.max} 
            onChange={e => setPriceRange({ ...priceRange, max: e.target.value })} 
            placeholder="Max"
        />
    </div>
</label>

</div>
            <div className="search-container flex justify-center mt-5" >
                <input
                style={{width:"70%"}}
                 className='  border pl-5 h-10'
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search products"
                />
            </div>
            <div className="shop-container  " >
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-4" style={{justifyContent:"center"}}>
                    {filteredProducts && filteredProducts.map(product => (
                        <Product
                            productData={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;






















































// import React, { useEffect, useState } from 'react';
// import Products from '../products/Products';
// import Product from '../products/Product';


// const Shop = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('https://summerfield.store/products/?format=json')
//           .then(response => response.json())
//           .then(data => setProducts(data?.products))
    
//       }, [])
//       console.log("aggresive",products)


//     return (

//         // <div > 
//         //     <Products products={products}></Products>
//         // </div>

//         <div>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="search-container base-300 ">
//                 <input type="text" className='pl-2'
//                     placeholder='search product'
//                     // onChange={handleSearch}
//                 />
//             </div>
//             <div className="shop-container">
//                 <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-4'>
//                     {
//                         products?.map(data => <Product
//                             productData={data}
//                             // key={data.key}
//                             // handleAddToCart={handleAddToCart}
//                             // removeProduct={removeProduct}

//                         ></Product>)
//                     }
//                     <br />
//                     {/* <div className="pagination">
//                         {
//                             [...Array(pageCount).keys()].map(number => <button

//                                 className={number === page ? 'selected' : ''}
//                                 key={number}
//                                 onClick={() => setPage(number)}

//                             >{number + 1}</button>)
//                         }
//                     </div> */}

//                 </div>

// {/* 
//                 <div className={isAdmin ? 'hidden' : 'cart-container'}>
//                     <Cart cart={cart}>
//                         <Link to='/review'>
//                             <button className='btn'>review Item</button>
//                         </Link>
//                     </Cart>
//                 </div> */}


//             </div>
//         </div>

//     );
// };

// export default Shop;