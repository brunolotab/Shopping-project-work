import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Detail from './pages/Details/Detail';
import Signin from './pages/Signin/Signin';
import { products } from './data/products';
import PrivateRoutes from './components/PrivateRoute/PrivateRoutes';



function App() {
  // const isLoggedIn = window.localStorage.getItem('loggedIn'); //check if logged in
  // const userType = window.localStorage.getItem('userType');
  const admin = JSON.parse(sessionStorage.getItem('admin'))

  const jewelery = products.filter((id)=>{return id.category === 'jewelery'})
  const menWear = products.filter((id)=>{return id.category === "men's clothing"})
  const electronics = products.filter((id)=>{return id.category === 'electronics'})

  const [storeProducts, setStoreProducts] = useState(jewelery);
  const [storeProduct2, setStoreProduct2] = useState(menWear);
  const [storeProduct3, setStoreProduct3] = useState(electronics);
  const [cartCount, setCartCount] = useState({ count: 0 });

  const updateCart = () => {
    setCartCount({ count: cartCount.count + 1 })
  }


  return (
    <>

      <BrowserRouter>
        <Navbar count={cartCount} />
          <Routes>
            <Route path='/' element={<Home products={products} count={cartCount} updateCount={updateCart} />} />
            <Route element={<PrivateRoutes/>}>
            <Route path='/home' element={<Home products={storeProducts} count={cartCount} updateCount={updateCart} />} />
            <Route path='/home2' element={<Home products={storeProduct2} count={cartCount} updateCount={updateCart} />} />
            <Route path='/home3' element={<Home products={storeProduct3} count={cartCount} updateCount={updateCart} />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/product/:productid' element={<Detail products={products } />} />
            {/* <Route path='/product/:productid' element={<Detail products={storeProducts} />} /> */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
