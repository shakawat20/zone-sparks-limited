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
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.products) {
          setProducts(data.products);
        } else {
          throw new Error('Data or products array not found in response');
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  
  console.log(products)
  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
     
      <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Shop products={products} ></Shop>} />
        <Route path='/orderReview' element={<OrderReview></OrderReview>} />
        <Route path='/registration' element={<Registration></Registration>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/relatedProducts/:id' element={<RelatedProducts></RelatedProducts>} />

      </Routes>

    </div>
  );
}

export default App;
