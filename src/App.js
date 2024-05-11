import { useEffect, useState } from 'react';
import './App.css';
import Shop from './components/shop/Shop';
import { Route, Router, Routes } from 'react-router-dom';
import SingleProduct from './components/products/SingleProduct';
import Navbar from './components/navbar/Navbar';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import OrderReview from './components/orderReview/OrderReview';
import RelatedProducts from './components/relatedProducts/RelatedProducts';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://summerfield.store/products/?format=json')
      .then(response => response.json())
      .then(data => setProducts(data?.products))

  }, [])
  console.log(products)
  if (!products) {
    <div>Loading</div>
  }

  return (
    <div className="App">
      {/* <Shop products={products}></Shop> */}
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop products={products} setProducts={setProducts}></Shop>} />
        <Route path='/orderReview' element={<OrderReview></OrderReview>} />
        <Route path='/registration' element={<Registration></Registration>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/relatedProducts' element={<RelatedProducts></RelatedProducts>} />

      </Routes>

    </div>
  );
}

export default App;
